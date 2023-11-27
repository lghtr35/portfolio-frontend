"use client";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Pagination = (props) => {
  const totalPage = Math.floor(props.count / props.rowsPerPage) + 1;
  const size = props.rowsPerPage;
  const router = useRouter();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        margin: "1% 1% 1% 7%",
        color: props?.color ?? "inherit",
      }}
    >
      <div
        style={{
          padding: "0 10px",
          display: "flex",
          flexDirection: "row",
          width: "40%",
        }}
      >
        <h5>Items per page:</h5>
        <select
          style={{
            width: "15%",
            backgroundColor: "0000002f",
            border: "0px solid transparent",
            borderRadius: "5%",
            marginLeft: "2%",
          }}
          name="rows-per-page"
          onChange={(e) => {
            router.push(
              `/${props.href}?page=${props.page}&size=${e.target.value}`
            );
          }}
          value={props.rowsPerPage}
        >
          {props.options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
      <div style={{ display: "flex", padding: "0 2%", width: "40%" }}>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          href={
            0 < props.page
              ? `/${props.href}?page=${props.page - 1}&size=${size}`
              : `/${props.href}?page=${props.page}&size=${size}`
          }
        >
          <div style={{ margin: "0 2%", cursor: "pointer" }}>
            <ArrowBackIcon />
          </div>
        </Link>
        <div style={{ margin: "0 10%" }}>
          Page:{props.page + 1}/{totalPage}
        </div>
        <Link
          style={{ textDecoration: "none", color: "inherit" }}
          href={
            totalPage > props.page
              ? `/${props.href}?page=${props.page + 1}&size=${size}`
              : `/${props.href}?page=${props.page}&size=${size}`
          }
        >
          <div style={{ margin: "0 2%", cursor: "pointer" }}>
            <ArrowForwardIcon />
          </div>
        </Link>
      </div>
    </div>
  );
};
