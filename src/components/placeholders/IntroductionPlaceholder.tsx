import { FC } from 'react';

export const IntroductionPlaceholder:FC = () => {
    return (
        <>
            <h1 className='placeholder-glow'>
                <span className="col-12 placeholder"></span>
                <span className="col-12 placeholder"></span>
                <span className="col-12 placeholder"></span>
            </h1>
            <p className="placeholder-glow">
                <span className="col-12 placeholder"></span>
                <span className="col-12 placeholder"></span>
                <span className="col-12 placeholder"></span>
            </p>
            <p className="placeholder-glow">
                <span className="col-12 placeholder"></span>
            </p>
        </>
    )
}