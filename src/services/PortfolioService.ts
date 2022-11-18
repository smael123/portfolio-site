import { EducationExperience } from "../models/EducationExperience";
import { PortfolioPersonProfile } from "../models/PortfolioPersonProfile";
import { Project } from "../models/Project";
import { SkillGroup } from "../models/SkillGroup";
import { WorkExperience } from "../models/WorkExperience";
import { AppConfig } from "../appConfigInterface";
import developmentAppConfig from '../appconfig-development';

export class PortfolioService {
    private readonly _appConfig : AppConfig
    private readonly _defaultFetchOptions;

    constructor() {
        this._appConfig = developmentAppConfig;
        this._defaultFetchOptions = {
            mode: "cors" as RequestMode,
            headers: { 'Access-Control-Allow-Origin': this._appConfig.baseApiUrl  }
        }
    }

    async getProjects() : Promise<Project[]> {
        const response = await fetch(`${this._appConfig.baseApiUrl}Project?ownerId=${this._appConfig.ownerId}&projectType=personal`, {
            method: "GET",
            ...this._defaultFetchOptions
        })

        if (!response.ok) {
            throw new Error(`Error Code: ${response.status} Message: ${response.statusText}`)
        }

        return response.json();
    }

    async getWorkExperiences() : Promise<WorkExperience[]> {
        const response = await fetch(`${this._appConfig.baseApiUrl}WorkExperience?ownerId=${this._appConfig.ownerId}`, {
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
        const response = await fetch(`${this._appConfig.baseApiUrl}SkillGroup?ownerId=${this._appConfig.ownerId}`, {
            method: "GET",
            ...this._defaultFetchOptions
        })

        if (!response.ok) {
            throw new Error(`Error Code: ${response.status} Message: ${response.statusText}`)
        }

        return response.json();
    }

    async getWorkProjects() : Promise<Project[]> {
        const response = await fetch(`${this._appConfig.baseApiUrl}Project?ownerId=${this._appConfig.ownerId}&projectType=personal`, {
            method: "GET",
            ...this._defaultFetchOptions
        })

        if (!response.ok) {
            throw new Error(`Error Code: ${response.status} Message: ${response.statusText}`)
        }

        return response.json();        
    }

    async getPortfolioPersonProfile() : Promise<PortfolioPersonProfile> {
        const response = await fetch(`${this._appConfig.baseApiUrl}PersonProfile?ownerId=${this._appConfig.ownerId}`, {
            method: "GET",
            ...this._defaultFetchOptions
        })

        if (!response.ok) {
            throw new Error(`Error Code: ${response.status} Message: ${response.statusText}`)
        }

        return response.json();
    }

    async getEducationExperience() : Promise<EducationExperience[]> {
        const response = await fetch(`${this._appConfig.baseApiUrl}EducationExperience?ownerId=${this._appConfig.ownerId}`, {
            method: "GET",
            ...this._defaultFetchOptions
        })

        if (!response.ok) {
            throw new Error(`Error Code: ${response.status} Message: ${response.statusText}`)
        }

        return response.json();
    }
}