export function getSavedProgram() {
  return JSON.parse(localStorage.getItem("TheProgram") || "{}");
}

export function saveProgram(data) {
  localStorage.setItem("TheProgram", JSON.stringify(data));
}
