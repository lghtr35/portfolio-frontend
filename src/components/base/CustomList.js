export const CustomList = (props) => {
  return (
    <ul
      style={{
        fontFamily: props?.style?.fontFamily
          ? props.style.fontFamily
          : "Helvetica neue",
        ...props?.style,
      }}
    >
      {props.elements?.map((el) => (
        <li style={{ ...props.itemStyle }} key={el}>
          <p>{el}</p>
        </li>
      ))}
    </ul>
  );
};
