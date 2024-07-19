import FormItem from "../../../../components/FormItem/FormItem";
import Textarea from "../../../../ui/Textarea/textarea";
import { StepLessonProps } from "./interface";
import FileSVG from "../../../../shared/icons/FileSVG";
import LinkSVG from "../../../../shared/icons/LinkSVG";
import Button from "../../../../ui/Button/Button";
import { FC } from "react";
import LinkInput from "./Link/Link";
import FileInput from "../../../../ui/FileInput/FileInput";
import styles from "./styles.module.scss";
import AddLinkButton from "../../../../components/AddButton/AddButton";
import { useState } from "react";
import Modal from "../../../../ui/Modal/Modal";
import ModalPopup from "../../../../components/ModalPopup/ModalPopup";
import Input from "../../../../ui/Input/Input";
import AddLinkForm from "../../../../components/AddLinkForm/AddLinkForm";
import ArrowSVG from "../../../../shared/icons/ArrowSVG";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../shared/hooks/reduxTypes";
import {
  ActionAddFiles,
  ActionAddLink,
  ActionChangeInput,
  ActionDeleteFile,
  ActionDeleteLink,
} from "../../models/ActionsModels";
import {
  addFilesToStep,
  addLinkToStep,
  deleteFileFromStep,
  deleteLinkFromStep,
  deleteStep,
  setInputStep,
} from "../../store/store";
import { FileListItemModel } from "../../../../shared/models/FileListItemModel";
import FileName from "../../../../ui/FileName/FileName";
import { LinkListItem } from "../../../../shared/models/LinkListItemModel";
import LinkName from "../../../../ui/LinkName/LinkName";
import DeleteSVG from "../../../../shared/icons/DeleteSVG";
const StepLesson: FC<StepLessonProps> = ({
  inputValue,
  onChangeInput,
  links,
  stepNumber,
}) => {
  const [modalActive, setModalActive] = useState(false);
  const [openInfo, setOpenInfo] = useState(true);
  const dispatch = useAppDispatch();
  const stepForm = useAppSelector(
    (state) => state.lessonForm.steps[stepNumber]
  );

  return (
    <>
      <FormItem
        containerClassName={styles.container}
        leftHeader={
          <Button
            onClick={() => {
              dispatch(deleteStep(stepNumber));
            }}
            className={styles.deleteStep}
          >
            <DeleteSVG />
          </Button>
        }
        onClickName={() => {
          setOpenInfo(!openInfo);
        }}
        nameChildren={
          <ArrowSVG
            style={{
              transform: !openInfo ? "rotate(180deg)" : "rotate(0deg)",
              transition: "0.25s",
            }}
          />
        }
        childContainerClassName={!openInfo ? styles.hiddenChild : ""}
        name={`Шаг ${stepNumber + 1} (необязательно)`}
      >
        {openInfo && (
          <>
            <Textarea
              value={stepForm.inputValue}
              onChange={(e) => {
                let action: ActionChangeInput = {
                  indexStep: stepNumber,
                  value: e.target.value,
                };
                dispatch(setInputStep(action));
              }}
            />

            {stepForm.files.map((el, index) => {
              return (
                <FileName
                  className={styles.fileItem}
                  name={el.file.name}
                  onClickDeleteButton={() => {
                    let action: ActionDeleteFile = {
                      indexFile: index,
                      indexStep: stepNumber,
                    };
                    dispatch(deleteFileFromStep(action));
                  }}
                />
              );
            })}
            {stepForm.links.map((el, index) => {
              return (
                <LinkName
                  className={styles.linkItem}
                  href={el.href}
                  name={el.text}
                  onClickDelete={() => {
                    let action: ActionDeleteLink = {
                      indexLink: index,
                      indexStep: stepNumber,
                    };

                    dispatch(deleteLinkFromStep(action));
                  }}
                />
              );
            })}

            <FileInput
              multiple
              className={styles.fileInput}
              onChange={(e) => {
                let files = e.target.files;
                let action: ActionAddFiles = {
                  indexStep: stepNumber,
                  files: [],
                };

                if (files) {
                  for (let i = 0; i < files?.length; i++) {
                    let file: FileListItemModel = {
                      file: files[i],
                      id: new Date().getMilliseconds(),
                    };

                    action.files.push(file);
                  }

                  dispatch(addFilesToStep(action));
                }
              }}
            />

            <AddLinkButton
              className={styles.addLink}
              onClick={() => {
                setModalActive(true);
              }}
            />
          </>
        )}
      </FormItem>

      <AddLinkForm
        closeClick={() => setModalActive(false)}
        submitClick={(val) => {
          setModalActive(false);
          let link: LinkListItem = {
            text: val.text,
            href: val.href,
            id: new Date().getMilliseconds(),
          };

          let action: ActionAddLink = {
            link,
            indexStep: stepNumber,
          };

          dispatch(addLinkToStep(action));
        }}
        isActive={modalActive}
      />
    </>
  );
};

export default StepLesson;
