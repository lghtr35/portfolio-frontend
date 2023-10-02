import { useEffect, useState } from "react";
import { getRequest } from "../../helpers/request";
import { colors, SERVER_URL } from "../../helpers/conf";
import {
  AdjustableSection,
  CustomCarousel,
} from "../../components/static.components";
import { Grid, Modal, TablePagination, Typography } from "@mui/material";
import { getImageUrl } from "../../helpers/functions";

export const Projects = () => {
  const fillAndOpenModal = (content) => {
    const imagesJSX = content?.images.map((img) => {
      return (
        <img
          style={{
            height: "20vh",
            width: "40vh",
            objectFit: "cover",
            alignSelf: "center",
            margin: "1%",
            borderRadius: "10%",
          }}
          src={getImageUrl(img.imageData, img.imageExtension)}
        />
      );
    });
    console.log(imagesJSX);
    setModalChildren(
      <div
        style={{
          alignContent: "center",
          justifyContent: "center",
          flexDirection: "column",
          width: "50%",
          height: "50%",
          marginLeft: "25%",
          marginTop: "5%",
          display: "flex",
          backgroundColor: colors.primary,
        }}
      >
        <Typography variant="h3">{content?.projectTitle}</Typography>
        <Typography variant="h5">{content?.projectDescription}</Typography>
        <a href={content?.link}>Go to repo</a>
        <div style={{ display: "flex" }}>{imagesJSX}</div>
      </div>
    );
    setModalOpen(true);
  };
  const [projects, setProjects] = useState(null);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(9);
  const [totalRecords, setTotalRecords] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalChildren, setModalChildren] = useState(<div></div>);
  const handlePage = (e, n) => {
    setPage(n);
  };
  const handleSize = (e) => {
    setSize(parseInt(e.target.value, 10));
    setPage(0);
  };
  useEffect(() => {
    getRequest(`${SERVER_URL}/Project?page=${page}&size=${size}`, {
      "Access-Control-Allow-Origin": "http://localhost:3000",
    })
      .then((res) => {
        if (res) {
          console.log(res.content);
          setProjects(res.content);
          setTotalRecords(res.totalRecords);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, size]);
  return (
    <AdjustableSection minHeight="88vh">
      <Typography paddingLeft={4} paddingTop={2} variant="h2">
        Projects
      </Typography>
      <Grid container spacing={4} padding="1%">
        {projects &&
          projects.map((v, i) => {
            return (
              <Grid item xs={4} key={i}>
                <div
                  style={{
                    backgroundColor: colors.secondary,
                    height: "50vh",
                    width: "50vh",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0px -3px 30px 0px rgba(0,0,0,0.5)",
                    borderRadius: "10%",
                  }}
                  onClick={() => {
                    fillAndOpenModal(v);
                  }}
                >
                  <div
                    style={{
                      margin: "5%",
                    }}
                  >
                    <Typography variant="h4">{v?.projectTitle}</Typography>
                  </div>
                  <img
                    style={{
                      height: "37vh",
                      width: "48vh",
                      objectFit: "cover",
                      alignSelf: "center",
                      margin: "1%",
                      borderRadius: "10%",
                    }}
                    src={
                      v.images.length &&
                      getImageUrl(
                        v.images[0].imageData,
                        v.images[0].imageExtension
                      )
                    }
                  />
                </div>
              </Grid>
            );
          })}
        <Modal
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
        >
          {modalChildren}
        </Modal>
        <TablePagination
          width="100%"
          count={totalRecords}
          page={page}
          rowsPerPage={size}
          onRowsPerPageChange={handleSize}
          onPageChange={handlePage}
          rowsPerPageOptions={[9, 18, 27, 36]}
        />
      </Grid>
    </AdjustableSection>
  );
};
