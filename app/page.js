import { Page } from "@/components/base/Page";
import { colors } from "../helpers/conf";
import "./page.css";
import { AdjustableRow } from "@/components/base/AdjustableRow";
import { CircuitBoard } from "@/components/base/CircuitBoard";
import { Greeting } from "@/components/complex/greeting/greeting";
import { ShortInfo } from "@/components/complex/shortInfo/ShortInfo";
import { getRequest } from "@/helpers/request";

const Home = async () => {
  const HomeData = await getRequest("/Content/page/Home");
  return (
    <Page>
      <AdjustableRow minHeight="62vh" minWidth="100%">
        <CircuitBoard />
        <Greeting />
      </AdjustableRow>
      <AdjustableRow
        backgroundColor={colors.backgroundLight}
        style={{
          position: "relative",
          zIndex: 3,
          boxShadow: "0px -3px 30px 0px rgba(0,0,0,0.5)",
        }}
      >
        <ShortInfo data={{ shortInfo: HomeData?.contents?.ShortInfo }} />
      </AdjustableRow>
    </Page>
  );
};

export default Home;
