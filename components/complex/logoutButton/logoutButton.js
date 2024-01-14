"use client";
import { postRequest } from "@/helpers/request";
import Link from "next/link";

export const LogoutButton = () => {
  return (
    <Link onClick={Logout} href="/login">
      <button>Log out</button>
    </Link>
  );
};

const Logout = async () => {
  postRequest("/Admin/Logout", {
    config: { credentials: "include" },
    serverUrl: props.server,
  });
};
