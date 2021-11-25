import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import "../css/ProjectCard.css";
import LinearProgressWithLabel from "./LinearProgressWithLabel";
import { ProjectCardProps } from "../interfaces";

const ProjectCard = ({
  projectName,
  description,
  projectManager,
  members,
  progressBar,
  creationDate,
}: ProjectCardProps) => {
  return (
    <>
      <div className="card">
        <div className="card-top">
          <p className="project-title">{projectName}</p>
          <Button
            disableElevation
            variant="contained"
            size="small"
            color="primary"
          >
            <AddIcon />
          </Button>
        </div>
        <div className="card-description">
          <div>
            <p className="text-title">DESCRIPTION</p>
            <p className="text">{description}</p>
          </div>
          <div>
            <p className="text-title">PROJECT MANAGER</p>
            <p className="text">{projectManager}</p>
          </div>
          <div>
            <p className="text-title">MEMBERS</p>
            {members.map((member, index) => {
              return (
                <li key={index} className="text">
                  {member}
                </li>
              );
            })}
          </div>
        </div>
        <div className="card-bottom">
          <Box sx={{ width: "100%" }}>
            <LinearProgressWithLabel value={progressBar} />
          </Box>
          <p className="card-bottom-text">{creationDate}</p>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
