import "./About.css";
import {
  AdjustableCol,
  AdjustableRow,
  AvatarBox,
  CustomList,
  DocumentViewer,
  Page,
} from "../../components/static.components";
import { colors } from "../../helpers/conf";
import { Button } from "@mui/material";
import { isMobileDevice } from "../../helpers/functions";
import { useEffect, useState } from "react";

export const About = () => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  });

  const list = [
    "Web Development",
    "Computer Communications",
    "Internet of Things",
  ];
  const aboutMe =
    " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at blandit leo, malesuada maximus erat. Quisque consequat varius augue, consectetur laoreet lectus commodo et. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In id neque eros. Praesent accumsan molestie est, vitae fermentum purus vestibulum aliquet. Vestibulum tellus quam, tincidunt et fermentum vel, gravida a quam. Donec quis quam erat. Ut velit mauris, aliquet sit amet erat vel, pretium rhoncus nisi. Cras fringilla, sapien a viverra interdum, arcu magna lobortis risus, in placerat felis quam et turpis. Sed mauris mauris, ultricies a lacus dapibus, hendrerit ornare. ";
  const school = "Istanbul Technical University - Computer Engineering (B.S.)";
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
              text="Serdil Cagin Cakmak"
            ></AvatarBox>
            <text style={{ fontSize: 20, padding: "5%" }}>{school}</text>
            {isMobile && (
              <Button
                variant="contained"
                color="success"
                style={{ padding: "1% 4%", margin: "1% 0" }}
              >
                Download CV
              </Button>
            )}
            <div style={{ display: "flex", padding: "5% 11%" }}>
              <div style={{ marginRight: "2%" }}>
                <h3 style={{ fontWeight: 700, fontSize: "140%" }}>Interests</h3>
                <CustomList
                  elements={list}
                  itemStyle={{ fontWeight: 500, color: colors.textDark }}
                />
              </div>
              <div style={{ marginLeft: "2%" }}>
                <h3 style={{ fontWeight: 700, fontSize: "140%" }}>
                  Experiences
                </h3>
                <CustomList
                  elements={list}
                  itemStyle={{ fontWeight: 500, color: colors.textDark }}
                />
              </div>
            </div>
            <div style={{ textAlign: "center", color: colors.textDark }}>
              <span>{aboutMe}</span>
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
                src="/Serdil_Cagin_Cakmak_CV.pdf"
              />
            </div>
            <Button
              variant="contained"
              color="success"
              style={{ padding: "1% 4%", margin: "1% 0" }}
            >
              Download
            </Button>
          </AdjustableCol>
        )}
      </AdjustableRow>
    </Page>
  );
};
