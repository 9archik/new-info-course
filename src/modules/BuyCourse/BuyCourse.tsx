import styles from "./styles.module.scss";
import videoFile from "../../shared/images/video.mp4";
import VideoPlayer from "../../components/VideoPlayer/Videoplayer";
import MaterialAuthor from "../../components/ClientComponents/Author/Author";
import avatar from "../../shared/images/preview.png";
import MaterialName from "../../components/ClientComponents/MaterialName/MaterialName";
import MaterialDescription from "../../components/ClientComponents/MaterialDescription/MaterialDescription";
import MaterialPrice from "../../components/ClientComponents/MateralPrice/MaterialPrice";
import BottomButtonPanel from "../../ui/BottomButtonPanel/BottomButtonPanel";
import LikeButton from "../../components/ClientComponents/LikeButton/LikeButton";
import BaseButton from "../../components/ClientComponents/BaseButton/BaseButton";
import ShareSVG from "../../shared/icons/ShareSVG";
import { Link } from "react-router-dom";
import ArrowNextSVG from "../../shared/icons/ArrowNextSVG";
import PageTitle from "../../ui/PageTitle/PageTitle";
import LessonList from "./components/LessonList/LessonList";
import MaterialListLink from "../../components/ClientComponents/MaterialListLink/MaterialListLink";
import MaterialAttachmentList from "../../components/ClientComponents/MaterialAttachmentList/MaterialAttachmentList";
import { LinkInfo } from "../../shared/models/LinkListItemModel";
import { useState } from "react";
import ModalMaterialBuy from "../../components/ClientComponents/ModalMaterialBuy/ModalMaterialBuy";
const LINKS: LinkInfo[] = [
  { text: "текст ссылки", href: "" },
  { text: "текст ссылки", href: "" },
];

const ATTACHMENTS: string[] = ["Вложение", "Вложение"];
const BuyCourse = () => {
  const [openInfo, setOpenInfo] = useState(false);
  const [activeModal, setActiveModal] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      <VideoPlayer className={styles.video} src={videoFile} />
      <MaterialAuthor
        className={styles.author}
        name="Иванов Иван"
        role="Автор курса"
        avatar={avatar}
      />
      <MaterialName
        isActive={openInfo}
        className={styles.name}
        name="Искуссьвенный интеллект"
        toggleButton={() => {
          setOpenInfo(!openInfo);
        }}
      />
      {openInfo && (
        <div className={styles.info}>
          <MaterialDescription />
        </div>
      )}

      <MaterialPrice price={15000} />

      <div className={styles.btnList}>
        <LikeButton mode="like" onClick={() => {}} active={false} />
        <LikeButton
          className={styles.btn}
          mode="dislike"
          onClick={() => {}}
          active={true}
        />
        <BaseButton className={styles.btn} onClick={() => {}}>
          <ShareSVG />
        </BaseButton>
      </div>

      <Link className={styles.comBtn} to={""}>
        <span>Комментарии</span> <ArrowNextSVG />
      </Link>

      <PageTitle className={styles.title} text="Вложения и ссылки" />

      <MaterialListLink links={LINKS} />

      <MaterialAttachmentList attachments={ATTACHMENTS} />

      <PageTitle className={styles.title} text="Уроки" />

      <LessonList />

      <ModalMaterialBuy
        active={activeModal}
        clickClose={() => {
          setActiveModal(false);
        }}
      />
      <BottomButtonPanel
        clickMainButton={() => {
          setActiveModal(true);
        }}
        childrenMainButton={<>Купить курс</>}
      />
    </div>
  );
};

export default BuyCourse;
