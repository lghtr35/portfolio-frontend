import { getRequest } from "../../helpers/request";
import { getFileUrl } from "../../helpers/functions";
import { Page } from "@/components/base/Page";
import { ProjectTile } from "@/components/complex/projectTile/ProjectTile";
import { ProjectModal } from "@/components/complex/projectModal/ProjectModal";
import { Pagination } from "@/components/base/Pagination";
import { ELEMENTS_PER_ROW } from "@/helpers/conf";
import Link from "next/link";

const fillAndOpenModal = async (id, list) => {
  if (!id) return null;
  const project = list.find((v) => v.projectId.toString() === id);

  const images = project.images?.map((img) => {
    return getFileUrl(img.imageData, img.imageExtension);
  });

  const downloadable = await getRequest(`/Project/Download/${id}`).catch(
    (err) => console.log(err)
  );
  return { project, images, downloadable };
};

const Projects = async ({ searchParams }) => {
  const elementsPerRow = ELEMENTS_PER_ROW;
  const page = searchParams["page"] ?? 0;
  const size = searchParams["size"] ?? elementsPerRow * 2;
  const modalOpen = searchParams["is_modal_open"] ?? false;
  const projectId = searchParams["project_id"] ?? null;

  const resp = await getRequest(`/Project?page=${page}&size=${size}`).catch(
    (err) => console.log(err)
  );
  const totalRecords = resp.totalRecords;
  const rows = [];
  const { project, images, downloadable } =
    (await fillAndOpenModal(projectId, resp.content)) ?? {};
  for (let i = 0; i < resp.content.length / elementsPerRow; i++) {
    const rowElemCount =
      (i + 1) * elementsPerRow > resp.totalRecords
        ? resp.totalRecords - i * elementsPerRow
        : elementsPerRow;
    const row = [];
    for (let j = 0; j < rowElemCount; j++) {
      row.push(resp.content[i * elementsPerRow * (page + 1) + j]);
    }
    rows.push(row);
  }
  return (
    <Page>
      <h1 style={{ padding: "2% 2%", fontSize: 60 }}>Projects</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          minHeight: "68vh",
        }}
      >
        {rows.length &&
          rows.map((v, i) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  height: "50vh",
                }}
                key={i}
              >
                {v.map((val, ind) => {
                  return (
                    val && (
                      <Link
                        style={{
                          width: "100%",
                          height: "100%",
                          textDecoration: "none",
                          color: "inherit",
                        }}
                        key={ind}
                        href={`/projects?page=${page}&size=${size}&project_id=${
                          val.projectId
                        }&is_modal_open=${true}`}
                      >
                        <ProjectTile
                          src={
                            val.images.length &&
                            getFileUrl(
                              val.images[0].imageData,
                              val.images[0].imageExtension
                            )
                          }
                          projectTitle={val.projectTitle}
                          projectDescription={val.projectDescription}
                          key={ind}
                        />
                      </Link>
                    )
                  );
                })}
              </div>
            );
          })}
        {project && (
          <ProjectModal
            projectId={project.projectId}
            projectTitle={project.projectTitle}
            projectDescription={project.projectDescription}
            downloadable={downloadable}
            link={project.link}
            images={images}
            isOpen={modalOpen}
            isDownloadable={project.isDownloadable}
          />
        )}
      </div>
      <Pagination
        options={[elementsPerRow * 2, elementsPerRow * 3, elementsPerRow * 4]}
        count={totalRecords}
        page={Number(page)}
        rowsPerPage={Number(size)}
        href="projects"
      />
    </Page>
  );
};

export default Projects;
