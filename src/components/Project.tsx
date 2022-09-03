import { FC } from 'react';
import { Project as WorkProjectModel } from '../models/Project'
import { BasicImageLink } from '../models/BasicImageLink';
import { ImageGallery } from './ImageGallery';
import { CardLinkList } from './CardLinkList';

interface ProjectProps {
    project : WorkProjectModel
}

export const Project:FC<ProjectProps> = ({ project: workProject }) => {
    const { title, description, tech, imageLinks, projectLinks, companyName } = workProject;

    const orderedTech = tech.sort((projectTechA, projectTechB) => projectTechA.order - projectTechB.order)
    const orderedImageLinks : BasicImageLink[] = imageLinks?.sort((imageLinkA, imageLinkB) => imageLinkA.order - imageLinkB.order) ?? [];
    const orderedProjectLinks = projectLinks?.sort((projectLinkA, projectLinkB) => projectLinkA.order - projectLinkB.order) ?? [];

    return (
       <div className='card'>
        <div className='card-body'>
            <h3 className='card-title'>{title}</h3>
            <div className='card-text'>
                {companyName && <p><em>{companyName}</em></p>}
                <p>{description}</p>
                <h4>Tech</h4>
                <ul>
                    {orderedTech.map(projectTech => <li key={projectTech.name}>{projectTech.name}</li>)}
                </ul>
                {orderedImageLinks.length > 0 && 
                    <ImageGallery imageLinks={orderedImageLinks} />
                }
                {(orderedProjectLinks.length > 0) && 
                    <CardLinkList hyperlinks={orderedProjectLinks} />
                }
            </div>
        </div>
       </div>
    )
}