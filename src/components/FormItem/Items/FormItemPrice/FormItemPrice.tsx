import { FC, MutableRefObject, RefObject, useEffect, useRef } from "react";
import FormItem from "../../FormItem";
import { FormItemPriceProps } from "./interface";
import Input from "../../../../ui/Input/Input";
import { useState } from "react";
import styles from "./styles.module.scss";

const FormItemPrice: FC<FormItemPriceProps> = ({
  className,
  name,
  value,
  onChange,
}) => {
  const [priceValue, setPriceValue] = useState("");
  const firstRender: MutableRefObject<boolean> = useRef<boolean>(false);

  useEffect(() => {
    if (firstRender.current === false) {
      setPriceValue(value);
      firstRender.current = true;
    } else {
      onChange(priceValue);
    }
  }, [priceValue]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const newValue = event.target.value.replace(/[^0-9]/g, ""); // Убираем все нецифровые символы
    setPriceValue(newValue.replace(/\B(?=(\d{3})+(?!\d))/g, " ")); // Добавляем пробелы каждые 3 цифры
  };

  useEffect(() => {
    onChange(priceValue);
  }, [priceValue]);

  return (
    <FormItem containerClassName={className} name={name}>
      <Input
        value={priceValue}
        onChange={handleChange}
        type="tel"
        rightChildren={<span className={styles.valuta}></span>}
      />
    </FormItem>
  );
};

export default FormItemPrice;
