"use client";

import { useEffect, useState } from "react";

export const Greeting = () => {
  const greeting = "Hello!9 I am Serdıl Çağın.".split("");
  const [showedCharCount, setShowedCharCount] = useState(0);
  const [isIncreasing, setIsIncreasing] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      if (isIncreasing) {
        setShowedCharCount(showedCharCount + 1);
      }
    }, 32);
    // window.addEventListener("scroll", getCurrentScroll);
    if (showedCharCount === greeting.length && isIncreasing) {
      setIsIncreasing(!isIncreasing);
    }
  }, [showedCharCount, isIncreasing, greeting]);
  return (
    <p
      style={{
        fontWeight: 700,
        fontSize: "13vh",
        marginLeft: 1,
        padding: 10,
        zIndex: 2,
        position: "relative",
        top: 0,
        left: 0,
      }}
    >
      {greeting.map((elem, index) => {
        if (showedCharCount < index) return " ";
        if (elem === "9") return <br key={index} />;
        return elem;
      })}
    </p>
  );
};
