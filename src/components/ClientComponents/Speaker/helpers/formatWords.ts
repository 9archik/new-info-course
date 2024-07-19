export function formatCourseWord(num: number) {
  if (num === 0 || num >= 5) return "курсов";
  return "курса";
}

export function formatLessonWord(num: number) {
  if (num === 0 || num >= 5) return "уроков";
  return "урока";
}
