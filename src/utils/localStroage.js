export function setItem(key, value) {
  localStorage.setItem(key, value);
}

export function getItem(key) {
  return window.localStorage.getItem(key);
}
