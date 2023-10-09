import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useEffect, useState } from "react";
import { colors } from "../../helpers/conf";

export const Pagination = (props) => {
  const [totalPage, setTotalPage] = useState(1);
  useEffect(() => {
    setTotalPage(Math.floor(props.count / props.rowsPerPage) + 1);
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        margin: "1% 1% 1% 7%",
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
            props.onRowsPerPageChange(parseInt(e.target.value, 10));
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
        <div
          style={{ margin: "0 2%", cursor: "pointer" }}
          onClick={() => {
            if (props.page > 0) props.onPageChange(props.page - 1);
          }}
        >
          <ArrowBackIcon />
        </div>
        <div style={{ margin: "0 10%" }}>
          Page:{props.page + 1}/{totalPage}
        </div>
        <div
          style={{ margin: "0 2%", cursor: "pointer" }}
          onClick={() => {
            if (props.page + 1 < totalPage) props.onPageChange(props.page + 1);
          }}
        >
          <ArrowForwardIcon />
        </div>
      </div>
    </div>
  );
};
