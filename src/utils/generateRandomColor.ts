export const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = "rgba(" + r + "," + g + "," + b + ", " + "0.7)";
  return color;
};
