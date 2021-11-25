import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ProjectCard from "../components/ProjectCard";
import "../css/ProjectPage.css";
import { randomData } from "../randomData";

const ProjectPage = (): JSX.Element => {
  return (
    <div className="projects-container">
      <Box
        sx={{
          flexDirection: "row-reverse",
          justifyContent: "flex-end",
          p: 1,
          m: 1,
          borderRadius: 1,
          textAlign: "end",
          fontSize: "1rem",
          fontWeight: "700",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>PROJECTS</h1>
        <Button variant="contained">ADD PROJECT</Button>
      </Box>
      <div className="cards-grid">
        {randomData.map((data, index) => {
          return (
            <ProjectCard
              key={index}
              projectName={data.projectName}
              description={data.description}
              projectManager={data.projectManager}
              members={data.members}
              progressBar={data.progressBar}
              creationDate={data.creationDate}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectPage;
