import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AdjustableSection } from "../../components/adjustable.section";
import { ShortInfo } from "../../components/short.info";
import { colors } from "../../helpers/conf";
import "./Home.css";

export const Home = () => {
  const greeting = "Hello!9 I am Serdıl Çağın.".split("");
  const [showedCharCount, setShowedCharCount] = useState(0);
  const [isIncreasing, setIsIncreasing] = useState(true);
  // const [currentScroll, setCurrentScroll] = useState(0);
  // const getCurrentScroll = (e) => {
  //   setCurrentScroll(document.scrollingElement.scrollTop);
  // };
  // const findScrollPercentage = (elem) => {
  //   if (!elem) return 0;
  //   const position = elem.getBoundingClientRect().top;
  //   const percentage = currentScroll / (position <= 0 ? 1 : position);
  //   return percentage;
  // };
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
  }, [showedCharCount, isIncreasing]);
  return (
    <Stack>
      <AdjustableSection minHeight="56vh" minWidth="100%">
        <Typography
          fontWeight={700}
          fontSize="8vw"
          marginLeft={1}
          padding={10}
          zIndex={2}
          position="relative"
        >
          {greeting.map((elem, index) => {
            if (showedCharCount < index) return " ";
            if (elem === "9") return <div key={index}></div>;
            return elem;
          })}
        </Typography>
      </AdjustableSection>
      <AdjustableSection
        backgroundColor={colors.backgroundLight}
        style={{
          position: "relative",
          zIndex: 3,
          boxShadow: "0px -3px 30px 0px rgba(0,0,0,0.5)",
        }}
      >
        <ShortInfo />
      </AdjustableSection>
    </Stack>
  );
};
