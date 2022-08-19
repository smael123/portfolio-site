import { FC } from "react";
import { WorkExperience as WorkExperienceObject } from "../models/WorkExperience";
import { WorkResponsibility } from "../models/WorkResponsibility";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric"
})

export const WorkExperience:FC<WorkExperienceObject> = ({ companyName, city, state, startDate, endDate, title, responsibilities }) => {
    const orderedResponsibilities : WorkResponsibility[] = responsibilities.sort((responsibilityA, responsibilitlyB) => responsibilityA.order - responsibilitlyB.order);

    return (
        <>
            <h2>{companyName}</h2>
            {city}, {state} {dateFormatter.format(startDate)} - {endDate ? dateFormatter.format(endDate) : "present"}
            <p><em>{title}</em></p>
            <ul>
                {orderedResponsibilities.map(responsibility => <li key={responsibility.id}>{responsibility.description}</li>)}
            </ul>
        </>
    )
}