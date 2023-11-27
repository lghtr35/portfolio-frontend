import { AdjustableRow } from "@/components/base/AdjustableRow";
import { Page } from "@/components/base/Page";
import { Rerouter } from "@/components/base/Rerouter";
import { AdminPanel } from "@/components/complex/adminPanel/adminPanel";
import { LogoutButton } from "@/components/complex/logoutButton/logoutButton";
import { getRequest } from "@/helpers/request";
import { cookies } from "next/headers";

const Admin = async ({ searchParams }) => {
  const isValidToken = (
    await getRequest(
      "/Admin/IsValid",
      {
        cache: "no-store",
        credentials: "include",
      },
      { Cookie: cookies().toString() }
    )
  )?.succeed;
  const openPanel = searchParams["panel"] ?? "none";
  const openMode = searchParams["mode"] ?? "none";
  return (
    <Page>
      <Rerouter href="login" shouldReroute={!isValidToken} />
      <AdjustableRow minHeight="89vh" style={{ paddingTop: "1.5%" }}>
        <LogoutButton />
        {isValidToken && <AdminPanel panel={openPanel} mode={openMode} />}
      </AdjustableRow>
    </Page>
  );
};

export default Admin;
