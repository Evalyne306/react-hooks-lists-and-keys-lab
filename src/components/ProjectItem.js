import React from "react";
import user from "../data/user.js";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {technologies.map((data) => (
          <span key={data}> {data}</span>
        ))}
      </div>
    </div>
  );
}


export default ProjectItem;
