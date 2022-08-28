import { DatabaseDto } from "./DatabaseDto";
import { EducationCourse } from "./EducationCourse";

export interface EducationExperience extends DatabaseDto {
    schoolName: string,
    city: string,
    state: string,
    degree: string,
    yearOfGraduation: number,
    courses?: EducationCourse[]
}