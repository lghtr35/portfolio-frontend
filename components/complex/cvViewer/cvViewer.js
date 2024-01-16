import { DocumentViewer } from "@/components/base/DocumentViewer";
import { colors } from "@/helpers/conf";
import { getFileUrl } from "@/helpers/functions";
import { DownloadButton } from "../downloadButton/DownloadButton";
import { AdjustableCol } from "@/components/base/AdjustableCol";

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
    )
  );
};
