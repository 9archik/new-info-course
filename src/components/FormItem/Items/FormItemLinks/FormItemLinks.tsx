import { FC, useState } from "react";
import { FormItemLinksProps } from "./interface";
import FormItem from "../../FormItem";
import AddButton from "../../../AddButton/AddButton";
import PlusSVG from "../../../../shared/icons/PlusSVG";
import LinkName from "../../../../ui/LinkName/LinkName";
import styles from "./styles.module.scss";
import AddLinkForm from "../../../AddLinkForm/AddLinkForm";
import { LinkInfo } from "../../../../shared/models/LinkListItemModel";

const FormItemLinks: FC<FormItemLinksProps> = ({
  links,
  onClickAddBtn,
  className,
  classNameLink,
  onClickDelete,
}) => {
  const [modalActive, setModalActive] = useState(false);

  const submitClick = (value: LinkInfo) => {
    setModalActive(false);
    onClickAddBtn(value);
  };

  return (
    <>
      <FormItem containerClassName={className} name="Ссылки">
        {links.map((el, index) => {
          return (
            <LinkName
              className={styles.linkItem}
              name={el.text}
              href={el.href}
              onClickDelete={() => {
                if (onClickDelete) onClickDelete(index);
              }}
              key={el.id}
            />
          );
        })}

        <AddButton
          className={styles.addBtn}
          onClick={() => setModalActive(true)}
        >
          <span>
            <PlusSVG /> Добавить ссылку
          </span>
        </AddButton>
      </FormItem>

      <AddLinkForm
        closeClick={() => setModalActive(false)}
        submitClick={submitClick}
        isActive={modalActive}
      />
    </>
  );
};

export default FormItemLinks;
