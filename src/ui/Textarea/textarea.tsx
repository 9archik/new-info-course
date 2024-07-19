import { TextareaUI } from "./interface";
import { FC, useEffect } from "react";
import styles from "./styles.module.scss";
import { useRef, RefObject } from "react";
const Textarea: FC<TextareaUI> = ({ value, onChange, textareaClassName }) => {
  const ref: RefObject<HTMLTextAreaElement> = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (ref && ref?.current) {
      ref.current.style.height = "45px";
    }
  }, []);

  return (
    <textarea
      ref={ref}
      value={value}
      onChange={(e) => {
        if (onChange) onChange(e);
        if (ref && ref?.current) {
          ref.current.style.height = "45px";
          ref.current.style.height = `${ref.current?.scrollHeight + 1}px`;
        }
      }}
      className={`${textareaClassName} ${styles.container}`}
    />
  );
};

export default Textarea;
