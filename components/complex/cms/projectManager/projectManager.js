"use client";
import { Drawer } from "@/components/base/Drawer";
import { ACCEPTED_EXTENSIONS } from "@/helpers/conf";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { CmsInfoTable } from "../cmsInfoTable/cmsInfoTable";
import {
  deleteRequest,
  getRequest,
  postRequestBase,
  putRequestBase,
} from "@/helpers/request";

export const ProjectManager = (props) => {
  const [isUpdate, setIsUpdate] = useState(false); //mode === "update";
  const [isDelete, setIsDelete] = useState(false); //mode === "delete";
  const [isCreate, setIsCreate] = useState(false); //mode === "create";
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [data, setData] = useState(null);
  const [shouldRefetch, setShouldRefetch] = useState(0);

  const sendCreateRequest = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Header", e.target["project-header"].value);
    formData.append("Message", e.target["project-message"].value);
    formData.append("isDownloadable", e.target["project-downloadable"].checked);
    if (e.target["project-link"].value !== "")
      formData.append("Link", e.target["project-link"].value);
    formData.append("ProjectFile", e.target["project-file"].files[0]);
    if (e.target["project-images"].files.length > 0) {
      for (const file of Array.from(e.target["project-images"].files)) {
        formData.append("ProjectImages", file);
      }
    }

    postRequestBase("/Project", {
      data: formData,
      config: { credentials: "include" },
      serverUrl: props.server,
    });
    setShouldRefetch(shouldRefetch + 1);
  };

  const sendUpdateRequest = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("projectId", e.target["content-id"].value);

    if (e.target["project-header"].value !== "")
      formData.append("Header", e.target["project-header"].value);

    if (e.target["project-message"].value !== "")
      formData.append("Message", e.target["project-message"].value);

    formData.append("isDownloadable", e.target["project-downloadable"].checked);

    if (e.target["project-link"].value !== "")
      formData.append("Link", e.target["project-link"].value);

    if (e.target["project-file"].files?.[0])
      formData.append("ProjectFile", e.target["project-file"].files[0]);

    putRequestBase("/Project", {
      data: formData,
      config: { credentials: "include" },
      serverUrl: props.server,
    });
    setShouldRefetch(shouldRefetch + 1);
  };

  const sendDeleteRequest = (e) => {
    e.preventDefault();
    deleteRequest(`/Project?id=${e.target["project-id"].value}`, {
      config: {
        credentials: "include",
      },
      serverUrl: props.server,
    });
    setShouldRefetch(shouldRefetch + 1);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setSize(parseInt(event.target.value, 10));
    setPage(0);
  };

  const urlMap = {
    create: "admin?panel=project&mode=create",
    update: "admin?panel=project&mode=update",
    delete: "admin?panel=project&mode=delete",
    none: "admin?panel=project",
  };

  useEffect(() => {
    const mode = props?.mode;
    setIsCreate(mode === "create");
    setIsUpdate(mode === "update");
    setIsDelete(mode === "delete");

    setInterval(() => {
      setShouldRefetch(shouldRefetch + 1);
    }, 180000);
  }, [props?.mode]);

  useEffect(() => {
    getRequest(`/Project?page=${page}&size=${size}`, {
      config: {
        credentials: "include",
      },
      serverUrl: props.server,
    }).then((res) => {
      setData(res);
    });
  }, [size, page, shouldRefetch]);
  return (
    <div style={{ display: "flex" }}>
      <Drawer
        isOpen={isCreate}
        href={isCreate ? urlMap.none : urlMap.create}
        title="Create"
      >
        <div>
          <form onSubmit={sendCreateRequest}>
            <div className="content-input-container">
              <label>Project Header</label>
              <input
                className="content-input short"
                type="text"
                id="project-header"
                name="project-header"
                required
              ></input>
            </div>
            <div className="content-input-container">
              <label>Link</label>
              <input
                className="content-input"
                type="text"
                id="project-link"
                name="project-link"
              ></input>
            </div>
            <div className="content-input-container">
              <label>Project Message</label>
              <textarea
                className="content-input long thick"
                type="text"
                id="project-message"
                name="project-message"
                required
              ></textarea>
            </div>
            <div className="content-input-container">
              <label>Is Downloadable</label>
              <input
                type="checkbox"
                id="project-downloadable"
                name="project-downloadable"
              ></input>
            </div>
            <div className="content-input-container">
              <label>Project File</label>
              <input
                type="file"
                id="project-file"
                name="project-file"
                accept={ACCEPTED_EXTENSIONS.Project}
                required
              ></input>
            </div>
            <div className="content-input-container">
              <label>Project Images</label>
              <input
                type="file"
                id="project-images"
                name="project-images"
                multiple={true}
                accept={ACCEPTED_EXTENSIONS.Image}
              ></input>
            </div>
            <Button type="submit" variant="contained" color="success">
              Post
            </Button>
          </form>
        </div>
      </Drawer>
      <Drawer
        isOpen={isUpdate}
        href={isUpdate ? urlMap.none : urlMap.update}
        title="Update"
      >
        <div>
          <form onSubmit={sendUpdateRequest}>
            <div className="content-input-container">
              <label>Project Id</label>
              <select
                className="content-input shorter"
                type="text"
                id="content-id"
              >
                {data &&
                  data.content.map((val) => (
                    <option key={val.projectId} value={val.projectId}>
                      {val.projectId}
                    </option>
                  ))}
              </select>
            </div>
            <div className="content-input-container">
              <label>Project Header</label>
              <input
                className="content-input short"
                type="text"
                id="project-header"
              ></input>
            </div>
            <div className="content-input-container">
              <label>Link</label>
              <input
                className="content-input"
                type="text"
                id="project-link"
              ></input>
            </div>
            <div className="content-input-container">
              <label>Project Message</label>
              <input
                className="content-input"
                type="text"
                id="project-message"
              ></input>
            </div>
            <div className="content-input-container">
              <label>Is Downloadable</label>
              <input type="checkbox" id="project-downloadable"></input>
            </div>
            <div className="content-input-container">
              <label>Project File</label>
              <input
                type="file"
                id="project-file"
                accept={ACCEPTED_EXTENSIONS.Project}
              ></input>
            </div>
            <Button type="submit" variant="contained" color="success">
              Post
            </Button>
          </form>
        </div>
      </Drawer>
      <Drawer
        isOpen={isDelete}
        href={isDelete ? urlMap.none : urlMap.delete}
        title="Delete"
      >
        <div>
          <form onSubmit={sendDeleteRequest}>
            <div className="content-input-container">
              <label>Project Id</label>
              <select
                className="content-input shorter"
                type="text"
                id="project-id"
                name="project-id"
              >
                {data &&
                  data.content.map((val) => (
                    <option key={val.projectId} value={val.projectId}>
                      {val.projectId}
                    </option>
                  ))}
              </select>
            </div>
            <Button type="submit" variant="contained" color="success">
              Post
            </Button>
          </form>
        </div>
      </Drawer>
      <CmsInfoTable
        href={urlMap[props?.mode ?? "none"]}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
        page={page}
        size={size}
        data={data}
        columnsToRemove={["images"]}
      />
    </div>
  );
};
