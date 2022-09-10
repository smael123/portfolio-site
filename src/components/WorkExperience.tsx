import { FC } from "react";
import { WorkExperience as WorkExperienceModel } from "../models/WorkExperience";
import { WorkResponsibility } from "../models/WorkResponsibility";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric"
})

interface WorkExperienceProps {
    workExperience: WorkExperienceModel
}

export const WorkExperience:FC<WorkExperienceProps> = ({ workExperience }) => {
    const { companyName, city, state, startDate, endDate, title, responsibilities } = workExperience

    const orderedResponsibilities : WorkResponsibility[] = responsibilities.sort((responsibilityA, responsibilitlyB) => responsibilityA.order - responsibilitlyB.order);

    return (
        <>
            <h2>{companyName}</h2>
            <p><em>{title}</em></p>
            <p>{dateFormatter.format(startDate)} - {endDate ? dateFormatter.format(endDate) : "present"}</p>
            <p>{city}, {state}</p>
            <ul>
                {orderedResponsibilities.map(responsibility => <li key={responsibility.description}>{responsibility.description}</li>)}
            </ul>
        </>
    )
}