import { useEffect, useState } from "react";
import { ProjectService } from "../services/ProjectService";
import { Project as ProjectObject } from "../models/Project";
import { Project as ProjectComponent } from "./Project"
import { WorkExperience as WorkExperienceObject } from "../models/WorkExperience";
import { WorkExperience as WorkExperienceComponent } from "./WorkExperience";

function App() : JSX.Element {
  const [projects, setProjects] = useState<ProjectObject[]>([]);
  const [workExperiences, setWorkExperiences] = useState<WorkExperienceObject[]>([])

  useEffect(() => {
    const projectService = new ProjectService();

    const unorderedWorkExperiences = projectService.getWorkExperiences();
    const orderedWorkExperiences = unorderedWorkExperiences.sort((workExperienceA, workExperienceB) => workExperienceB.startDate.getTime() - workExperienceA.startDate.getTime());

    setProjects(projectService.getProjects());
    setWorkExperiences(orderedWorkExperiences);
  }, [])

  return (
    <div>
      <h1>Projects</h1>
      {projects.map(project => <ProjectComponent key={project.id} {...project} />)}
      <h1>Work Experience</h1>
      {workExperiences.map(workExperience => <WorkExperienceComponent key={workExperience.id} {...workExperience} />)}
    </div>
  );
}

export default App;
