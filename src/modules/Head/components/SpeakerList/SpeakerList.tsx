import { FC } from "react";
import styles from "./styles.module.scss";
import { SpeakerListProps } from "./interface";
import SpeakerItem from "./SpeakerItem/SpeakerItem";
import { useRef, useEffect } from "react";
const SpeakerList: FC<SpeakerListProps> = ({ className, speakers }) => {
  const ulRef = useRef<HTMLUListElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef && containerRef.current) {
      containerRef.current.style.height = `${
        ulRef?.current ? ulRef.current.clientHeight : 0
      }px`;
    }
  }, []);
  return (
    <div ref={containerRef} className={`${styles.container} ${className}`}>
      <ul ref={ulRef}>
        {speakers.map((el) => {
          return (
            <li>
              <SpeakerItem name={el.name} avatar={el.avatar} to={""} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SpeakerList;
