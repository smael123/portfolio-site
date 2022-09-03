import { useEffect, useState } from "react";
import { PortfolioService } from "../services/PortfolioService";
import { Project as ProjectModel } from "../models/Project";
import { Project as ProjectComponent } from "./Project"
import { WorkExperience as WorkExperienceModel } from "../models/WorkExperience";
import { WorkExperience as WorkExperienceComponent } from "./WorkExperience";
import { SkillGroup } from "../models/SkillGroup";
import { SkillTree } from "./SkillTree";
import { Introduction } from "./Introduction";
import { PortfolioPersonProfile } from "../models/PortfolioPersonProfile";
import { EducationExperience as EducationExperienceModel } from "../models/EducationExperience";
import { EducationExperience as EducationExperienceComponent } from "./EducationExperience";

import '../index.css'

function App() : JSX.Element {
  const [projects, setProjects] = useState<ProjectModel[]>([]);
  const [workExperiences, setWorkExperiences] = useState<WorkExperienceModel[]>([]);
  const [skillGroups, setSkillGroups] = useState<SkillGroup[]>([]);
  const [workProjects, setWorkProjects] = useState<ProjectModel[]>([]);
  const [portfolioPersonProfile, setPortfolioPersonProfile] = useState<PortfolioPersonProfile>({
      id: 1,
      name: "LOADING",
      careerTitle: "LOADING",
      profileLinks: []
  })
  const [educationExperiences, setEducationExperiences] = useState<EducationExperienceModel[]>([])

  useEffect(() => {
    const portfolioService = new PortfolioService();

    const unorderedWorkExperiences = portfolioService.getWorkExperiences();
    const orderedWorkExperiences = unorderedWorkExperiences.sort((workExperienceA, workExperienceB) => workExperienceB.startDate.getTime() - workExperienceA.startDate.getTime());
    
    const unorderedEducationExperiences = portfolioService.getEducationExperience();
    const orderedEducationExperiences = unorderedEducationExperiences.sort((educationExperienceA, educationExperienceB) => educationExperienceB.yearOfGraduation - educationExperienceA.yearOfGraduation);

    setProjects(portfolioService.getProjects());
    setWorkExperiences(orderedWorkExperiences);
    setSkillGroups(portfolioService.getSkillGroups());
    setWorkProjects(portfolioService.getWorkProjects());
    setPortfolioPersonProfile(portfolioService.getPortfolioPersonProfile());
    setEducationExperiences(orderedEducationExperiences);
  }, [])

  return (
    <>
      <div className="row">
        <div className="col-lg-2">
          <div className="container sticky-container">
            <section id="intro">
              <Introduction portfolioPersonProfile={portfolioPersonProfile} />
            </section>
          </div>
        </div>
        <div className="col">
          <div className="container">
            <section id="skills">
              <h1>Skills</h1>
              <SkillTree skillGroups={skillGroups} />
            </section>
            <section id="education">
              <h1>Education</h1>
              {educationExperiences.map(educationExperience => <EducationExperienceComponent key={educationExperience.id} educationExperience={educationExperience} />)}
            </section>
            <section id="experience">
              <h1>Work Experience</h1>
              {workExperiences.map(workExperience => <WorkExperienceComponent key={workExperience.id} workExperience={workExperience} />)}
            </section>
            <section id="work-projects">
              <h1>Work Projects</h1>
              <div className="row">
                {workProjects.map(project => <div key={project.id} className="col-md-6 my-2"><ProjectComponent project={project} /></div>)}
              </div>
            </section>
            <section id="projects">
              <h1>Personal Projects</h1>
              <div className="row">
                {projects.map(project => <div key={project.id} className="col-md-6 my-2"><ProjectComponent project={project}/></div>)}
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
