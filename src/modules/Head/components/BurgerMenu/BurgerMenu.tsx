import DeleteSVG from "../../../../shared/icons/DeleteSVG";
import Modal from "../../../../ui/Modal/Modal";
import { BurgerMenuProps } from "./interface";
import styles from "./styles.module.scss";
import { FC, useEffect, useState } from "react";
import Button from "../../../../ui/Button/Button";
import Icon from "./Icon/Icon";
import StudentSVG from "../../../../shared/icons/StudentSVG";
import CoachSVG from "../../../../shared/icons/CoachSVG";
import PartnerSVG from "../../../../shared/icons/PartnerSVG";
import ShareSVG from "../../../../shared/icons/ShareSVG";
const BurgerMenu: FC<BurgerMenuProps> = ({ active, className, clickClose }) => {
  const [activeBurger, setActiveBurger] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      if (active) {
        setActiveBurger(true);
      }
    });

    if (!active) {
      setActiveBurger(false);
    }
  }, [active]);
  return (
    <Modal
      className={styles.modal}
      activeClassName={styles.activeModal}
      active={active}
    >
      <div className={`${styles.burger} ${activeBurger && styles.active}`}>
        <div className={styles.burgerHeader}>
          <Button
            onClick={() => {
              clickClose();
            }}
          >
            <DeleteSVG />
          </Button>
        </div>

        <div className={styles.btnCont}>
          <Button onClick={() => {}}>
            <>
              <Icon>
                <StudentSVG />
              </Icon>
              <span>Стать студентом</span>
            </>
          </Button>

          <Button onClick={() => {}}>
            <>
              <Icon>
                <CoachSVG />
              </Icon>
              <span>Стать коучем</span>
            </>
          </Button>

          <Button onClick={() => {}}>
            <>
              <Icon>
                <PartnerSVG />
              </Icon>
              <span>Стать партнером</span>
            </>
          </Button>

          <Button onClick={() => {}}>
            <>
              <Icon>
                <ShareSVG />
              </Icon>
              <span>Поделиться проектом</span>
            </>
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default BurgerMenu;
