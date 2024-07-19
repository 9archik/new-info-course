export const getClickElementXCoordinate = (
  event: MouseEvent,
  element: HTMLElement
): number => {
  // Получаем координаты клика относительно окна
  const clickX = event.clientX;

  // Получаем координаты элемента относительно окна
  const rect = element.getBoundingClientRect();

  // Вычисляем координату клика относительно элемента
  const relativeX = clickX - rect.left;

  return relativeX;
};

export const getClickElementXCoordinatePercent = (
  event: MouseEvent,
  element: HTMLElement
): number => {
  const xCoord = getClickElementXCoordinate(event, element);

  let elWidth = element.offsetWidth;
  return xCoord / elWidth;
};
