import { useEffect, useState } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Carousel } from "react-bootstrap";
import { Typography } from "@mui/material";

export const CustomCarousel = (props) => {
  return (
    <Carousel fade={props?.fade}>
      {props?.images &&
        props.images.map((v, i) => (
          <Carousel.Item key={i}>
            <div
              style={{
                height: props.boxHeight ? props.boxHeight : "100%",
                width: props.boxWidth ? props.boxWidth : "100%",
                marginInline: "auto",
                ...props.style,
              }}
            >
              {v.image}
            </div>
            <Carousel.Caption>
              <Typography>{v.caption}</Typography>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
    </Carousel>
  );
};
