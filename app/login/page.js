import { AdjustableRow } from "@/components/base/AdjustableRow";
import { Page } from "@/components/base/Page";
import "./login.css";
import { LoginForm } from "@/components/complex/loginForm/loginForm";
import { SERVER_URL } from "@/helpers/conf";

const Login = () => {
  return (
    <Page>
      <AdjustableRow minHeight="89vh" style={{ paddingTop: "1.5%" }}>
        <LoginForm server={"/api/v1"} />
      </AdjustableRow>
    </Page>
  );
};
export default Login;
