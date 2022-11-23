import { EducationExperience } from "../models/EducationExperience";
import { PortfolioPersonProfile } from "../models/PortfolioPersonProfile";
import { Project } from "../models/Project";
import { SkillGroup } from "../models/SkillGroup";
import { WorkExperience } from "../models/WorkExperience";

export class PortfolioService {
    private readonly _defaultFetchOptions;

    constructor() {
        if (!process.env.REACT_APP_BASE_API_URL) {
            throw Error("Process environment REACT_APP_BASE_API_URL is undefined");
        }

        this._defaultFetchOptions = {
            mode: "cors" as RequestMode,
            headers: { 'Access-Control-Allow-Origin': process.env.REACT_APP_BASE_API_URL  }
        }
    }

    async getProjects() : Promise<Project[]> {
        const response = await fetch(`${process.env.REACT_APP_BASE_API_URL}Project?ownerId=${process.env.REACT_APP_OWNER_ID}&projectType=personal`, {
            method: "GET",
            ...this._defaultFetchOptions
        })

        if (!response.ok) {
            throw new Error(`Error Code: ${response.status} Message: ${response.statusText}`)
        }

        return response.json();
    }

    async getWorkExperiences() : Promise<WorkExperience[]> {
        const response = await fetch(`${process.env.REACT_APP_BASE_API_URL}WorkExperience?ownerId=${process.env.REACT_APP_OWNER_ID}`, {
            method: "GET",
            ...this._defaultFetchOptions
        })

        if (!response.ok) {
            throw new Error(`Error Code: ${response.status} Message: ${response.statusText}`)
        }

        const jsonResponse : WorkExperience[] = await response.json();

        jsonResponse.forEach(workExperience => {
            workExperience.startDate = new Date(workExperience.startDateStr);
            workExperience.endDate = !workExperience.endDateStr ? null : new Date(workExperience.endDateStr);
        })

        return jsonResponse;
    }

    async getSkillGroups() : Promise<SkillGroup[]> {      
        const response = await fetch(`${process.env.REACT_APP_BASE_API_URL}SkillGroup?ownerId=${process.env.REACT_APP_OWNER_ID}`, {
            method: "GET",
            ...this._defaultFetchOptions
        })

        if (!response.ok) {
            throw new Error(`Error Code: ${response.status} Message: ${response.statusText}`)
        }

        return response.json();
    }

    async getWorkProjects() : Promise<Project[]> {
        const response = await fetch(`${process.env.REACT_APP_BASE_API_URL}Project?ownerId=${process.env.REACT_APP_OWNER_ID}&projectType=personal`, {
            method: "GET",
            ...this._defaultFetchOptions
        })

        if (!response.ok) {
            throw new Error(`Error Code: ${response.status} Message: ${response.statusText}`)
        }

        return response.json();        
    }

    async getPortfolioPersonProfile() : Promise<PortfolioPersonProfile> {
        const response = await fetch(`${process.env.REACT_APP_BASE_API_URL}PersonProfile?ownerId=${process.env.REACT_APP_OWNER_ID}`, {
            method: "GET",
            ...this._defaultFetchOptions
        })

        if (!response.ok) {
            throw new Error(`Error Code: ${response.status} Message: ${response.statusText}`)
        }

        return response.json();
    }

    async getEducationExperience() : Promise<EducationExperience[]> {
        const response = await fetch(`${process.env.REACT_APP_BASE_API_URL}EducationExperience?ownerId=${process.env.REACT_APP_OWNER_ID}`, {
            method: "GET",
            ...this._defaultFetchOptions
        })

        if (!response.ok) {
            throw new Error(`Error Code: ${response.status} Message: ${response.statusText}`)
        }

        return response.json();
    }
}