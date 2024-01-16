"use client";
import { DocumentViewer } from "@/components/base/DocumentViewer";
import { colors } from "@/helpers/conf";
import { getFileUrl } from "@/helpers/functions";
import { AdjustableCol } from "@/components/base/AdjustableCol";
import { CvDownloader } from "../cvDownloader/cvDownloader";
import { isMobile } from "react-device-detect";
import { useEffect, useState } from "react";

export const CvViewer = (props) => {
  const [isCvRendered, setIsCvRendered] = useState(false);
  useEffect(() => {
    setIsCvRendered(!isMobile && props?.cv != null);
  }, []);
  const cv = props?.cv ?? { imageData: "", imageExtension: "" };
  return isCvRendered ? (
    <AdjustableCol
      style={{
        width: "60%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          background: colors.background,
          height: "100%",
          width: "100%",
          paddingInline: "1.5%",
        }}
      >
        <DocumentViewer
          height="99%"
          width="98%"
          src={getFileUrl(cv.imageData, cv.imageExtension)}
        />
      </div>

      <CvDownloader cv={cv} />
    </AdjustableCol>
  ) : (
    ""
  );
};
