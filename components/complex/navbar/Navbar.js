import { colors } from "../../../helpers/conf";
import "./Navbar.css";
import Link from "next/link";
import { Logo } from "@/components/base/Logo";

export const Navbar = (props) => {
  const pages = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About Me", path: "/about" },
  ];
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          backgroundColor: colors.primary,
          width: "100%",
          height: "12vh",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
          }}
        >
          <div style={{ width: "70%", paddingLeft: "2%" }}>
            <Link
              href="/"
              style={{
                textDecoration: "none",
                color: colors.text,
              }}
            >
              <Logo />
            </Link>
          </div>
          {pages.map((page) => (
            <Link
              className="navbar-button"
              style={{
                textAlign: "center",
                marginTop: "2.8vh",
                color: colors.text,
                textDecoration: "none",
              }}
              key={page.name}
              href={page.path}
            >
              <span
                style={{
                  fontSize: 20,
                }}
              >
                {page.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
