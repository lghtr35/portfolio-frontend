export const DocumentViewer = (props) => {
  return (
    <iframe
      src={props.src}
      type="application/pdf"
      height={props.height}
      width={props.width}
      title="document"
    />
  );
};
