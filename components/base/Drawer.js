import { colors } from "@/helpers/conf";
import Link from "next/link";
import "./Base.scss";

export const Drawer = (props) => {
  const isOpen = props?.isOpen ?? false;
  return (
    <div
      style={{
        display: "flex",
        fontSize: 20,
        fontWeight: 550,
        margin: "0.25%",
        background: props.color ?? colors.backgroundSecondary,
      }}
    >
      <Link
        style={{
          textDecoration: "none",
          color: props.textColor ?? colors.text,
        }}
        href={props.href}
      >
        <div id="always-visible-drawer">
          <div
            style={
              isOpen
                ? { padding: "20px" }
                : { transform: "rotate(-90deg)", marginTop: "50px" }
            }
          >
            {props.title}
          </div>
        </div>
      </Link>
      <div
        id="hidden-part-drawer"
        style={{
          visibility: isOpen ? "visible" : "hidden",
          width: isOpen ? "100%" : 0,
          background: props.color ?? colors.secondary,
          padding: "8px",
        }}
      >
        {props.children}
      </div>
    </div>
  );
};
