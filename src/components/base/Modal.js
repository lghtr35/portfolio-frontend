export const Modal = (props) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        display: props.isOpen ? "inline-block" : "none",
      }}
    >
      <div
        style={{
          zIndex: 1102,
          position: "fixed",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        {props.children}
      </div>
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.3)",
          position: "fixed",
          width: "100%",
          height: "100%",
          top: 0,
          zIndex: 1101,
        }}
        onClick={props.onClose}
      />
    </div>
  );
};
