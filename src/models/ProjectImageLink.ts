import { DatabaseDto } from "./DatabaseDto";

export interface ProjectImageLink extends DatabaseDto {
    href : string;
    order: number;
    //desired width maybe?
}