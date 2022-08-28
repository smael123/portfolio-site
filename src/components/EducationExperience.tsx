import { FC } from 'react';
import { EducationExperience as EducationExperienceObject } from '../models/EducationExperience'

export const EducationExperience:FC<EducationExperienceObject> = ({ schoolName, city, state, degree, courses }) => {
    return (
        <>
            <p>{schoolName}, {city}, {state}</p>
            <p><em>{degree}</em></p>
            <ul>
                {courses && courses.sort((courseA, courseB) => courseA.order = courseB.order).map(course => <li key={course.name}>{course.name}</li> )}
            </ul>
        </>
    )
}