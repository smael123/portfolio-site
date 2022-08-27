import { FC } from 'react';
import { Project as ProjectObject } from '../models/Project'
import { BasicImageLink } from '../models/BasicImageLink';
import { LinkList } from './LinkList';
import { ImageGallery } from './ImageGallery';

export const Project:FC<ProjectObject> = ({ title, description, tech, imageLinks, projectLinks }) => {
    const orderedTech = tech.sort((projectTechA, projectTechB) => projectTechA.order - projectTechB.order)
    const orderedImageLinks : BasicImageLink[] = imageLinks?.sort((imageLinkA, imageLinkB) => imageLinkA.order - imageLinkB.order) ?? [];
    const orderedProjectLinks = projectLinks?.sort((projectLinkA, projectLinkB) => projectLinkA.order - projectLinkB.order) ?? [];
    
    return (
       <>
        <h2>{title}</h2>
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