import { FC } from "react";
import Textarea from "../../../../ui/Textarea/textarea";
import FormItem from "../../FormItem";
import { TextInputProps } from "../models/textFormInterface";

const FormItemTextarea: FC<TextInputProps> = ({
  value,
  onChange,
  className,
  name,
}) => {
  return (
    <FormItem containerClassName={className} name={name}>
      <Textarea value={value} onChange={onChange} />
    </FormItem>
  );
};

export default FormItemTextarea;
