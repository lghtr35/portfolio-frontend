import React from "react";

export const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

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

export const isMobileDevice = () => {
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
};

const getNodes = (str) =>
  new DOMParser().parseFromString(str, "text/html").body.childNodes;

const createJSX = (nodeArray) => {
  return nodeArray.map((node) => {
    let attributeObj = {};
    const { attributes, localName, childNodes, nodeValue } = node;
    if (attributes) {
      Array.from(attributes).forEach((attribute) => {
        if (attribute.name === "style") {
          let styleAttributes = attribute.nodeValue.split(";");
          let styleObj = {};
          styleAttributes.forEach((attribute) => {
            let [key, value] = attribute.split(":");
            styleObj[key] = value;
          });
          attributeObj[attribute.name] = styleObj;
        } else if (
          attribute.name === "classname" ||
          attribute.name === "class"
        ) {
          attributeObj["class"] = attribute.nodeValue;
        } else {
          attributeObj[attribute.name] = attribute.nodeValue;
        }
      });
    }
    return localName
      ? React.createElement(
          localName,
          attributeObj,
          childNodes && Array.isArray(Array.from(childNodes))
            ? createJSX(Array.from(childNodes))
            : []
        )
      : nodeValue;
  });
};

export const StringToJSX = (props) => {
  return createJSX(Array.from(getNodes(props.domString)));
};
