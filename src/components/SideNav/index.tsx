import { useState } from "react";
import { Layout, Menu } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import "./sideNaveStyle.less"
const { Sider } = Layout;
const { SubMenu } = Menu;

function SideNav(): JSX.Element {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onCollapse = (collapsed: boolean) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onCollapse}
      style={{
        textAlign:'center'
      }}
    >
      <img src={logo} style={{height:'60px',margin:'auto'}} />
      <Menu defaultSelectedKeys={["1"]} mode="inline">
        <Menu.Item key="1" icon={<DesktopOutlined />}>
        <Link to="/dashboard">
            DASHBOARD
        </Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<FileOutlined />}>
        <Link to="/project">
            PROJECT
        </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}

export default SideNav;
