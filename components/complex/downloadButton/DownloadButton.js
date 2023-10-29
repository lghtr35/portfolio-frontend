import { Button } from "@mui/material";

export const DownloadButton = (props) => {
  return (
    <a
      href={props.downloadURI}
      download={props.downloadName}
      target="_blank"
      rel="noreferrer"
      style={props.style}
    >
      <Button variant="contained" color="success" size="large">
        Download {props.downloadName}
      </Button>
    </a>
  );
};
