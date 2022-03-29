import { GithubOutlined } from "@ant-design/icons";
import { Layout } from "antd";
const { Footer } = Layout;

const Footers: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Footer
    //   copyright={`${currentYear} ${defaultMessage}`}
    //   links={[
    //     {
    //       key: 'Ant Design Pro',
    //       title: 'Ant Design Pro',
    //       href: 'https://pro.ant.design',
    //       blankTarget: true,
    //     },
    //     {
    //       key: 'github',
    //       title: <GithubOutlined />,
    //       href: 'https://github.com/ant-design/ant-design-pro',
    //       blankTarget: true,
    //     },
    //     {
    //       key: 'Ant Design',
    //       title: 'Ant Design',
    //       href: 'https://ant.design',
    //       blankTarget: true,
    //     },
    //   ]}
    >
      {currentYear}
    </Footer>
  );
};

export default Footers;
