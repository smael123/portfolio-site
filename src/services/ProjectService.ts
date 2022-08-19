import { Project } from "../models/Project";

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

    getProjects() : Project[] {
        return ProjectService.projects;
    }
}