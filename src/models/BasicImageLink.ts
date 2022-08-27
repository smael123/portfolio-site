import { DatabaseDto } from "./DatabaseDto";

export interface BasicImageLink extends DatabaseDto {
    src : string;
    order: number;
    alt: string;
    //desired width maybe?
}