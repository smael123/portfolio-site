import { useEffect, useState } from "react";
import { PortfolioService } from "../services/PortfolioService";
import { Project as ProjectObject } from "../models/Project";
import { Project as ProjectComponent } from "./Project"
import { WorkExperience as WorkExperienceObject } from "../models/WorkExperience";
import { WorkExperience as WorkExperienceComponent } from "./WorkExperience";
import { SkillGroup } from "../models/SkillGroup";
import { SkillTree } from "./SkillTree";

function App() : JSX.Element {
  const [projects, setProjects] = useState<ProjectObject[]>([]);
  const [workExperiences, setWorkExperiences] = useState<WorkExperienceObject[]>([]);
  const [skillGroups, setSkillGroups] = useState<SkillGroup[]>([]);

  useEffect(() => {
    const portfolioService = new PortfolioService();

    const unorderedWorkExperiences = portfolioService.getWorkExperiences();
    const orderedWorkExperiences = unorderedWorkExperiences.sort((workExperienceA, workExperienceB) => workExperienceB.startDate.getTime() - workExperienceA.startDate.getTime());

    setProjects(portfolioService.getProjects());
    setWorkExperiences(orderedWorkExperiences);
    setSkillGroups(portfolioService.getSkillGroups())
  }, [])

  return (
    <div>
      <h1>Skills</h1>
      <SkillTree skillGroups={skillGroups} />
      <h1>Projects</h1>
      {projects.map(project => <ProjectComponent key={project.id} {...project} />)}
      <h1>Work Experience</h1>
      {workExperiences.map(workExperience => <WorkExperienceComponent key={workExperience.id} {...workExperience} />)}
    </div>
  );
}

export default App;
