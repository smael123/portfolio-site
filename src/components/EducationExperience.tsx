import { FC } from 'react';
import { EducationExperience as EducationExperienceModel } from '../models/EducationExperience'

interface EducationExperienceProps {
    educationExperience: EducationExperienceModel
}

export const EducationExperience:FC<EducationExperienceProps> = ({ educationExperience }) => {
    const { schoolName, city, state, degree, courses } = educationExperience;

    return (
        <div>
            <p>{schoolName}, {city}, {state}</p>
            <p><em>{degree}</em></p>
            <ul>
                {courses && courses.sort((courseA, courseB) => courseA.order = courseB.order).map(course => <li key={course.name}>{course.name}</li> )}
            </ul>
        </div>
    )
}