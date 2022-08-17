import { DatabaseDto } from "./DatabaseDto";

export interface WorkResponsibility extends DatabaseDto {
    description : string;
    order: number;
}