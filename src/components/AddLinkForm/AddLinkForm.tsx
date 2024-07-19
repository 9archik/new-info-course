import styles from "./styles.module.scss";
import Modal from "../../ui/Modal/Modal";
import ModalPopup from "../ModalPopup/ModalPopup";
import Input from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import { AddLinkFormProps } from "./interface";
import { FC } from "react";
import { useState } from "react";
import { LinkInfo } from "../../shared/models/LinkListItemModel";
const AddLinkForm: FC<AddLinkFormProps> = ({
  isActive,
  closeClick,
  submitClick,
}) => {
  const [modalFormState, setModalFormState] = useState<LinkInfo>({
    text: "",
    href: "",
  });
  return (
    <Modal active={isActive}>
      <ModalPopup header="Добавить ссылку" clickClose={closeClick}>
        <div className={styles.addLinkForm}>
          <Input
            containerClassName={styles.inputAddLink}
            onChange={(e) => {
              setModalFormState({ ...modalFormState, href: e.target.value });
            }}
            value={modalFormState.href}
            placeholder="Ссылка"
          />
          <Input
            containerClassName={styles.inputAddLink}
            onChange={(e) => {
              setModalFormState({
                ...modalFormState,
                text: e.target.value,
              });
            }}
            value={modalFormState.text}
            placeholder="Название ссылки"
          />

          <Button
            onClick={(e) => {
              setModalFormState({
                text: "",
                href: "",
              });
              submitClick(modalFormState);
            }}
          >
            Готово
          </Button>
        </div>
      </ModalPopup>
    </Modal>
  );
};

export default AddLinkForm;
