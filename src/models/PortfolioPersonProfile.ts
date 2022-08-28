import { BasicHyperLink } from "./BasicHyperlink"
import { DatabaseDto } from "./DatabaseDto"

export interface PortfolioPersonProfile extends DatabaseDto {
    name: string,
    careerTitle: string,
    pictureSrc?: string,
    profileLinks: BasicHyperLink[]
    resumeHref?: string,
    linkedinHref?: string,
    githubHref?: string
}