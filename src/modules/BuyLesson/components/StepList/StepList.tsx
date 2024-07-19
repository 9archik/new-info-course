import { FC } from "react";
import { StepListProps } from "./interface";
import Step from "./Step/Step";
import styles from "./styles.module.scss";

const StepList: FC<StepListProps> = ({ className, steps }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      {steps.map((el, index) => {
        return (
          <Step
            key={index}
            description={el.description}
            attachments={el.attachments}
            links={el.links}
            step_number={index + 1}
            className={styles.step}
          />
        );
      })}
    </div>
  );
};

export default StepList;
