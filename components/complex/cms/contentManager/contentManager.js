"use client";
import { Button } from "@mui/material";
import { Drawer } from "@/components/base/Drawer";
import "../cms.css";
import { useEffect, useState } from "react";
import { CmsInfoTable } from "../cmsInfoTable/cmsInfoTable";
import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from "@/helpers/request";

export const ContentManager = (props) => {
  const [isUpdate, setIsUpdate] = useState(false); //mode === "update";
  const [isDelete, setIsDelete] = useState(false); //mode === "delete";
  const [isCreate, setIsCreate] = useState(false); //mode === "create";
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [data, setData] = useState(null);
  const [shouldRefetch, setShouldRefetch] = useState(0);

  const sendCreateRequest = (e) => {
    e.preventDefault();
    const body = {
      place: e.target["content-page"].value,
      location: e.target["content-location"].value,
      payload: e.target["content-payload"].value,
    };
    postRequest("/Content", {
      data: body,
      config: { credentials: "include" },
      serverUrl: props.server,
    });
    setShouldRefetch(shouldRefetch + 1);
  };

  const sendUpdateRequest = (e) => {
    e.preventDefault();
    const body = {
      contentId: e.target["content-id"].value,
      place:
        e.target["content-page"].value === ""
          ? null
          : e.target["content-page"].value,
      location:
        e.target["content-location"].value === ""
          ? null
          : e.target["content-location"].value,
      payload:
        e.target["content-payload"].value === ""
          ? null
          : e.target["content-payload"].value,
    };
    if (body.place || body.location || body.payload) {
      putRequest("/Content", {
        data: body,
        config: { credentials: "include" },
        serverUrl: props.server,
      });
      setShouldRefetch(shouldRefetch + 1);
    }
  };

  const sendDeleteRequest = (e) => {
    e.preventDefault();
    deleteRequest(`/Content?id=${e.target["content-id"].value}`, {
      config: { credentials: "include" },
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
    create: "admin?panel=content&mode=create",
    update: "admin?panel=content&mode=update",
    delete: "admin?panel=content&mode=delete",
    none: "admin?panel=content",
  };

  useEffect(() => {
    const mode = props?.mode;
    setIsCreate(mode === "create");
    setIsUpdate(mode === "update");
    setIsDelete(mode === "delete");
  }, [props?.mode]);

  useEffect(() => {
    getRequest(`/Content?page=${page}&size=${size}`, {
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
              <label>Content Page</label>
              <input
                className="content-input"
                type="text"
                id="content-page"
                name="content-page"
                required
              ></input>
            </div>
            <div className="content-input-container">
              <label>Page Location</label>
              <input
                className="content-input"
                type="text"
                id="content-location"
                name="content-location"
                required
              ></input>
            </div>
            <div className="content-input-container">
              <label>Content Payload</label>
              <textarea
                className="content-input long thick"
                id="content-payload"
                name="content-payload"
                required
              ></textarea>
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
              <label>Content Id</label>
              <select
                className="content-input shorter"
                type="text"
                id="content-id"
                name="content-id"
                required
              >
                {data &&
                  data.content.map((val) => (
                    <option key={val.contentId} value={val.contentId}>
                      {val.contentId}
                    </option>
                  ))}
              </select>
            </div>
            <div className="content-input-container">
              <label>Content Page</label>
              <input
                className="content-input"
                type="text"
                id="content-page"
                name="content-page"
              ></input>
            </div>
            <div className="content-input-container">
              <label>Page Location</label>
              <input
                className="content-input"
                type="text"
                id="content-location"
                name="content-location"
              ></input>
            </div>
            <div className="content-input-container">
              <label>Content Payload</label>
              <textarea
                className="content-input long thick"
                id="content-payload"
                name="content-payload"
              ></textarea>
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
              <label>Content Id</label>
              <select
                className="content-input shorter"
                type="text"
                id="content-id"
                name="content-id"
                required
              >
                {data &&
                  data.content.map((val) => (
                    <option key={val.contentId} value={val.contentId}>
                      {val.contentId}
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
