import { FC } from 'react';
import { PortfolioPersonProfile } from '../models/PortfolioPersonProfile';
import { LinkList } from './LinkList';

interface IntroductionProps {
    portfolioPersonProfile: PortfolioPersonProfile    
}

export const Introduction:FC<IntroductionProps> = ({ portfolioPersonProfile }) => {
    const { name, careerTitle, pictureSrc, profileLinks } = portfolioPersonProfile;

    return (
        <>
            {pictureSrc && <img className='portfolio-picture portfolio-picture-top' src={pictureSrc} alt="My portrait." />}
            <h1>Ismael Almaguer's Portfolio</h1>
            <p>My name is {name} and I am a {careerTitle}.</p>
            <LinkList hyperlinks={profileLinks.sort((profileLinkA, profileLinkB) => profileLinkA.order - profileLinkB.order)} />
        </>
    )
}