import { FC } from "react";
import Input from "../../ui/Input/Input";
import { InputUI } from "../../ui/Input/interface";
import SearchSVG from "../../shared/icons/SearchSVG";
import styles from "./styles.module.scss";

const SearchInput: FC<InputUI> = ({
  value,
  onChange,
  placeholder,
  containerClassName,
}) => {
  return (
    <Input
      containerClassName={`${styles.container} ${containerClassName}`}
      leftChildren={<SearchSVG />}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default SearchInput;
