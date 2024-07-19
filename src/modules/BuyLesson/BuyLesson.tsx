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
import MaterialListLink from "../../components/ClientComponents/MaterialListLink/MaterialListLink";
import MaterialAttachmentList from "../../components/ClientComponents/MaterialAttachmentList/MaterialAttachmentList";
import { LinkInfo } from "../../shared/models/LinkListItemModel";
import { TimeCodeInfo } from "./components/TimeCodeList/TimeCode/interface";
import TimeCodeList from "./components/TimeCodeList/TimeCodeList";
import { StepInfo } from "./components/StepList/Step/interface";
import StepList from "./components/StepList/StepList";
import MesAnswerSVG from "../../shared/icons/MesAnswerSVG";
import { useState } from "react";
import ModalMaterialBuy from "../../components/ClientComponents/ModalMaterialBuy/ModalMaterialBuy";

const LINKS: LinkInfo[] = [
  { text: "текст ссылки", href: "" },
  { text: "текст ссылки", href: "" },
];

const TIMECODES: TimeCodeInfo[] = [
  { name: "Беслпатный", time: 10 },
  { name: "Беслпатный", time: 30 },
  { name: "Беслпатный", time: 10 },
  { name: "Беслпатный", time: 30 },
];

const STEPS: StepInfo[] = [
  {
    description: "описание описание",
    links: [
      { href: "ссылка", text: "текст" },
      { href: "ссылка", text: "текст" },
      { href: "ссылка", text: "текст" },
    ],
    attachments: ["вложение"],
  },

  {
    description: "описание описание",
  },

  {
    description: "описание описание",
    links: [
      { href: "ссылка", text: "текст" },
      { href: "ссылка", text: "текст" },
      { href: "ссылка", text: "текст" },
    ],
  },
  {
    description: "описание описание",
    attachments: ["вложение"],
  },
];

const ATTACHMENTS: string[] = ["Вложение", "Вложение"];
const BuyLesson = () => {
  const [openInfo, setOpenInfo] = useState<boolean>(false);
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
        name="Урок 1. тема такая-то в две и более строки"
        toggleButton={() => {
          setOpenInfo(!openInfo);
        }}
      />
      {openInfo && (
        <div className={styles.info}>
          <TimeCodeList timecodes={TIMECODES} />
          <MaterialDescription className={styles.description} />
          <StepList steps={STEPS} />
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
          <MesAnswerSVG />
        </BaseButton>
      </div>

      <BottomButtonPanel
        clickMainButton={() => {
          setActiveModal(true);
        }}
        childrenMainButton={<>Купить урок</>}
      />

      <ModalMaterialBuy
        active={activeModal}
        clickClose={() => {
          setActiveModal(false);
        }}
      />
    </div>
  );
};

export default BuyLesson;
