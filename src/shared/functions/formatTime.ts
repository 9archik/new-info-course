export const formatTime = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secondsFormatted = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");

  if (hours === 0) {
    return `${minutes}:${secondsFormatted}`;
  } else {
    return `${hours}:${minutes}:${secondsFormatted}`;
  }
};