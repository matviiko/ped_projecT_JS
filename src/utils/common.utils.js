export function addClassByElementId(id, className) {
  const element = document.getElementById(id);
  element.classList.add(className);
}