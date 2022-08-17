import { DatabaseDto } from "./DatabaseDto";

export interface SkillType extends DatabaseDto {
    name : string;
    order: number;
}