export const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

export const getImageUrl = (bytes, extension) => {
  return `data:image/${extension.toLowerCase()};base64,${bytes}`;
};
