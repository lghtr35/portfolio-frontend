"use client";
import { ELEMENTS_PER_ROW, colors } from "../../../helpers/conf";
import { Button } from "@mui/material";
import { getFileUrl } from "../../../helpers/functions";
import { Modal } from "@/components/base/Modal";
import { Carousel } from "@/components/base/Carousel";
import { DownloadButton } from "../downloadButton/DownloadButton";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

export const ProjectModal = (props) => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  useEffect(() => {
    setIsMobileDevice(isMobile);
  }, []);

  const searchParams = useSearchParams();
  const router = useRouter();

  const page = searchParams.get("page") ?? 0;
  const size = searchParams.get("size") ?? ELEMENTS_PER_ROW * 2;
  const data = props.downloadable?.projectData ?? null;
  const extension = props.downloadable?.projectExtension ?? null;

  return (
    <Modal
      isOpen={props.isOpen}
      onClose={() => {
        router.push(
          `/projects?page=${page}&size=${size}&is_modal_open=${false}`
        );
      }}
    >
      <div
        style={{
          padding: "3vw",
          backgroundColor: colors.backgroundSecondary,
          color: colors.textDark,
          borderRadius: "4%",
          boxShadow: "0px -3px 30px 0px rgba(0,0,0,0.5)",
        }}
      >
        <h2 variant="h3">{props.projectTitle}</h2>
        <div
          style={{
            padding: "3%",
            marginBottom: "4%",
            boxShadow: "0px 2px 5px 0px rgba(0,0,0,0.4)",
            height: "120px",
            overflow: "scroll",
          }}
        >
          <h5>{props.projectDescription}</h5>
        </div>

        {props.images.length > 0 && (
          <Carousel
            imageStyle={
              !isMobileDevice
                ? {
                    width: "750px",
                    height: "500px",
                  }
                : {
                    width: "200px",
                    height: "160px",
                  }
            }
            images={props.images}
          />
        )}
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
            justifyItems: "center",
            padding: "2vh",
          }}
        >
          {props.link && (
            <Button
              variant="contained"
              size="large"
              href={props.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to repo
            </Button>
          )}

          {data && props.isDownloadable && (
            <DownloadButton
              downloadName={props.projectTitle.replaceAll(" ", "_")}
              downloadURI={getFileUrl(data, extension)}
            />
          )}
        </div>
      </div>
    </Modal>
  );
};
