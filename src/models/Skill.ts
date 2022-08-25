import { DatabaseDto } from "./DatabaseDto";

export interface Skill extends DatabaseDto {
    name : string;
    order: number;
}