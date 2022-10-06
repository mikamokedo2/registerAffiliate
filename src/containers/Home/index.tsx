import { Tabs } from "antd";
import HomeDownLoad from "../../components/HomeDownLoad";
import RegisterContainer from "../Register";
import LayoutHome from "./LayoutHome";

const index = () => {
  return (
    <LayoutHome>
      <div className="tab">
        <Tabs defaultActiveKey="1" centered>
          <Tabs.TabPane tab="Đã có tài khoản" key="1">
            <HomeDownLoad />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Chưa có tài khoản" key="2">
            <RegisterContainer />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </LayoutHome>
  );
};

export default index;
