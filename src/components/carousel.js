import { useEffect, useState } from "react";
import { SERVER_URL } from "../helpers/conf";
import { getRequest } from "../helpers/request";

export const Carousel = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getRequest(SERVER_URL + "/api/v1/projects/latest");
  });
};
