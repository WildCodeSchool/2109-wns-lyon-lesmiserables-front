import "../css/ProjectCard.css";
import ProgressBar from "./ProgressBar";

const ProjectCard = () => {
  return (
    <>
      <h1>Card</h1>
      <div className="card">
        <div className="card-top">
          <p className="project-title">Project name</p>
          <button className="btn-project"> + </button>
        </div>
        <div className="card-description">
          <p>DESCRIPTION</p>
          <p>PROJECT MANAGER</p>
          <p>MEMBERS</p>
        </div>
        <div className="card-bottom">
          <ProgressBar />
          <p>14/09/2021</p>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
