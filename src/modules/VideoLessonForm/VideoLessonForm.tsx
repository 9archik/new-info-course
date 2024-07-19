import FormItem from "../../components/FormItem/FormItem";
import { useState } from "react";
import Input from "../../ui/Input/Input";
import BottomButtonPanel from "../../ui/BottomButtonPanel/BottomButtonPanel";
import Textarea from "../../ui/Textarea/textarea";
import FileSVG from "../../shared/icons/FileSVG";
import Button from "../../ui/Button/Button";
import LinkSVG from "../../shared/icons/LinkSVG";
import { IStepLesson } from "./models/step";
import FileName from "../../ui/FileName/FileName";
import NameInput from "../../components/FormItem/Items/FormItemInput/FormItemInput";
import FormItemInput from "../../components/FormItem/Items/FormItemInput/FormItemInput";
import FormItemTextarea from "../../components/FormItem/Items/FormItemTextarea/FormItemTextarea";
import StepLesson from "./components/Step/StepLesson";
import styles from "./styles.module.scss";
import PlusSVG from "../../shared/icons/PlusSVG";
import FormItemLinks from "../../components/FormItem/Items/FormItemLinks/FormItemLinks";
import FormItemFiles from "../../components/FormItem/Items/FormItemFiles/FormItemFiles";
import FormItemPrice from "../../components/FormItem/Items/FormItemPrice/FormItemPrice";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/reduxTypes";
import {
  addFile,
  addLink,
  addStep,
  deleteFile,
  deleteLink,
  deletePreview,
  setDescription,
  setName,
  setPreview,
  setPrice,
} from "./store/store";
import { LinkListItem } from "../../shared/models/LinkListItemModel";
import { FileListItemModel } from "../../shared/models/FileListItemModel";
import PenSVG from "../../shared/icons/PenSVG";
import { useNavigate } from "react-router-dom";

const VideoLessonForm = () => {
  const dispatch = useAppDispatch();
  const formState = useAppSelector((state) => state.lessonForm);
  const navigate = useNavigate();

  return (
    <form className={styles.container}>
      <FormItemInput
        className={styles.input}
        name="Название видео-урока (заголовок)"
        value={formState.name}
        onChange={(e) => {
          console.log(e.target.value);
          dispatch(setName(e.target.value));
        }}
      />

      <FormItemTextarea
        className={styles.input}
        name="Описание"
        value={formState.description}
        onChange={(e) => {
          dispatch(setDescription(e.target.value));
        }}
      />

      {formState.steps.map((el, key) => {
        return (
          <StepLesson
            stepNumber={key}
            files={[]}
            key={key}
            inputValue={el.inputValue}
            links={el.links}
          />
        );
      })}

      <Button
        onClick={() => {
          dispatch(addStep());
        }}
        className={styles.addStepBtn}
      >
        <PlusSVG /> Добавить шаг
      </Button>

      <FormItemLinks
        className={styles.inputMargin}
        onClickAddBtn={(value) => {
          let link: LinkListItem = {
            ...value,
            id: new Date().getMilliseconds(),
          };
          dispatch(addLink(link));
        }}
        onClickDelete={(index) => {
          dispatch(deleteLink(index));
        }}
        links={formState.links}
      />

      <FormItemFiles
        multiple
        files={formState.files}
        addFile={(e) => {
          let files = e.target.files;
          let res: FileListItemModel[] = [];
          if (files) {
            for (let i = 0; i < files.length; i++) {
              let item: FileListItemModel = {
                file: files[i],
                id: files[i].lastModified,
              };
              res.push(item);
            }
          }
          dispatch(addFile(res));
        }}
        deleteFile={(index) => {
          dispatch(deleteFile(index));
        }}
        className={styles.input}
      />

      <FormItemPrice
        className={`${styles.input}`}
        value=""
        onChange={(val) => {
          dispatch(setPrice(val));
        }}
        name="Стоимость урока"
      />

      <FormItemFiles
        className={`${styles.input} ${styles.lastElem}`}
        files={formState.preview ? [formState.preview] : []}
        addFile={(e) => {
          let files = e.target.files;
          if (files) {
            let file = files[0];
            let item: FileListItemModel = { file, id: 1 };
            dispatch(setPreview(item));
          }
        }}
        deleteFile={() => {
          dispatch(deletePreview());
        }}
        formName="Обложка курса(превью)"
        childrenFileInput={
          <>
            <PenSVG className={styles.penSVG} />
            Загрузить обложку
          </>
        }
      />

      <BottomButtonPanel
        clickMainButton={() => {
          navigate("/addVideo");
        }}
        childrenMainButton={"Сохранить изменения"}
      />
    </form>
  );
};

export default VideoLessonForm;
