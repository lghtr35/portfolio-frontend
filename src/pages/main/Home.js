import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { colors } from "../../helpers/conf";
import "./Home.css";
import {
  AdjustableRow,
  ShortInfo,
  Page,
  CircuitBoard,
  DownloadButton,
} from "../../components/static.components";
import { getRequest } from "../../helpers/request";
import { getFileUrl } from "../../helpers/functions";

export const Home = () => {
  const greeting = "Hello!9 I am Serdıl Çağın.".split("");
  const [showedCharCount, setShowedCharCount] = useState(0);
  const [isIncreasing, setIsIncreasing] = useState(true);
  const [pageContent, setPageContent] = useState({});

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

  useEffect(() => {
    getRequest("/Content/page/Home")
      .then((res) => {
        setPageContent(res.contents);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Page>
      <AdjustableRow minHeight="56vh" minWidth="100%">
        <CircuitBoard />
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
      </AdjustableRow>
      <AdjustableRow
        backgroundColor={colors.backgroundLight}
        style={{
          position: "relative",
          zIndex: 3,
          boxShadow: "0px -3px 30px 0px rgba(0,0,0,0.5)",
        }}
      >
        <ShortInfo content={pageContent?.ShortInfo} />
      </AdjustableRow>
    </Page>
  );
};
