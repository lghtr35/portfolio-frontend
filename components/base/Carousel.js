"use client";
import { useEffect, useState } from "react";
import { colors } from "@/helpers/conf";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

export const Carousel = (props) => {
  const [slides, setSlides] = useState(undefined);
  const [current, setCurrent] = useState(-1);

  useEffect(() => {
    const slidesMap = {};
    if (!props.images) return;
    props.images.forEach((img, i) => {
      slidesMap[i] = {
        src: img,
        prev: i === 0 ? props.images.length - 1 : i - 1,
        next: i === props.images.length - 1 ? 0 : i + 1,
        title: props.titles ? props.titles[i] : undefined,
        description: props.descriptions ? props.descriptions[i] : undefined,
        link: props.links ? props.links[i] : undefined,
      };
    });
    setSlides(slidesMap);
    setCurrent(0);
  }, [props]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      {slides && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
            justifyItems: "center",
            ...props.style,
          }}
        >
          {slides[current.toString()].title && (
            <span
              style={{
                color: colors.text,
                fontWeight: "600",
                fontSize: "1.3rem",
              }}
            >
              {slides[current.toString()].title}
            </span>
          )}
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.6)",
              position: "absolute",
              left: "7%",
              top: "53%",
              padding: "3%",
            }}
          >
            <ChevronLeft
              style={{
                color: colors.textWhite,
                transform: "scale(3)",
                opacity: 1,
                cursor: "pointer",
              }}
              onClick={() => {
                setCurrent(slides[current.toString()].prev);
              }}
            />
          </div>
          <div>
            <img
              style={{ objectFit: "cover", ...props.imageStyle }}
              src={slides[current.toString()].src}
              alt={current.toString()}
            />
          </div>
          <div
            style={{
              backgroundColor: "rgba(0,0,0,0.6)",
              position: "absolute",
              right: "7%",
              top: "53%",
              padding: "3%",
              transition: "visibility 1s ease-in-out",
              visibility: slides && current >= 0 ? "visible" : "collapse",
            }}
          >
            <ChevronRight
              style={{
                color: colors.textWhite,
                transform: "scale(3)",
                cursor: "pointer",
              }}
              onClick={() => {
                setCurrent(slides[current.toString()].next);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};
