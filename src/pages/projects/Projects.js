import { useEffect, useState } from "react";
import { getRequest } from "../../helpers/request";
import {
  Pagination,
  Page,
  ProjectModal,
  ProjectTile,
} from "../../components/static.components";
import { getFileUrl } from "../../helpers/functions";

export const Projects = () => {
  const fillAndOpenModal = (content) => {
    const images = content.images?.map((img) => {
      return {
        imageUrl: getFileUrl(img.imageData, img.imageExtension),
        ...img,
      };
    });
    setImages(images);
    setContent(content);
    setModalOpen(true);
  };
  const elementsPerRow = 4;
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(elementsPerRow * 2);
  const [totalRecords, setTotalRecords] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [content, setContent] = useState(null);
  const [images, setImages] = useState([]);
  const [rows, setRows] = useState([]);

  const handleSize = (e) => {
    setSize(e);
    setPage(0);
  };
  useEffect(() => {
    getRequest(`/Project?page=${page}&size=${size}`, {
      "Access-Control-Allow-Origin": "http://localhost:3000",
    })
      .then((res) => {
        if (res) {
          setTotalRecords(res.totalRecords);
          const newRows = [];
          for (let i = 0; i < res.content.length / elementsPerRow; i++) {
            const rowElemCount =
              (i + 1) * elementsPerRow > res.totalRecords
                ? res.totalRecords - i * elementsPerRow
                : elementsPerRow;
            const row = [];
            for (let j = 0; j < rowElemCount; j++) {
              row.push(res.content[i * elementsPerRow * (page + 1) + j]);
            }
            newRows.push(row);
          }
          setRows(newRows);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, size]);
  return (
    <Page>
      <h1 style={{ padding: "2% 2%", fontSize: 60 }}>Projects</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          minHeight: "40vw",
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
                  height: "35vh",
                }}
                key={i}
              >
                {v.map((val, ind) => {
                  return (
                    val && (
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
                        onClick={() => {
                          fillAndOpenModal(val);
                        }}
                        key={ind}
                      />
                    )
                  );
                })}
              </div>
            );
          })}
        {content && (
          <ProjectModal
            projectId={content.projectId}
            projectTitle={content.projectTitle}
            projectDescription={content.projectDescription}
            link={content.link}
            images={images}
            isOpen={modalOpen}
            isDownloadable={content?.isDownloadable}
            onClose={() => {
              setModalOpen(false);
            }}
          />
        )}
      </div>
      <Pagination
        options={[elementsPerRow * 2, elementsPerRow * 3, elementsPerRow * 4]}
        count={totalRecords}
        page={page}
        rowsPerPage={size}
        onRowsPerPageChange={handleSize}
        onPageChange={setPage}
      />
    </Page>
  );
};
