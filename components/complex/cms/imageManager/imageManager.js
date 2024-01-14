"use client";
import { Drawer } from "@/components/base/Drawer";
import { ACCEPTED_EXTENSIONS } from "@/helpers/conf";
import {
  deleteRequest,
  getRequest,
  postRequestBase,
  putRequestBase,
} from "@/helpers/request";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { CmsInfoTable } from "../cmsInfoTable/cmsInfoTable";

export const ImageManager = (props) => {
  const [isUpdate, setIsUpdate] = useState(false); //mode === "update";
  const [isDelete, setIsDelete] = useState(false); //mode === "delete";
  const [isCreate, setIsCreate] = useState(false); //mode === "create";
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [data, setData] = useState(null);
  const [projectIds, setProjectIds] = useState(null);
  const [shouldRefetch, setShouldRefetch] = useState(0);

  const sendCreateRequest = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("ImageName", e.target["image-name"].value);

    formData.append("ImageFile", e.target["image-file"].files[0]);

    postRequestBase("/Image", {
      data: formData,
      config: { credentials: "include" },
      serverUrl: props.server,
    });
    setShouldRefetch(shouldRefetch + 1);
  };

  const sendUpdateRequest = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("imageId", e.target["image-id"].value);

    if (e.target["image-name"].value !== "")
      formData.append("ImageName", e.target["image-name"].value);

    if (e.target["project-id"].value !== "")
      formData.append("projectId", e.target["project-id"].value);

    if (e.target["image-file"].files?.[0])
      formData.append("ImageFile", e.target["image-file"].files[0]);

    putRequestBase("/Image", {
      data: formData,
      config: { credentials: "include" },
      serverUrl: props.server,
    });
    setShouldRefetch(shouldRefetch + 1);
  };

  const sendDeleteRequest = (e) => {
    e.preventDefault();
    deleteRequest(`/Image?id=${e.target["image-id"].value}`, {
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
    create: "admin?panel=image&mode=create",
    update: "admin?panel=image&mode=update",
    delete: "admin?panel=image&mode=delete",
    none: "admin?panel=image",
  };

  useEffect(() => {
    const mode = props?.mode;
    setIsCreate(mode === "create");
    setIsUpdate(mode === "update");
    setIsDelete(mode === "delete");

    getRequest(`/Project?page=0&size=10000`, {
      config: {
        credentials: "include",
      },
      serverUrl: props.server,
    }).then((res) => {
      const ids = res.content.map((val) => {
        return val.projectId;
      });
      setProjectIds(ids);
    });
  }, [props?.mode]);

  useEffect(() => {
    getRequest(`/Image?page=${page}&size=${size}`, {
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
              <label>Image Name</label>
              <input
                className="content-input"
                type="text"
                id="image-name"
                name="image-name"
                required
              ></input>
            </div>
            <div className="content-input-container">
              <label>Image File</label>
              <input
                type="file"
                id="image-file"
                name="image-file"
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
              <label>Image Id</label>
              <select
                className="content-input shorter"
                type="text"
                id="image-id"
                required
              >
                {data &&
                  data.content.map((val) => (
                    <option key={val.imageId} value={val.imageId}>
                      {val.imageId}
                    </option>
                  ))}
              </select>
            </div>
            <div className="content-input-container">
              <label>Image Name</label>
              <input
                className="content-input"
                type="text"
                id="image-name"
              ></input>
            </div>
            <div className="content-input-container">
              <label>Project Id</label>
              <select
                className="content-input shorter"
                type="text"
                id="project-id"
              >
                {projectIds &&
                  projectIds.map((val) => (
                    <option key={val} value={val}>
                      {val}
                    </option>
                  ))}
              </select>
            </div>
            <div className="content-input-container">
              <label>Image File</label>
              <input
                type="file"
                id="image-file"
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
        isOpen={isDelete}
        href={isDelete ? urlMap.none : urlMap.delete}
        title="Delete"
      >
        <div>
          <form onSubmit={sendDeleteRequest}>
            <div className="content-input-container">
              <label>Image Id</label>
              <select
                className="content-input shorter"
                type="text"
                id="image-id"
              >
                {data &&
                  data.content.map((val) => (
                    <option key={val.imageId} value={val.imageId}>
                      {val.imageId}
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
      />
    </div>
  );
};
