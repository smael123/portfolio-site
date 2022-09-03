import { BasicHyperLink } from "./BasicHyperlink";
import { DatabaseDto } from "./DatabaseDto";
import { BasicImageLink } from "./BasicImageLink";
import { ProjectTech } from "./ProjectTech";

export interface Project extends DatabaseDto {
    title : string;
    description : string;
    tech : ProjectTech[];
    imageLinks?: BasicImageLink[];
    projectLinks?: BasicHyperLink[];
    companyName?: string
}