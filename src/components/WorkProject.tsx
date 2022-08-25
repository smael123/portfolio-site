import { FC } from 'react';
import { WorkProject as WorkProjectObject } from '../models/WorkProject'
import { ProjectImageLink } from '../models/ProjectImageLink';

export const WorkProject:FC<WorkProjectObject> = ({ title, description, tech, imageLinks, sourceCodeLink, demoLink, companyName }) => {
    const orderedTech = tech.sort((projectTechA, projectTechB) => projectTechA.order - projectTechB.order)
    const orderedImageLinks : ProjectImageLink[] = imageLinks?.sort((imageLinkA, imageLinkB) => imageLinkA.order - imageLinkB.order) ?? [];
    
    //this is a copy and paste of Project.tsx other than the compnayName line, fix this later

    return (
       <>
        <h2>{title}</h2>
        Company: {companyName}
        <p>{description}</p>
        <h3>Tech</h3>
        <ul>
            {orderedTech.map(projectTech => <li key={projectTech.id}>{projectTech.name}</li>)}
        </ul>
        {orderedImageLinks.length > 0 && 
            <>
                <h3>Image Gallery</h3>
                <div className='project-gallery'>
                    {orderedImageLinks.map(imageLink => <img key={imageLink.id} alt={imageLink.alt} src={imageLink.src} />)}
                </div>
            </>
        }
        {(sourceCodeLink || demoLink) && 
            <>
                <h3>Links</h3>
                {sourceCodeLink && <a rel="noopener noreferrer" target="_blank" href={sourceCodeLink}>Source Code</a>}{sourceCodeLink && demoLink && " | "}{demoLink && <a rel="noopener noreferrer" href={demoLink}>Demo</a>}
            </>
        }
       </>
    )
}