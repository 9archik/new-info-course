import vid from "../../shared/images/video.mp4";
import styles from "./styles.module.scss";
import Button from "../../ui/Button/Button";
import FullScreenSVG from "../../shared/icons/FullScreenSVG";
import SecondsPrev from "../../shared/icons/SecondsPrev";
import StartSVG from "../../shared/icons/StartSVG";
import SecondsNext from "../../shared/icons/SecondsNext";
import { MutableRefObject, useEffect, useRef } from "react";
import { useState } from "react";
import PauseSVG from "../../shared/icons/PauseSVG";
import ReactSlider from "react-slider";
import "./styles.scss";
import { createPortal } from "react-dom";
import { VideoPlayerProps } from "./interface";
import { FC } from "react";
import { formatTime } from "../../shared/functions/formatTime";
import React from "react";
import { useLayoutEffect, useCallback } from "react";
import useDoubleClick from "../../shared/hooks/useDoubleClick";
import {
  getClickElementXCoordinate,
  getClickElementXCoordinatePercent,
} from "../../shared/functions/getClickElementXCoordinate";

const isDescendant = (
  parent: HTMLElement | null,
  child: HTMLElement | null
) => {
  if (!parent || !child) {
    return false;
  }

  if (parent === child) return true;

  let node = child.parentNode;

  while (node !== null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }

  return false;
};

const VideoPlayer: FC<VideoPlayerProps> = React.memo(
  ({ src, onPlay, onTimeChange, className, videoElementRef }) => {
    const videoRef: MutableRefObject<HTMLVideoElement | null> = useRef(null);
    const pauseSVGRef = useRef<SVGSVGElement | null>(null);
    const startSVGRef = useRef<SVGSVGElement | null>(null);
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const playBtnRef = useRef<HTMLButtonElement | null>(null);
    const thumbRef = useRef<HTMLDivElement | null>(null);
    const videoContainerRef = useRef<HTMLDivElement | null>(null);
    const timeoutRef = useRef<any>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState<string>("");
    const [progress, setProgress] = useState<number>(0);
    const [controlsView, setControlsView] = useState<boolean>(true);
    const [fullScreen, setFullScreen] = useState<boolean>(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useLayoutEffect(() => {
      const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      setIsTouchDevice(isTouch);
    }, []);

    useEffect(() => {
      if (fullScreen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    }, [fullScreen]);

    const touchContainer: React.TouchEventHandler<HTMLDivElement> = (e) => {
      const target = e.target as HTMLElement; // Преобразуем target в HTMLElement
      if (controlsView === true) {
        setControlsView(false);
      } else {
        setControlsView(true);
      }
    };

    const switchPlay = () => {
      const video = videoRef.current || videoElementRef?.current;
      if (video) {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
          setControlsView(false);
          if (timeoutRef?.current) clearTimeout(timeoutRef.current);
        }, 2000);
        if (isPlaying) {
          video.pause();
        } else {
          video.play();
        }
        setIsPlaying(!isPlaying);
      }
    };

    const handlePlay: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      e.stopPropagation();
      switchPlay();
    };

    const videoDurationFormat = () => {
      const video = videoRef.current || videoElementRef?.current;
      if (video) {
        return formatTime(video.duration);
      } else {
        return "NAN";
      }
    };

    function oneClick(e: MouseEvent) {
      console.log("event", e);
      if (!controlsView) {
        setControlsView(true);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        timeoutRef.current = setTimeout(() => {
          setControlsView(false);
          if (timeoutRef?.current) clearTimeout(timeoutRef.current);
        }, 2000);
      } else {
        const video = videoRef.current || videoElementRef?.current;
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        setControlsView(false);
      }
    }

    function twoClick(e: MouseEvent) {
      console.log("two", e);
      const video = videoRef.current || videoElementRef?.current;
      if (video) {
        if (videoContainerRef.current) {
          let percent = getClickElementXCoordinatePercent(
            e,
            videoContainerRef.current
          );

          if (percent > 0.7) video.currentTime += 15;

          if (percent < 0.3) video.currentTime -= 15;
        }
      }
    }

    const singleDoubleClick = useDoubleClick({
      onSingleClick: oneClick,
      onDoubleClick: twoClick,
      ref: videoContainerRef,
      latency: 350,
    });

    useEffect(() => {
      const video = videoRef.current || videoElementRef?.current;

      if (video) {
        video.addEventListener("timeupdate", (e) => {
          if (video) {
            setCurrentTime(formatTime(video.currentTime));
            setProgress(video.currentTime / video.duration);

            if (onTimeChange) {
              onTimeChange(e, video.currentTime);
            }
          }
        });
        video.addEventListener("loadeddata", () => {
          if (video) {
            setCurrentTime(formatTime(video.currentTime));
          }
        });
      }
    }, [videoElementRef]);

    const sliderValue = () => {
      const video = videoRef.current || videoElementRef?.current;

      if (video) {
        return video.duration * progress;
      }

      return undefined;
    };

    const changeSlider = (value: number, index: number) => {
      const video = videoRef.current || videoElementRef?.current;
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setControlsView(false);
        if (timeoutRef?.current) clearTimeout(timeoutRef.current);
      }, 2000);

      setControlsView(true);
      if (video) {
        video.currentTime = value;
        setProgress(value / video.duration);
      }
    };
    return (
      <>
        <div
          onMouseMove={() => {
            if (!isTouchDevice) {
              setControlsView(true);
            }
          }}
          onMouseLeave={() => {
            if (isPlaying) {
              setControlsView(false);
            }
          }}
          ref={videoContainerRef}
          onClick={() => singleDoubleClick}
          className={`${styles.container} ${className} ${
            fullScreen && styles.fullScreen
          }`}
        >
          <video
            onPlay={onPlay}
            ref={videoElementRef ? videoElementRef : videoRef}
            src={src}
          />
          <div
            className={`${styles.controls} ${controlsView && styles.active}`}
          >
            <div className={styles.headerControls}>
              <div className={styles.courseInfo}>
                <div className={styles.courseName}>Название курса</div>
                <div className={styles.courseTheme}>Тема курса</div>
              </div>
              <Button
                className={styles.fullScreenBtn}
                onTouchStart={(e) => {
                  e.stopPropagation();
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setFullScreen(!fullScreen);
                }}
              >
                <FullScreenSVG />
              </Button>
            </div>

            <div className={styles.videoButtons}>
              <Button className={styles.videoSecBtn} onClick={() => ""}>
                <SecondsPrev />
              </Button>

              <Button
                onTouchStart={(e) => {
                  e.stopPropagation();
                }}
                ref={playBtnRef}
                className={styles.playBtn}
                onClick={handlePlay}
              >
                {isPlaying ? <StartSVG /> : <PauseSVG />}
              </Button>

              <Button className={styles.videoSecBtn} onClick={() => ""}>
                <SecondsNext />
              </Button>
            </div>

            <div className={styles.timeBar}>
              <div className={styles.time}>
                <span>
                  {currentTime} / {videoDurationFormat()}
                </span>
              </div>

              <ReactSlider
                onChange={changeSlider}
                onBeforeChange={(value, index) => {
                  const video = videoRef.current || videoElementRef?.current;
                  if (video) {
                    video.currentTime = value;
                    setProgress(value / video.duration);
                  }
                }}
                pearling
                onSliderClick={(value) => {
                  const video = videoRef.current || videoElementRef?.current;
                  if (video) {
                    video.currentTime = value;
                    setProgress(value / video.duration);
                  }
                }}
                min={0}
                max={
                  videoElementRef?.current?.duration ||
                  videoRef?.current?.duration
                }
                step={1}
                value={sliderValue()}
                className={styles.slider}
                thumbClassName={styles.thumb}
                trackClassName={styles.progressBar}
                renderTrack={() => (
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className={styles.progressBar}
                  >
                    <span
                      style={{ width: `${progress * 100}%` }}
                      className={styles.progress}
                    ></span>
                  </div>
                )}
                renderThumb={(props, state) => <div {...props}></div>}
              />
            </div>
          </div>
        </div>
      </>
    );
  },
  () => true
);

export default VideoPlayer;
