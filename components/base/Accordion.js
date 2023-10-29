"use client";
import { useState } from "react";

export const Accordion = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <div id="always-visible" onClick={setIsVisible(!isVisible)}></div>
      <div
        id="hidden-part"
        style={{ visibility: getVisibilityAttribute(isVisible) }}
      >
        Alllaaaaaah
      </div>
    </div>
  );
};

const getVisibilityAttribute = (isVisible) => {
  if (isVisible) return "visible";
  return "hidden";
};
