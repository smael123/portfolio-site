import { DatabaseDto } from "./DatabaseDto";
import { ProjectImageLink } from "./ProjectImageLink";
import { ProjectTech } from "./ProjectTech";

export interface Project extends DatabaseDto {
    title : string;
    description : string;
    tech : ProjectTech[];
    imageLinks: ProjectImageLink[];
    sourceCodeLink? : string;
    demoLink? : string;
}