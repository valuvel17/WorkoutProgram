import { WORKOUT_TYPES, ICON_CLASSES } from '../constants/workoutTypes';

export function getWorkoutType(index) {
  return WORKOUT_TYPES[index % 3];
}

export function formatDay(index) {
  const day = index + 1;
  return day < 10 ? `0${day}` : `${day}`;
}

export function getIconClass(index, isLocked) {
  return isLocked ? 'fa-solid fa-lock' : ICON_CLASSES[index % 3];
}

