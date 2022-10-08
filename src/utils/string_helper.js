export const capitalize = (text) => {
  return text ? text[0].toUpperCase() + text.slice(1, text.length) : undefined;
};
