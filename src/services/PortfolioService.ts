import { EducationExperience } from "../models/EducationExperience";
import { PortfolioPersonProfile } from "../models/PortfolioPersonProfile";
import { Project } from "../models/Project";
import { SkillGroup } from "../models/SkillGroup";
import { WorkExperience } from "../models/WorkExperience";

export class PortfolioService {
    private static readonly baseApiUrl = "https://localhost:7046/";
    private static readonly corsHeader = {
        'Access-Control-Allow-Origin': PortfolioService.baseApiUrl 
    }
    private static readonly defaultOptions = {
        mode: "cors" as RequestMode,
        headers: { ...PortfolioService.corsHeader }
    }

    private static readonly ownerId = 'ismael'

    async getProjects() : Promise<Project[]> {
        try {
            const response = await fetch(`${PortfolioService.baseApiUrl}Project?ownerId=ismael&projectType=personal`, {
                method: "GET",
                ...PortfolioService.defaultOptions
            })
    
            if (!response.ok) {
                throw new Error(`Error Code: ${response.status} Message: ${response.statusText}`)
            }

            return response.json();
        }
        catch (ex) {
            throw(ex);
        }
    }

    async getWorkExperiences() : Promise<WorkExperience[]> {
        try {
            const response = await fetch(`${PortfolioService.baseApiUrl}WorkExperience?ownerId=ismael`, {
                method: "GET",
                ...PortfolioService.defaultOptions
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
        catch (ex) {
            throw(ex);
        }
    }

    async getSkillGroups() : Promise<SkillGroup[]> {
        try {
            const response = await fetch(`${PortfolioService.baseApiUrl}SkillGroup?ownerId=ismael`, {
                method: "GET",
                ...PortfolioService.defaultOptions
            })
    
            if (!response.ok) {
                throw new Error(`Error Code: ${response.status} Message: ${response.statusText}`)
            }

            return response.json();
        }
        catch (ex) {
            throw(ex);
        }
    }

    async getWorkProjects() : Promise<Project[]> {
        try {
            const response = await fetch(`${PortfolioService.baseApiUrl}Project?ownerId=ismael&projectType=personal`, {
                method: "GET",
                ...PortfolioService.defaultOptions
            })
    
            if (!response.ok) {
                throw new Error(`Error Code: ${response.status} Message: ${response.statusText}`)
            }

            return response.json();
        }
        catch (ex) {
            throw(ex);
        }
    }

    async getPortfolioPersonProfile() : Promise<PortfolioPersonProfile> {
        try {
            const response = await fetch(`${PortfolioService.baseApiUrl}PersonProfile?ownerId=ismael`, {
                method: "GET",
                ...PortfolioService.defaultOptions
            })
    
            if (!response.ok) {
                throw new Error(`Error Code: ${response.status} Message: ${response.statusText}`)
            }

            return response.json();
        }
        catch (ex) {
            throw(ex);
        }
    }

    async getEducationExperience() : Promise<EducationExperience[]> {
        try {
            const response = await fetch(`${PortfolioService.baseApiUrl}EducationExperience?ownerId=ismael`, {
                method: "GET",
                ...PortfolioService.defaultOptions
            })
    
            if (!response.ok) {
                throw new Error(`Error Code: ${response.status} Message: ${response.statusText}`)
            }

            return response.json();
        }
        catch (ex) {
            throw(ex);
        }
    }
}