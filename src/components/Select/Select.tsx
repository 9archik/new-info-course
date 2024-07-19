import { SelectProps } from "./interface";
import styles from "./styles.module.scss";
import { FC, useEffect } from "react";
import { useState } from "react";
import Input from "../../ui/Input/Input";
import ArrowSVG from "../../shared/icons/ArrowSVG";
import Button from "../../ui/Button/Button";
const Select: FC<SelectProps> = ({ variants, currentValue, ref, onChange }) => {
  const [inputValue, setInputValue] = useState<null | string>(null);
  const [dropDownActive, setDropDownActive] = useState<boolean>(false);

  const handleVariant = (value: string | number) => {
    onChange(value);
  };

  useEffect(() => {
    for (let i = 0; i < variants.length; i++) {
      let el = variants[i];
      if (el.value === currentValue) {
        setInputValue(String(el.text));
      }
    }
  }, [currentValue]);

  useEffect(() => {
    function windowClick() {
      setDropDownActive(false);
    }
    window.addEventListener("click", windowClick);
  }, []);
  return (
    <div ref={ref} className={styles.container}>
      <Input
        containerClassName={`${styles.inputSel} ${dropDownActive && styles.active}`}
        onClickLabel={(e) => {
          e.stopPropagation();
          setDropDownActive(!dropDownActive);
        }}
        value={inputValue ? inputValue : ""}
        readonly
        rightChildren={
          <ArrowSVG
            style={{
              transition: "0.25s linear",
              transform: dropDownActive ? "rotate(180deg)" : "rotate(0deg)",
            }}
            className={styles.arrow}
          />
        }
      />

      <div className={`${styles.dropdown} ${dropDownActive && styles.active}`}>
        {variants.map((el, index) => {
          return (
            <Button
              key={index}
              className={`${styles.variant} ${
                currentValue === el.value && styles.active
              }`}
              onClick={() => {
                handleVariant(el.value);
              }}
            >
              {el.text}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Select;
