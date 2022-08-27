import { FC } from 'react';
import { PortfolioPersonProfile } from '../models/PortfolioPersonProfile';
import { LinkList } from './LinkList';

export const Introduction:FC<PortfolioPersonProfile> = ({ name, careerTitle, pictureSrc, profileLinks }) => {
    return (
        <>
            {pictureSrc && <img src={pictureSrc} alt="My portrait." />}
            <p>My name is {name} and I am a {careerTitle}.</p>
            <LinkList hyperlinks={profileLinks.sort((profileLinkA, profileLinkB) => profileLinkA.order - profileLinkB.order)} />
        </>
    )
}