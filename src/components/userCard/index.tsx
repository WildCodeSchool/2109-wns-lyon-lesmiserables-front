import { Card, Avatar, Row, Col, Select } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons";
const { Meta } = Card;
const { Option, OptGroup } = Select;
const test = () => {
  console.log("jappuie sur le bouton");
};
const Manager = ({work}:{work:string}) => {
  const handleChange = (value: string) => {
    console.log("value", value);
  };
  return (
    <Select defaultValue="masterChef" style={{width:200}} onChange={handleChange} bordered={false}>
      <OptGroup label="Manager">
        <Option value="masterChef">{work}</Option>
      </OptGroup>
      <OptGroup label="Engineer">
        <Option value="Developer">{work}</Option>
      </OptGroup>
    </Select>
  );
};
function UserCard({ name,working}: { name: string,working:string }) {
  return (
    <Card
      actions={[
        // <Manager />,
        <EditOutlined key="edit" />,
        <CloseCircleOutlined />,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        title={name}
        description={ <Manager work={working} />}
      />
    </Card>
  );
}

export default UserCard;
