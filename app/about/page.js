import "./About.css";
import { colors } from "../../helpers/conf";
import { getFileUrl } from "@/helpers/functions";
import { getRequest } from "@/helpers/request";
import { Page } from "@/components/base/Page";
import { AdjustableRow } from "@/components/base/AdjustableRow";
import { AdjustableCol } from "@/components/base/AdjustableCol";
import { AvatarBox } from "@/components/base/AvatarBox";
import { CustomList } from "@/components/base/CustomList";
import { CvViewer } from "@/components/complex/cvViewer/cvViewer";
import { CvDownloader } from "@/components/complex/cvDownloader/cvDownloader";

const About = async () => {
  const AboutResponse = await getRequest("/Content/Page/AboutMe").catch(
    (err) => {
      console.log("Error in content get at AboutMe ", err);
    }
  );
  const pageContent = AboutResponse.contents;

  const cv = await getRequest("/Image/CV").catch((err) => {
    console.log("Error in cv get at AboutMe ", err);
  });

  const avatarImg = pageContent?.avatarImage
    ? await getRequest(
        `/Image/${pageContent.avatarImage.payload.replace("img:", "")}`
      ).catch((err) => {
        console.log("Error in avatar img get at AboutMe ", err);
      })
    : "";

  return (
    <Page style={{ minHeight: "110vh" }}>
      <h1 style={{ padding: "2% 2%", fontSize: 60 }}>About Me</h1>
      <AdjustableRow
        style={{ display: "flex", flexDirection: "row", height: "100%" }}
      >
        <AdjustableCol style={{ width: "100%", height: "inherit" }}>
          <div style={{ paddingBlock: 20, paddingInline: 60 }}>
            {avatarImg && pageContent?.MyName && (
              <AvatarBox
                src={getFileUrl(avatarImg.imageData, avatarImg.imageExtension)}
                avatarSize={"25vh"}
                text={pageContent?.MyName && pageContent.MyName.payload}
              ></AvatarBox>
            )}
            <span style={{ fontSize: 20, padding: "5%" }}>
              {pageContent?.School && pageContent.School.payload}
            </span>
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
            <CvDownloader cv={cv} />
          </div>
        </AdjustableCol>
        <CvViewer cv={cv} />
      </AdjustableRow>
    </Page>
  );
};

export default About;
