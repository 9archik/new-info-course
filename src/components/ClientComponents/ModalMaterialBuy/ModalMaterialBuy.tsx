import Modal from "../../../ui/Modal/Modal";
import ModalPopup from "../../ModalPopup/ModalPopup";
import { ModalMaterialBuyProps } from "./interface";
import { FC } from "react";
import styles from "./styles.module.scss";
import starIMG from "../../../shared/images/star.png";
import Button from "../../../ui/Button/Button";
const ModalMaterialBuy: FC<ModalMaterialBuyProps> = ({
  active,
  clickClose,
}) => {
  return (
    <Modal active={active}>
      <ModalPopup className={styles.popup} clickClose={clickClose}>
        <img src={starIMG} alt="star ing" width={107} height={107} />
        <div className={styles.header}>Купить за 15 TG Stars</div>
        <div className={styles.descr}>
          Вы можете купить данный урок за TG Stars
        </div>

        <Button onClick={() => {}} className={styles.btn}>
          Купить урок
        </Button>
      </ModalPopup>
    </Modal>
  );
};

export default ModalMaterialBuy;
