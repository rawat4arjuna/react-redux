export function setItem(key, value) {
  let val = JSON.stringify(value);
  localStorage.setItem(key, val);
}

export function getItem(key) {
  return window.localStorage.getItem(key);
}
