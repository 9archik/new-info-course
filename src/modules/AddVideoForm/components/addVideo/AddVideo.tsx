import FileInput from "../../../../ui/FileInput/FileInput";
import Button from "../../../../ui/Button/Button";
import styles from "./styles.module.scss";
import PlusSVG from "../../../../shared/icons/PlusSVG";
import { useState } from "react";
import VideoPlayer from "../../../../components/VideoPlayer/Videoplayer";
import { AddVideoProps } from "./interface";
import { FC } from "react";

const AddVideo: FC<AddVideoProps> = ({ addVideo }) => {
  return (
    <>
      <div className={styles.container}>
        <>
          <div className={styles.info}>
            <div>Искусственный интеллект</div>
            <div className={styles.theme}>Тема курса</div>
          </div>
          <FileInput
            accept="video/*"
            className={styles.fileInputCont}
            onChange={addVideo}
          >
            <div className={styles.addFileCont}>
              <div className={styles.plus}>
                <PlusSVG />
              </div>

              <div className={styles.addVideoText}>Добавить видео</div>
            </div>
          </FileInput>
        </>
      </div>
    </>
  );
};

export default AddVideo;
