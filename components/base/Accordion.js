import { colors } from "@/helpers/conf";
import Link from "next/link";

export const Accordion = (props) => {
  const isOpen = props?.isOpen ?? false;
  return (
    <div
      style={{
        background: colors.primary,
        padding: "1.2%",
        marginBlock: "0.6%",
      }}
    >
      <Link
        style={{
          textDecoration: "none",
          color: colors.textWhite,
          fontSize: 20,
          fontWeight: 550,
        }}
        href={props.href}
      >
        <div id="always-visible">{props.title}</div>
      </Link>
      <div id="hidden-part" style={{ display: isOpen ? "inline" : "none" }}>
        {props.children}
      </div>
    </div>
  );
};
