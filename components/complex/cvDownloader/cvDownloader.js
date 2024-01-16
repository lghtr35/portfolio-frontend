"use client";

import { getFileUrl, isMobileDevice } from "@/helpers/functions";
import { useEffect, useState } from "react";
import { DownloadButton } from "../downloadButton/DownloadButton";

export const CvDownloader = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const cv = props?.cv;
  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);
  return (
    props?.cv &&
    (!isMobile ? (
      <DownloadButton
        downloadName="Serdil_Cagin_Cakmak_CV"
        downloadURI={getFileUrl(cv.imageData, cv.imageExtension)}
      />
    ) : (
      ""
    ))
  );
};
