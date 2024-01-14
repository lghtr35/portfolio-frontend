import { AdjustableRow } from "@/components/base/AdjustableRow";
import { Page } from "@/components/base/Page";
import { Rerouter } from "@/components/base/Rerouter";
import { AdminPanel } from "@/components/complex/adminPanel/adminPanel";
import { LogoutButton } from "@/components/complex/logoutButton/logoutButton";
import { SERVER_URL } from "@/helpers/conf";
import { getRequest } from "@/helpers/request";
import { cookies } from "next/headers";

const Admin = async ({ searchParams }) => {
  const isValidToken = (
    await getRequest("/Admin/IsValid", {
      config: {
        cache: "no-store",
        credentials: "include",
      },
      headers: { Cookie: cookies().toString() },
    })
  )?.succeed;
  const openPanel = searchParams["panel"] ?? "none";
  const openMode = searchParams["mode"] ?? "none";
  return (
    <Page>
      <Rerouter href="login" shouldReroute={!isValidToken} />
      <AdjustableRow minHeight="89vh" style={{ paddingTop: "1.5%" }}>
        <LogoutButton server={"/api/v1"} />
        {isValidToken && (
          <AdminPanel panel={openPanel} mode={openMode} server={"/api/v1"} />
        )}
      </AdjustableRow>
    </Page>
  );
};

export default Admin;
