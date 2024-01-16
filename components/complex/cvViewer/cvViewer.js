"use client";

import { DocumentViewer } from "@/components/base/DocumentViewer";
import { colors } from "@/helpers/conf";
import { getFileUrl, isMobileDevice } from "@/helpers/functions";
import { useEffect, useState } from "react";
import { DownloadButton } from "../downloadButton/DownloadButton";
import { AdjustableCol } from "@/components/base/AdjustableCol";

export const CvViewer = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const cv = props?.cv ?? { imageData: "", imageExtension: "" };
  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);
  console.log(isMobileDevice());
  return (
    props?.cv &&
    (!isMobile ? (
      <AdjustableCol
        style={{
          width: "60%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ background: colors.background }}>
          <DocumentViewer
            height="850vh"
            width="800vw"
            src={getFileUrl(cv.imageData, cv.imageExtension)}
          />
        </div>

        <DownloadButton
          downloadName="Serdil_Cagin_Cakmak_CV"
          downloadURI={getFileUrl(cv.imageData, cv.imageExtension)}
        />
      </AdjustableCol>
    ) : (
      ""
    ))
  );
};
