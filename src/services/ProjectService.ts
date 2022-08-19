import { Project } from "../models/Project";
import { WorkExperience } from "../models/WorkExperience";

export class ProjectService {
    private static projectIdCounter = 1;
    private static projectTechIdCounter = 1;

    private static readonly projects : Project[] = [
        {
            id: ProjectService.projectIdCounter++, 
            title: "ImageConverter",
            description: "A console and web application that converts images from one format to another. Both projects utilize a shared .NET standard library.",
            tech: [ 
                {
                    id: ProjectService.projectTechIdCounter++,
                    name: "C#",
                    order: 1
                },
                {
                    id: ProjectService.projectTechIdCounter++,
                    name: ".NET 6",
                    order: 2
                },
                {
                    id: ProjectService.projectTechIdCounter++,
                    name: ".NET MVC",
                    order: 3
                },
                {
                    id: ProjectService.projectTechIdCounter++,
                    name: "NUnit",
                    order: 4
                },
                {
                    id: ProjectService.projectTechIdCounter++,
                    name: "Moq",
                    order: 5
                },
                {
                    id: ProjectService.projectTechIdCounter++,
                    name: "Bootstrap",
                    order: 6
                },
            ],
            sourceCodeLink: "https://github.com/smael123/ImageConverter",
            imageLinks: []
        },
        {
            id: ProjectService.projectIdCounter++, 
            title: "Password Generator React",
            description: "A React application that allows you to generate a random password.",
            tech: [ 
                {
                    id: ProjectService.projectTechIdCounter++,
                    name: "React",
                    order: 1
                },
                {
                    id: ProjectService.projectTechIdCounter++,
                    name: "React Hooks",
                    order: 2
                },
            ],
            sourceCodeLink: "https://github.com/smael123/PasswordGeneratorReact",
            imageLinks: []
        },
        {
            id: ProjectService.projectIdCounter++, 
            title: "Password Generator App",
            description: "A Xamarin mobile application for Android allows you to generate a random password.",
            tech: [ 
                {
                    id: ProjectService.projectTechIdCounter++,
                    name: "Xamarin Forms",
                    order: 1
                }
            ],
            sourceCodeLink: "https://github.com/smael123/PasswordGeneratorApp",
            imageLinks: []
        },
        {
            id: ProjectService.projectIdCounter++, 
            title: "Restaurant Website",
            description: "A website made using .NET MVC for a fictional restaurant. Has a manager portal with the ability for managers to add food and specials.",
            tech: [ 
                {
                    id: ProjectService.projectTechIdCounter++,
                    name: "ASP.NET MVC",
                    order: 1
                },
                {
                    id: ProjectService.projectTechIdCounter++,
                    name: "ASP.NET Identity",
                    order: 2,
                },
                {
                    id: ProjectService.projectTechIdCounter++,
                    name: "Entity Framework",
                    order: 3,
                },
                {
                    id: ProjectService.projectTechIdCounter++,
                    name: "Microsoft SQL",
                    order: 4,
                },
                {
                    id: ProjectService.projectTechIdCounter++,
                    name: "Bootstrap",
                    order: 5,
                },
            ],
            sourceCodeLink: "https://github.com/smael123/RestaurantWebsite",
            imageLinks: []
        },
        {
            id: ProjectService.projectIdCounter++, 
            title: "Hangman React",
            description: "A hangman game implemented using React",
            tech: [ 
                {
                    id: ProjectService.projectTechIdCounter++,
                    name: "React",
                    order: 1
                },
            ],
            sourceCodeLink: "https://github.com/smael123/HangmanReact",
            imageLinks: []
        },
    ]

    private static workExperienceCounter = 1;
    private static workResponsibiltyCounter = 1;

    private static readonly workExperiences : WorkExperience[] = [
        {
            id: this.workExperienceCounter++,
            companyName: "BakerRipley",
            city: "Houston",
            state: "TX",
            startDate: new Date(2021, 10),
            title: "Software Developer",
            responsibilities: [
                {
                    id: this.workResponsibiltyCounter++,
                    description: "Refactor and document existing .NET applications so that they are more understandable and maintainable.",
                    order: 1
                },
                {
                    id: this.workResponsibiltyCounter++,
                    description: "Utilize Azure DevOps to document work items, check in changesets, and deploy using Continuous Integration.",
                    order: 2
                },
                {
                    id: this.workResponsibiltyCounter++,
                    description: "Lead a team of junior developers and collaborate on tasks with them.",
                    order: 3
                }
            ]
        },
        {
            id: this.workExperienceCounter++,
            companyName: "Diligent Delivery Systems",
            city: "Houston",
            state: "TX",
            startDate: new Date(2019, 5),
            title: "Full Stack Web Developer",
            responsibilities: [
                {
                    id: this.workResponsibiltyCounter++,
                    description: "Created new applications for our clients and employees with modern frameworks such as Entity Framework, Web API 2, and ReactJS.",
                    order: 1
                },
                {
                    id: this.workResponsibiltyCounter++,
                    description: "Maintained and developed new features for our custom logistics software utilizing SQL and ASP.NET Web Forms.",
                    order: 2
                },
                {
                    id: this.workResponsibiltyCounter++,
                    description: "Assisted operations and accounting with data analysis by providing custom reports via SQL queries.",
                    order: 3
                }
            ]
        }
    ];

    getProjects() : Project[] {
        return ProjectService.projects;
    }

    getWorkExperiences() : WorkExperience[] {
        return ProjectService.workExperiences
    }
}