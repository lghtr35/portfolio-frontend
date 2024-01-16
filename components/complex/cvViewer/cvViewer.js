import { DocumentViewer } from "@/components/base/DocumentViewer";
import { colors } from "@/helpers/conf";
import { getFileUrl } from "@/helpers/functions";
import { AdjustableCol } from "@/components/base/AdjustableCol";
import { CvDownloader } from "../cvDownloader/cvDownloader";

export const CvViewer = (props) => {
  const cv = props?.cv ?? { imageData: "", imageExtension: "" };
  return (
    props?.cv && (
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
          }}
        >
          <DocumentViewer
            height="100%"
            width="100%"
            src={getFileUrl(cv.imageData, cv.imageExtension)}
          />
        </div>

        <CvDownloader cv={cv} />
      </AdjustableCol>
    )
  );
};
