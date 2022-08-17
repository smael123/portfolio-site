import { DatabaseDto } from "./DatabaseDto";
import { SkillType } from "./SkillType";

export interface Skill extends DatabaseDto {
    name : string;
    skillType: SkillType;
    order: number;
}