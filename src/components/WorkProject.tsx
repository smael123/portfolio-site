import { FC } from 'react';
import { WorkProject as WorkProjectObject } from '../models/WorkProject'
import { BasicImageLink } from '../models/BasicImageLink';
import { LinkList } from './LinkList';
import { ImageGallery } from './ImageGallery';

export const WorkProject:FC<WorkProjectObject> = ({ title, description, tech, imageLinks, projectLinks, companyName }) => {
    const orderedTech = tech.sort((projectTechA, projectTechB) => projectTechA.order - projectTechB.order)
    const orderedImageLinks : BasicImageLink[] = imageLinks?.sort((imageLinkA, imageLinkB) => imageLinkA.order - imageLinkB.order) ?? [];
    const orderedProjectLinks = projectLinks?.sort((projectLinkA, projectLinkB) => projectLinkA.order - projectLinkB.order) ?? [];
    
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
           <ImageGallery mainCaption={<h3>Image Gallery</h3>} imageLinks={orderedImageLinks} />
        }
        {(orderedProjectLinks.length > 0) && 
            <>
                <h3>Links</h3>
                <LinkList hyperlinks={orderedProjectLinks} />
            </>
        }
       </>
    )
}