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

export function isMobileDevice() {
  var hasTouchScreen = false;

  if ("maxTouchPoints" in navigator) {
    hasTouchScreen = navigator.maxTouchPoints > 0;
  } else if ("msMaxTouchPoints" in navigator) {
    hasTouchScreen = navigator.msMaxTouchPoints > 0;
  } else {
    var mQ = window.matchMedia && matchMedia("(pointer:coarse)");
    if (mQ && mQ.media === "(pointer:coarse)") {
      hasTouchScreen = !!mQ.matches;
    } else if ("orientation" in window) {
      hasTouchScreen = true; // deprecated, but good fallback
    } else {
      // Only as a last resort, fall back to user agent sniffing
      var UA = navigator.userAgent;
      hasTouchScreen =
        /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
        /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
    }
  }
  return hasTouchScreen;
}

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
