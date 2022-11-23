import { FC } from 'react';
import { SectionNavDictionary } from '../component-models/SectionNavDictionary';

interface SectionNavsProps {
    sectionNavDictionary: SectionNavDictionary
}

export const SectionNavs:FC<SectionNavsProps> = ({ sectionNavDictionary }) => {
    
    return (
        <nav className="nav nav-pills section-navs">
            {Object.values(sectionNavDictionary).map(sectionNav => <a key={sectionNav.htmlIdName} className={"nav-link" + (sectionNav.active ? " active" : "")} href={`#${sectionNav.htmlIdName}`}>{sectionNav.displayName}</a>)}
        </nav>
    )
}