import "./About.css";
import {
  AdjustableCol,
  AdjustableRow,
  AvatarBox,
  CustomList,
  DocumentViewer,
  DownloadButton,
  Page,
} from "../../components/static.components";
import { colors } from "../../helpers/conf";
import { Button } from "@mui/material";
import { getFileUrl, isMobileDevice } from "../../helpers/functions";
import { useEffect, useState } from "react";
import { getRequest } from "../../helpers/request";

export const About = () => {
  const [isMobile, setIsMobile] = useState(true);
  const [pageContent, setPageContent] = useState({});
  const [cv, setCv] = useState(undefined);

  useEffect(() => {
    setIsMobile(isMobileDevice());

    getRequest("/Image/CV")
      .then((res) => {
        console.log(res);
        setCv(res.imageData);
      })
      .catch((err) => console.log(err));

    getRequest("/Content/Page/AboutMe")
      .then((res) => {
        setPageContent(res.contents);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Page style={{ minHeight: "110vh" }}>
      <h1 style={{ padding: "2% 2%", fontSize: 60 }}>About Me</h1>
      <AdjustableRow
        style={{ display: "flex", flexDirection: "row", height: "100%" }}
      >
        <AdjustableCol
          style={{ width: isMobile ? "100%" : "40%", height: "inherit" }}
        >
          <div style={{ paddingBlock: 20, paddingInline: 60 }}>
            <AvatarBox
              src="/placeholder.png"
              avatarSize={isMobile ? "10vh" : "25vh"}
              text={pageContent?.MyName && pageContent.MyName.payload}
            ></AvatarBox>
            <text style={{ fontSize: 20, padding: "5%" }}>
              {pageContent?.School && pageContent.School.payload}
            </text>
            {isMobile && (
              <DownloadButton
                downloadName="Serdil_Cagin_Cakmak_CV"
                downloadURI={getFileUrl(cv, "pdf")}
              />
            )}
            <div style={{ display: "flex", padding: "5% 11%" }}>
              <div style={{ width: "50%", marginRight: "10%" }}>
                <h3 style={{ fontWeight: 700, fontSize: "140%" }}>Interests</h3>
                <CustomList
                  elements={
                    pageContent?.InterestsList &&
                    pageContent.InterestsList.payload.split(",")
                  }
                  itemStyle={{ fontWeight: 400, color: colors.textDark }}
                />
              </div>
              <div style={{ width: "50%", marginLeft: "10%" }}>
                <h3 style={{ fontWeight: 700, fontSize: "140%" }}>
                  Experiences
                </h3>
                <CustomList
                  elements={
                    pageContent?.ExperienceList &&
                    pageContent.ExperienceList.payload.split(",")
                  }
                  itemStyle={{ fontWeight: 400, color: colors.textDark }}
                />
              </div>
            </div>
            <div style={{ textAlign: "center", color: colors.textDark }}>
              <span>
                {pageContent?.MainInfo && pageContent.MainInfo.payload}
              </span>
            </div>
          </div>
        </AdjustableCol>
        {!isMobile && (
          <AdjustableCol
            style={{
              width: "60%",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <div style={{ padding: "1%" }}>
              <DocumentViewer
                height="1000px"
                width="1000px"
                src={getFileUrl(cv, "pdf")}
              />
            </div>
            <DownloadButton
              downloadName="Serdil_Cagin_Cakmak_CV"
              downloadURI={getFileUrl(cv, "pdf")}
            />
          </AdjustableCol>
        )}
      </AdjustableRow>
    </Page>
  );
};
