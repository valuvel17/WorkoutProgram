export function GetWorkoutType(index) {
  return index % 3 === 0 ? 'Push' : index % 3 === 1 ? 'Pull' : 'Legs';
}

export function FormatDay(index) {
  const day = index + 1;
  return day < 10 ? `0${day}` : `${day}`;
}

export function GetIconClass(index, isLocked) {
  if (isLocked) return 'fa-solid fa-lock';

  const icons = [
    'fa-solid fa-dumbbell',
    'fa-solid fa-weight-hanging',
    'fa-solid fa-bolt'
  ];

  return icons[index % 3];
}

