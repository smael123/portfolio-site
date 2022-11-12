import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

//service imports
import { PortfolioService } from "../services/PortfolioService";

//db model imports
import { Project as ProjectModel } from "../models/Project";
import { WorkExperience as WorkExperienceModel } from "../models/WorkExperience";
import { EducationExperience as EducationExperienceModel } from "../models/EducationExperience";
import { SkillGroup } from "../models/SkillGroup";
import { PortfolioPersonProfile } from "../models/PortfolioPersonProfile";

//view model imports
import { SectionNavDictionary } from "../component-models/SectionNavDictionary";

//component imports
import { Project as ProjectComponent } from "./Project"
import { WorkExperience as WorkExperienceComponent } from "./WorkExperience";
import { SkillTree } from "./SkillTree";
import { Introduction } from "./Introduction";
import { EducationExperience as EducationExperienceComponent } from "./EducationExperience";
import { SectionNavs } from "./SectionNavs";

//css imports
import '../index.css'
import { IntroductionPlaceholder } from "./placeholders/IntroductionPlaceholder";
import { EducationExperiencePlaceHolder } from "./placeholders/EducationExperiencePlaceholder";
import { SkillTreePlaceholder } from "./placeholders/SkillTreePlaceholder";
import { WorkExperiencePlaceholder } from "./placeholders/WorkExperiencePlaceholder";
import { ProjectPlaceholder } from "./placeholders/ProjectPlaceholder";

const containerPadding = 15; //may not need this anymore

function App() : JSX.Element {
  //refs
  const introductionColumnRef = useRef<HTMLDivElement>(null);

  const skillsSectionRef = useRef<HTMLElement>(null);
  const experienceSectionRef = useRef<HTMLElement>(null);
  const educationSectionRef = useRef<HTMLElement>(null);
  const workProjectsSectionRef = useRef<HTMLElement>(null);
  const personalProjectsSectionRef = useRef<HTMLElement>(null);

  //states
  const [projects, setProjects] = useState<ProjectModel[] | null>(null);
  const [workExperiences, setWorkExperiences] = useState<WorkExperienceModel[] | null>(null);
  const [skillGroups, setSkillGroups] = useState<SkillGroup[] | null>(null);
  const [workProjects, setWorkProjects] = useState<ProjectModel[] | null>(null);
  const [portfolioPersonProfile, setPortfolioPersonProfile] = useState<PortfolioPersonProfile>({
      id: "-1",
      name: "LOADING",
      careerTitle: "LOADING",
      profileLinks: []
  });
  const [educationExperiences, setEducationExperiences] = useState<EducationExperienceModel[] | null>(null);
  
  const [sectionNavs, setSectionNavs] = useState<SectionNavDictionary>({
    "skills" : {
      htmlIdName: "skills",
      displayName: "Skills",
      active: true,
      ref: skillsSectionRef
    },
    "education": {
      htmlIdName: "education",
      displayName: "Education",
      active: false,
      ref: educationSectionRef
    },
    "experience": {
      htmlIdName: "experience",
      displayName: "Experience",
      active: false,
      ref: experienceSectionRef
    },
    "work-projects": {
      htmlIdName: "work-projects",
      displayName: "Work Projects",
      active: false,
      ref: workProjectsSectionRef
    },
    "personal-projects": {
      htmlIdName: "personal-projects",
      displayName: "Personal Projects",
      active: false,
      ref: personalProjectsSectionRef
    },
  });

  //set to negative 1 so that the scrollMarginTop dependency effect is called on pageload even when window width is greater than 1200
  const [scrollMarginTop, setScrollMarginTop] = useState<number>(-1);

  //event handler functions
  const setActiveSectionNav = useCallback(() => {
    const sectionNavsCopy = {...sectionNavs};

    const windowPosition = window.scrollY + scrollMarginTop;

    //find last div whos divPosition is greater than the window position
    let sectionNavKey : string = "skills";

    for (const [key, sectionNav] of Object.entries(sectionNavsCopy)) {
      const divPosition = (sectionNav.ref?.current?.offsetTop ?? 0);

      if (windowPosition < divPosition) {
        break;
      }

      sectionNavKey = key;
    }

    for (const [key, sectionNav] of Object.entries(sectionNavsCopy)) {
      sectionNav.active = key === sectionNavKey;
    }

    setSectionNavs(sectionNavsCopy);
  }, [scrollMarginTop, sectionNavs])

  const calculateAndSetScrollMarginTop = useCallback(() => {
    //determine offset from sticky introduction container
    let introHeight = 0;

    if (window.innerWidth < 1200) {
      const divElement = introductionColumnRef.current;

      if (divElement) {
        const { clientHeight } = divElement;
        introHeight = clientHeight;
      }
    }

    console.log("introHeight: ", introHeight)
    setScrollMarginTop(introHeight);
  }, [])
  
  //Effects
  useEffect(() => {
    (async () => {
      try {
        //load data from service
        const portfolioService = new PortfolioService();

        const foundProjects = await portfolioService.getProjects();

        setProjects(foundProjects);

        const unorderedWorkExperiences = await portfolioService.getWorkExperiences();
        console.log(unorderedWorkExperiences);
        const orderedWorkExperiences = unorderedWorkExperiences.sort((workExperienceA, workExperienceB) => workExperienceB.startDate.getTime() - workExperienceA.startDate.getTime());

        setWorkExperiences(orderedWorkExperiences);

        const foundSkillGroups = await portfolioService.getSkillGroups();

        setSkillGroups(foundSkillGroups);

        const foundWorkProjects = await portfolioService.getWorkProjects();

        setWorkProjects(foundWorkProjects);

        const foundPersonProfile = await portfolioService.getPortfolioPersonProfile();

        setPortfolioPersonProfile(foundPersonProfile);

        const unorderedEducationExperiences = await portfolioService.getEducationExperience();
        const orderedEducationExperiences = unorderedEducationExperiences.sort((educationExperienceA, educationExperienceB) => educationExperienceB.yearOfGraduation - educationExperienceA.yearOfGraduation);

        setEducationExperiences(orderedEducationExperiences);
      }
      catch (ex : any) {
        console.log(ex.message)
      }
    })();
  }, []);

  useLayoutEffect(() => {
    //needed to get the correct offsetHeight
    //https://github.com/facebook/react/issues/13108#issuecomment-607857099
    setTimeout(() => {
      calculateAndSetScrollMarginTop();

      window.addEventListener("resize", calculateAndSetScrollMarginTop);
    }, 1);

    return () => {
       window.removeEventListener("resize", calculateAndSetScrollMarginTop);
    };
  }, [calculateAndSetScrollMarginTop])

  useEffect(() => {
    //force event to use new state
    window.removeEventListener("scroll", setActiveSectionNav);
    window.addEventListener("scroll", setActiveSectionNav);

    return () => {
      window.removeEventListener("scroll", setActiveSectionNav);
   };
  }, [scrollMarginTop, setActiveSectionNav])

  return (
      <div className="row">
        <div className="col-xl-2 intro-column" ref={introductionColumnRef}>
          <div className="container intro-container" style={{padding: containerPadding}}>
            <section id="intro">
              {portfolioPersonProfile.id === '-1' ? 
                <IntroductionPlaceholder /> : 
                <Introduction portfolioPersonProfile={portfolioPersonProfile} />}
            </section>
            <hr />
            <SectionNavs sectionNavDictionary={sectionNavs} />
          </div>
        </div>
        <div className="col">
          <div className="container" style={{padding: containerPadding}}>
            <section id="skills" className="portfolio-section" ref={skillsSectionRef} style={{scrollMarginTop: scrollMarginTop}}>
              <h1>Skills</h1>
              {skillGroups ? <SkillTree skillGroups={skillGroups} /> : <SkillTreePlaceholder />}
            </section>
            <section id="education" className="portfolio-section" ref={educationSectionRef} style={{scrollMarginTop: scrollMarginTop}}>
              <h1>Education</h1>
              {educationExperiences ? 
                educationExperiences.map(educationExperience => 
                  <EducationExperienceComponent key={educationExperience.id} educationExperience={educationExperience} />
                ) : 
                  <div className="row">
                    <div className="col-md-6 my-2"><EducationExperiencePlaceHolder /></div>
                    <div className="col-md-6 my-2"><EducationExperiencePlaceHolder /></div>
                  </div>
              }
            </section>
            <section id="experience" className="portfolio-section" ref={experienceSectionRef} style={{scrollMarginTop: scrollMarginTop}}>
              <h1>Work Experience</h1>
              {workExperiences ? 
                workExperiences.map(workExperience => 
                  <WorkExperienceComponent key={workExperience.id} workExperience={workExperience} />
                ) : 
                  <div style={{maxWidth: 800}}>
                    <WorkExperiencePlaceholder />
                  </div>
              }
            </section>
            <section id="work-projects" className="portfolio-section" ref={workProjectsSectionRef} style={{scrollMarginTop: scrollMarginTop}}>
              <h1>Work Projects</h1>
              <div className="row">
                {workProjects ?
                  workProjects.map(project => 
                    <div key={project.id} className="col-md-6 my-2">
                      <ProjectComponent project={project} />
                    </div>
                  ) :
                    <>
                      <div className="col-md-6 my-2">
                        <ProjectPlaceholder/>
                      </div>
                      <div className="col-md-6 my-2">
                        <ProjectPlaceholder/>
                      </div>
                      <div className="col-md-6 my-2">
                        <ProjectPlaceholder/>
                      </div>
                      <div className="col-md-6 my-2">
                        <ProjectPlaceholder/>
                      </div>
                    </>
                }
              </div>
            </section>
            <section id="personal-projects" className="portfolio-section" ref={personalProjectsSectionRef} style={{scrollMarginTop: scrollMarginTop}}>
              <h1>Personal Projects</h1>
              <div className="row">
                {projects ? projects.map(project => 
                  <div key={project.id} className="col-md-6 my-2">
                    <ProjectComponent project={project}/>
                  </div>
                ) : 
                  <>
                    <div className="col-md-6 my-2">
                      <ProjectPlaceholder/>
                    </div>
                    <div className="col-md-6 my-2">
                      <ProjectPlaceholder/>
                    </div>
                    <div className="col-md-6 my-2">
                      <ProjectPlaceholder/>
                    </div>
                    <div className="col-md-6 my-2">
                      <ProjectPlaceholder/>
                    </div>
                  </>
                }
              </div>
            </section>
            <div style={{textAlign: "center"}}>
              {portfolioPersonProfile.pictureSrc && 
                <img className='portfolio-picture portfolio-picture-bottom' src={portfolioPersonProfile.pictureSrc} alt="My portrait." />}
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
