import { FC } from 'react';
import { Project as ProjectObject } from '../models/Project'
import { ProjectImageLink } from '../models/ProjectImageLink';

export const Project:FC<ProjectObject> = ({ title, description, tech, imageLinks, sourceCodeLink, demoLink }) => {
    const orderedTech = tech.sort((projectTechA, projectTechB) => projectTechA.order - projectTechB.order)
    const orderedImageLinks : ProjectImageLink[] = imageLinks?.sort((imageLinkA, imageLinkB) => imageLinkA.order - imageLinkB.order) ?? [];
    
    return (
       <>
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>Tech</h3>
        {orderedTech.map(projectTech => <li key={projectTech.id}>{projectTech.name}</li>)}
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