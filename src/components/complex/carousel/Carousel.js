export const Carousel = (props) => {
  return (
    <div style={{ display: "flex", ...props.style }}>
      {props.images.map((img) => {
        return (
          <img
            style={{ objectFit: "contain", ...props.imageStyle }}
            src={img.imageUrl}
          />
        );
      })}
    </div>
  );
};
