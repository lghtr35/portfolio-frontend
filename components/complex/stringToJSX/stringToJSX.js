import { parse } from "node-html-parser";
import React from "react";

const getNodes = (str) => parse(str).childNodes;

const createJSX = (nodeArray) => {
  return nodeArray.map((node) => {
    const attributeObj = {};
    const { attributes, localName, childNodes, nodeType } = node;
    if (attributes) {
      Object.keys(attributes).forEach((attribute) => {
        if (attribute === "style") {
          let styleAttributes = attributes[attribute].split(";");
          let styleObj = {};
          styleAttributes.forEach((a) => {
            let [key, value] = a.split(":");
            styleObj[key.trim()] = value.trim();
          });
          attributeObj[attribute] = styleObj;
        } else {
          attributeObj[attribute] = attributes[attribute];
        }
      });
    }
    return nodeType == 1
      ? React.createElement(
          localName,
          attributeObj,
          childNodes && Array.isArray(Array.from(childNodes))
            ? createJSX(Array.from(childNodes))
            : []
        )
      : node.text;
  });
};

export const StringToJSX = (props) => {
  return createJSX(getNodes(props.data));
};
