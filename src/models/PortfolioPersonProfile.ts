import { BasicHyperLink } from "./BasicHyperlink"

export interface PortfolioPersonProfile {
    name: string,
    careerTitle: string,
    pictureSrc?: string,
    profileLinks: BasicHyperLink[]
    resumeHref?: string,
    linkedinHref?: string,
    githubHref?: string
}