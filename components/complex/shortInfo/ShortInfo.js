import Link from "next/link";
import { colors } from "../../../helpers/conf";
import { getRequest } from "../../../helpers/request";
import { getFileUrl } from "../../../helpers/functions";
import { Carousel } from "@/components/base/Carousel";
import { StringToJSX } from "../stringToJSX/stringToJSX";

export const ShortInfo = async (props) => {
  const latestProjectsData = await getRequest(`/Project/latest`);

  const latestProjects = latestProjectsData?.content ?? [];
  const shortInfo = props?.data.shortInfo;

  const boxStyle = {
    width: "100vw",
    height: "50vw",
    backgroundColor: colors.primary,
    boxShadow: "0px 0px 6px 4px rgba(0,0,0,0.1)",
    textAlign: "center",
  };
  const linkStyle = {
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "3vw",
    color: colors.textWhite,
  };
  return (
    <div
      style={{
        paddingInline: "4%",
        paddingBlock: "3%",
        color: colors.textDark,
      }}
    >
      {shortInfo && <StringToJSX data={shortInfo?.payload} />}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginTop: "2%",
        }}
      >
        <div id="short-info-projects" style={boxStyle}>
          <Link className="hoverable-text" href="/projects" style={linkStyle}>
            Projects
          </Link>
          <div style={{ width: "90%", marginInline: "auto", marginTop: "4%" }}>
            {latestProjects && (
              <Carousel
                imageStyle={{
                  height: "35vw",
                  width: "85vw",
                  objectFit: "cover",
                  alignSelf: "center",
                  marginTop: "1vw",
                }}
                titles={latestProjects.map((p) => p.projectTitle)}
                images={latestProjects.map((p) => {
                  return p.images.length > 0
                    ? getFileUrl(
                        p.images[0]?.imageData,
                        p.images[0]?.imageExtension
                      )
                    : null;
                })}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
