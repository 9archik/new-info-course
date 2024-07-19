import { useEffect } from "react";
import { RefObject } from "react";
import { useRef } from "react";

interface UseDoubleClickProps<T extends HTMLElement> {
  ref: RefObject<T>;
  latency: number;
  onSingleClick?: (event: MouseEvent) => void;
  onDoubleClick?: (event: MouseEvent) => void;
}

export const useDoubleClick = <T extends HTMLElement>({
  ref,
  latency,
  onSingleClick = (e) => null,
  onDoubleClick = (e) => null,
}: UseDoubleClickProps<T>) => {
  const clickCountRef = useRef(0); // Используем useRef для хранения состояния

  useEffect(() => {
    const clickRef = ref.current;
    const handleClick = (e: MouseEvent) => {
      clickCountRef.current += 1; // Обновляем состояние через useRef

      setTimeout(() => {
        if (clickCountRef.current === 1) onSingleClick(e);
        else if (clickCountRef.current === 2) onDoubleClick(e);

        clickCountRef.current = 0; // Сбрасываем состояние
      }, latency);
    };

    if (clickRef !== null) clickRef.addEventListener("click", handleClick);

    return () => {
      if (clickRef !== null) clickRef.removeEventListener("click", handleClick);
    };
  }, [ref, latency, onSingleClick, onDoubleClick]); // Зависимости для useEffect

  // Ничего не возвращаем, так как нам не нужно управлять состоянием в компоненте
};

export default useDoubleClick;
