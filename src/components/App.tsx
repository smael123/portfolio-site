import { useEffect, useState } from "react";
import { ProjectService } from "../services/ProjectService";
import { Project as ProjectObject } from "../models/Project";
import { Project as ProjectComponent } from "./Project"

function App() : JSX.Element {
  const [projects, setProjects] = useState<ProjectObject[]>([]);

  useEffect(() => {
    const projectService = new ProjectService();

    setProjects(projectService.getProjects());
  }, [])

  return (
    <div>
      <h1>Projects</h1>
      {projects.map(project => <ProjectComponent key={project.id} {...project} />)}
    </div>
  );
}

export default App;
