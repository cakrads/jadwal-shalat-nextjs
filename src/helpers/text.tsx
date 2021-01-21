export function capitalize(text = '') {
  return text?.toLowerCase()?.replace(/([^a-z]|^)([a-z])(?=[a-z]{2})/g, function (_, g1, g2) {
    return g1 + g2?.toUpperCase();
  });
}
