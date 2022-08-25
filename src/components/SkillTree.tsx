import { FC } from 'react';
import { SkillGroup } from '../models/SkillGroup';
import { SkillBranch } from './SkillBranch';

interface SkillTreeProps {
    skillGroups : SkillGroup[]
}

export const SkillTree:FC<SkillTreeProps> = ({ skillGroups }) => {
    const orderedSkillGroups = skillGroups.sort((skillGroupA, skillGroupB) => skillGroupA.order - skillGroupB.order)
    
    return (
       <>
        {orderedSkillGroups.map(skillGroup => <SkillBranch key={skillGroup.id} {...skillGroup} />)}
       </>
    )
}