import {
  useAppDispatch,
  useAppSelector,
} from "../../../../shared/hooks/reduxTypes";
import { ActionEditNameTimeCode } from "../../models/actionsModels";
import { deleteTimeCode, editNameTimeCode } from "../../store/store";
import { TimecodeListProps } from "./interface";
import styles from "./styles.module.scss";
import TimeCodeItem from "./TimeCodeItem/TimeCodeItem";

import { FC } from "react";

const TimeCodeList: FC<TimecodeListProps> = ({ isOpen }) => {
  const timeCodeList = useAppSelector((state) => state.videoForm);
  const dispatch = useAppDispatch();
  return (
    <div className={styles.container}>
      {timeCodeList.map((el, index) => {
        return (
          <TimeCodeItem
            key={el.id}
            curTime={el.curTime}
            name={el.name}
            readonly={el.readonly}
            deleteMode={el.deleteMode}
            className={styles.item}
            onChangeName={(e) => {
              let elem: ActionEditNameTimeCode = {
                index, name: e.target.value
              }

              dispatch(editNameTimeCode(elem))
            }}
            deleteClick={() => {
              dispatch(deleteTimeCode(index));

            }}
          />
        );
      })}
    </div>
  );
};

export default TimeCodeList;
