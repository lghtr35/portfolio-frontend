"use client";
import { getFileUrl } from "@/helpers/functions";
import { DownloadButton } from "../downloadButton/DownloadButton";

export const CvDownloader = (props) => {
  const cv = props?.cv;
  return (
    props?.cv && (
      <DownloadButton
        downloadName="Serdil_Cagin_Cakmak_CV"
        downloadURI={getFileUrl(cv.imageData, cv.imageExtension)}
      />
    )
  );
};
