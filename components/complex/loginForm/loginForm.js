"use client";
import { postRequest } from "@/helpers/request";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const LoginForm = (props) => {
  const router = useRouter();
  const [isLogged, setIsLogged] = useState(false);

  const requestLogin = async (e) => {
    e.preventDefault();
    const body = {
      password: e.target["login-form-password"].value,
      username: e.target["login-form-username"].value,
    };
    return postRequest("/Admin/Login", {
      data: body,
      config: { credentials: "include" },
      serverUrl: props.server,
    });
  };

  useEffect(() => {
    if (isLogged) router.push("/admin");
  }, [isLogged]);
  return (
    <form
      style={{ display: "flex", flexDirection: "column" }}
      onSubmit={(e) => {
        requestLogin(e).then((res) => {
          if (res?.token) setIsLogged(true);
        });
      }}
    >
      <div className="login-form-input-box">
        <div className="login-form-label">
          <label>Username</label>
        </div>
        <input type="text" name="login-form-username" />
      </div>
      <div className="login-form-input-box">
        <div className="login-form-label">
          <label>Password</label>
        </div>
        <input type="password" name="login-form-password" />
      </div>
      <button className="login-form-submit-button" type="submit">
        Login
      </button>
    </form>
  );
};
