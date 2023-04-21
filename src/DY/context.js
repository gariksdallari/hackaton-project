export function setDYContext(type, data) {
  window.DY = window.DY || {};
  window.DY.recommendationContext = { type: type, data: data };
}
