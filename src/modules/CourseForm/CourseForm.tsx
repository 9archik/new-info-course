import styles from "./styles.module.scss";
import FormItemInput from "../../components/FormItem/Items/FormItemInput/FormItemInput";
import FormItemTextarea from "../../components/FormItem/Items/FormItemTextarea/FormItemTextarea";
import FormItemPrice from "../../components/FormItem/Items/FormItemPrice/FormItemPrice";
import BottomButtonPanel from "../../ui/BottomButtonPanel/BottomButtonPanel";
import FormItemLinks from "../../components/FormItem/Items/FormItemLinks/FormItemLinks";
import FormItemFiles from "../../components/FormItem/Items/FormItemFiles/FormItemFiles";
import { usePathname } from "../../shared/hooks/usePathname";
import DeleteButton from "./components/DeleteButton/DeleteButton";
import { useEffect, useState } from "react";
import Modal from "../../ui/Modal/Modal";
import ConfirmWindow from "../../components/ConfirmWindow/ConfirmWindow";
import FileInput from "../../ui/FileInput/FileInput";
import AddButton from "../../components/AddButton/AddButton";
import FormItemTheme from "./components/FormItemTheme/FormItemTheme";
import { useAppDispatch, useAppSelector } from "../../shared/hooks/reduxTypes";
import {
  addFile,
  addLink,
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
const CourseForm = () => {
  const pathName = usePathname();
  const formState = useAppSelector((state) => state.courseForm);
  const dispatch = useAppDispatch();
  const [modalActive, setModalActive] = useState(false);
  const navigate = useNavigate();


  return (
    <>
      <form
        style={{ paddingBottom: pathName === "/createCourse" ? 120 : 140 }}
        className={styles.container}
      >
        <FormItemInput
          className={styles.input}
          name="Название курса"
          onChange={(e) => {
            dispatch(setName(e.target.value));
          }}
        />

        <FormItemTheme className={styles.input} />

        <FormItemTextarea
          className={styles.input}
          name="Описание"
          onChange={(e) => {
            dispatch(setDescription(e.target.value));
          }}
        />

        <FormItemPrice
          className={`${styles.input} ${styles.lastElem}`}
          value=""
          onChange={(val) => {
            dispatch(setPrice(val));
          }}
          name="Стоимость курса"
        />

        <FormItemFiles
          className={styles.input}
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

        <FormItemLinks
          className={styles.input}
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

        <BottomButtonPanel
          className={pathName === "/editCourse" ? styles.bottom : ""}
          clickMainButton={() => {
            navigate("/addVideo");
          }}
          childrenMainButton={"Сохранить изменения"}
        >
          {pathName === "/editCourse" && (
            <DeleteButton
              onClick={() => {
                setModalActive(true);
              }}
            />
          )}
        </BottomButtonPanel>

        {/* <AddButton className={styles.addLinkBtn} onClick={() => {}} />
        <FileInput className={styles.addFileBtn} onChange={() => {}} /> */}
      </form>

      <Modal active={modalActive}>
        <ConfirmWindow
          boldText="Удалить курс?"
          infoText="Вы уверены что хотите удалить курс? Это действие невозможно отменить"
          cancelClick={() => {
            setModalActive(false);
          }}
          confirmClick={() => {
            setModalActive(false);
          }}
        />
      </Modal>
    </>
  );
};

export default CourseForm;
