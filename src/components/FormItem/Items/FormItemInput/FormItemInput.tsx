import { FC } from "react";
import Input from "../../../../ui/Input/Input";
import FormItem from "../../FormItem";
import { TextInputProps } from "../models/textFormInterface";

const FormItemInput: FC<TextInputProps> = ({
  value,
  onChange,
  name,
  className,
}) => {
  return (
    <FormItem containerClassName={className} name={name}>
      <Input value={value} onChange={onChange} />
    </FormItem>
  );
};

export default FormItemInput;
