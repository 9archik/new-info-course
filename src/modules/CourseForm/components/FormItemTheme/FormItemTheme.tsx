import FormItem from "../../../../components/FormItem/FormItem";
import Select from "../../../../components/Select/Select";
import { FormItemThemeProps } from "./interface";
import { FC, useState } from "react";

const VARIANTS = [
  {
    value: 1,
    text: "тема 1",
  },
  {
    value: 2,
    text: "тема 2",
  },
  {
    value: 3,
    text: "тема 3",
  },
  {
    value: 4,
    text: "тема 4",
  },
];

const FormItemTheme: FC<FormItemThemeProps> = ({ className }) => {
  const [curValue, setCurValue] = useState<number | null>(null);
  return (
    <FormItem containerClassName={className} name="Тема курса">
      <>
        <Select
          onChange={(val) => {
            setCurValue(Number(val));
          }}
          variants={VARIANTS}
          currentValue={curValue}
        />
      </>
    </FormItem>
  );
};

export default FormItemTheme;
