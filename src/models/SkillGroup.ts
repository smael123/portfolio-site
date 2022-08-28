import { DatabaseDto } from "./DatabaseDto";
import { Skill } from "./Skill";

export interface SkillGroup extends DatabaseDto {
    name : string;
    order: number;
    skills: Skill[];
}