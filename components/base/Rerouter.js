"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const Rerouter = (props) => {
  const router = useRouter();
  useEffect(() => {
    if (props.shouldReroute) router.push(props.href);
  });
  return <div></div>;
};
