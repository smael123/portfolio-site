import { DatabaseDto } from "./DatabaseDto";

export interface ProjectImageLink extends DatabaseDto {
    src : string;
    order: number;
    alt: string;
    //desired width maybe?
}