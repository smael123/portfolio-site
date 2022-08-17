import { DatabaseDto } from "./DatabaseDto";

export interface ProjectTech extends DatabaseDto {
    name : string;
    order: number;
    //no point in putting projectId since you would not see this by itself
}