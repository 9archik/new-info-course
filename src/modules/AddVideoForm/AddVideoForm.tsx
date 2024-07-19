import PlusSVG from "../../shared/icons/PlusSVG";
import AddVideo from "./components/addVideo/AddVideo";
import TimeText from "./components/TimeText/TimeText";
import styles from "./styles.module.scss";
import Button from "../../ui/Button/Button";
import ArrowSVG from "../../shared/icons/ArrowSVG";
import TimeCodeList from "./components/TimeCodeList/TimecodeList";
import {
  MutableRefObject,
  RefObject,
  useCallback,
  useEffect,
  useState,
} from "react";
import BottomButtonPanel from "../../ui/BottomButtonPanel/BottomButtonPanel";
import VideoPlayer from "../../components/VideoPlayer/Videoplayer";
import { useRef } from "react";
import AdminNavbar from "../../components/Navbar/Admin/AdminNavbar";
import vid from "../../shared/images/video.mp4";
import { TimeCodeItem } from "./components/TimeCodeList/TimeCodeItem/interface";
import { useAppDispatch } from "../../shared/hooks/reduxTypes";
import { ActionAddTimeCode } from "./models/actionsModels";
import { addTimeCode } from "./store/store";
import { useNavigate } from "react-router-dom";

const STARTTIMECODELIST: TimeCodeItem[] = [
  {
    curTime: 0,
    name: "Бесплатный просмотр",
    deleteMode: false,
    readonly: true,
    id: new Date().getMilliseconds(),
  },
];

const AddVideoForm = () => {
  const navigate = useNavigate();
  const [timeCodeListOpen, setTimeCodeListOpen] = useState<boolean>(false);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [timeCodeList, setTimeCodeList] =
    useState<TimeCodeItem[]>(STARTTIMECODELIST);
  const [curTimeVideo, setCurTimeVideo] = useState(0);
  const [endTimeVideo, setEndTimeVIdeo] = useState(0);
  const videoRef: MutableRefObject<HTMLVideoElement | null> = useRef(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener("loadeddata", () => {
        if (video) {
          setEndTimeVIdeo(video.duration);
        }
      });
    }
  }, [videoFile]);

  const handleAddTimeCode = () => {
    let elem: ActionAddTimeCode = {
      curTime: curTimeVideo,
    };
    dispatch(addTimeCode(elem));
  };

  return (
    <form>
      <>
        {!videoFile ? (
          <AddVideo
            addVideo={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setVideoFile(file);
              }
            }}
          />
        ) : (
          <VideoPlayer
            videoElementRef={videoRef ? videoRef : undefined}
            onTimeChange={(e, time) => {
              setCurTimeVideo(time);
            }}
            src={URL.createObjectURL(videoFile)}
          />
        )}
      </>

      <div className={styles.panel}>
        <TimeText curTime={curTimeVideo} endTime={endTimeVideo} />
        <Button
          disabled={!videoFile}
          className={`${styles.addBtn} ${!videoFile && styles.disabled}`}
          onClick={handleAddTimeCode}
        >
          Таймкод <PlusSVG />
        </Button>
      </div>

      <Button
        onClick={() => {
          setTimeCodeListOpen(!timeCodeListOpen);
        }}
        className={styles.timeCodeBtn}
      >
        <span>Тайм-коды</span>
        <ArrowSVG />
      </Button>

      {timeCodeListOpen && <TimeCodeList isOpen={timeCodeListOpen} />}

      <AdminNavbar
        clickPlusBtn={() => {
          navigate("/createLesson");
        }}
      />
    </form>
  );
};

export default AddVideoForm;
