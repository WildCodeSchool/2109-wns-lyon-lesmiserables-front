import UserCard from "../../../components/userCard";
import { Card, Avatar, Row, Col } from "antd";
function Users() {
  const user = [
    {
      id:1,
      name: "JHONE DOE",
      work: "Manager",
    },
    {
      id:2,
      name: "HUGO DOE",
      work: "Developer",
    },
    {
      id:3,
      name: "LOIC DOE",
      work: "Manager",
    },
    {
      id:4,
      name: "YOUCEF DOE",
      work: "Manager",
    },
    {
      id:5,
      name: "CLEMENT DOE",
      work: "Developer",
    },
    {
      id:6,
      name: "AMADOU DOE",
      work: "Manager",
    },
  ];
  return (
    <>
      <Row gutter={[24, 24]}>
        {/* {user.map((client) => (
            
            <Col span={12}>
                {}
              <UserCard name={client.name} working={client.work}/>
            </Col>
          
        ))} */}
        <Col span={24}>
          <h2>Manager</h2>
          <Row gutter={[24, 24]}>
            {user
              .filter((work) => work.work === "Manager")
              .map((filterWork,key) => (
                <Col span={12}>
                  <UserCard key={key} name={filterWork.name} working={filterWork.work} />
                </Col>
              ))}
          </Row>
        </Col>
        <Col span={24}>
          <h2>Developer</h2>
          <Row gutter={[24, 24]}>
            {user
              .filter((work) => work.work === "Developer")
              .map((filterWork,key) => (
                <Col span={12}>
                  <UserCard key={key} name={filterWork.name} working={filterWork.work} />
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Users;
