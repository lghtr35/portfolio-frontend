export const getFileUrl = (bytes, extension) => {
  const actualExtension = extension.toLowerCase();
  if (actualExtension === "pdf") {
    return `data:application/pdf;base64,${bytes}`;
  }
  if (actualExtension === "zip") {
    return `data:application/zip;base64,${bytes}`;
  }
  if (actualExtension === "rar") {
    return `data:application/x-rar-compressed;base64,${bytes}`;
  }
  return `data:image/${actualExtension};base64,${bytes}`;
};

export const removeItems = (arr, value) => {
  var i = 0;
  while (i < arr.length) {
    if (value.indexOf(arr[i]) > -1) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
};
