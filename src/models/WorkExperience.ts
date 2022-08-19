import { DatabaseDto } from "./DatabaseDto";
import { WorkResponsibility } from "./WorkResponsibility";

export interface WorkExperience extends DatabaseDto {
    companyName : string;
    city : string;
    state : string;
    startDate : Date;
    endDate? : Date;
    title: string;
    responsibilities : WorkResponsibility[];
}