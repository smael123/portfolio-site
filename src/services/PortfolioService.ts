import { EducationExperience } from "../models/EducationExperience";
import { PortfolioPersonProfile } from "../models/PortfolioPersonProfile";
import { Project } from "../models/Project";
import { SkillGroup } from "../models/SkillGroup";
import { WorkExperience } from "../models/WorkExperience";

export class PortfolioService {
    private static projectIdCounter = 1;

    private static readonly projects : Project[] = [
        {
            id: PortfolioService.projectIdCounter++, 
            title: "Image Converter",
            description: "A console and web application that converts images from one format to another. Both projects utilize a shared .NET standard library.",
            tech: [ 
                {
                    name: "C#",
                    order: 1
                },
                {
                    name: ".NET 6",
                    order: 2
                },
                {
                    name: ".NET MVC",
                    order: 3
                },
                {
                    name: "NUnit",
                    order: 4
                },
                {
                    name: "Moq",
                    order: 5
                },
                {
                    name: "Bootstrap",
                    order: 6
                },
            ],
            projectLinks: [
                {
                    href: "https://github.com/smael123/ImageConverter",
                    displayText: "Source Code",
                    order: 1
                }
            ],
            // imageLinks: [
            //     { 
            //         src: "https://upload.wikimedia.org/wikipedia/en/a/a5/Jackoneill.jpg",
            //         order: 1,
            //         alt: "test1"
            //     },
            //     {
            //         src: "https://upload.wikimedia.org/wikipedia/en/2/2e/Doctor_Daniel_Jackson_%28Michael_Shanks%292.jpg",
            //         order: 2,
            //         alt: "test2"
            //     }
            // ]
        },
        {
            id: PortfolioService.projectIdCounter++, 
            title: "Restaurant Website",
            description: "A website made using .NET MVC for a fictional restaurant. Has a manager portal with the ability for managers to add food and specials.",
            tech: [ 
                {
                    name: "ASP.NET MVC",
                    order: 1
                },
                {
                    name: "ASP.NET Identity",
                    order: 2,
                },
                {
                    name: "Entity Framework",
                    order: 3,
                },
                {
                    name: "Microsoft SQL",
                    order: 4,
                },
                {
                    name: "Bootstrap",
                    order: 5,
                },
            ],
            projectLinks: [
                {
                    href: "https://github.com/smael123/RestaurantWebsite",
                    displayText: "Source Code",
                    order: 1
                }
            ]
        },
        {
            id: PortfolioService.projectIdCounter++, 
            title: "Password Generator React",
            description: "A React application that allows you to generate a random password.",
            tech: [ 
                {
                    name: "React",
                    order: 1
                },
                {
                    name: "React Hooks",
                    order: 2
                },
            ],
            projectLinks: [
                {
                    href: "https://github.com/smael123/PasswordGeneratorReact",
                    displayText: "Source Code",
                    order: 1
                }
            ]
        },
        {
            id: PortfolioService.projectIdCounter++, 
            title: "Password Generator App",
            description: "A Xamarin mobile application for Android allows you to generate a random password.",
            tech: [ 
                {
                    name: "Xamarin Forms",
                    order: 1
                }
            ],
            projectLinks: [
                {
                    href: "https://github.com/smael123/PasswordGeneratorApp",
                    displayText: "Source Code",
                    order: 1
                }
            ],
            imageLinks: []
        },
        {
            id: PortfolioService.projectIdCounter++, 
            title: "Hangman React",
            description: "A hangman game implemented using React",
            tech: [ 
                {
                    name: "React",
                    order: 1
                },
            ],
            projectLinks: [
                {
                    href: "https://github.com/smael123/HangmanReact",
                    displayText: "Source Code",
                    order: 1
                }
            ]
        },
    ];

    private static workExperienceCounter = 1;

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
                    description: "Refactor and document existing .NET applications so that they are more understandable and maintainable.",
                    order: 1
                },
                {
                    description: "Utilize Azure DevOps to document work items, check in changesets, and deploy using Continuous Integration.",
                    order: 2
                },
                {
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
                    description: "Created new applications for our clients and employees with modern frameworks such as Entity Framework, Web API 2, and ReactJS.",
                    order: 1
                },
                {
                    description: "Maintained and developed new features for our custom logistics software utilizing SQL and ASP.NET Web Forms.",
                    order: 2
                },
                {
                    description: "Assisted operations and accounting with data analysis by providing custom reports via SQL queries.",
                    order: 3
                }
            ]
        }
    ];

    private static skillGroupCounter = 1;

    private static readonly skillGroups : SkillGroup[] = [
        {
            id: this.skillGroupCounter++,
            name: "Backend",
            order: 1,
            skills: [
                {
                    name: "C#",
                    order: 1,
                },
                {
                    name: "SQL",
                    order: 2,
                },
                {
                    name: "SQL Server Reporting Services (SSRS)",
                    order: 3,
                },
                {
                    name: "Web API 2",
                    order: 4,
                },
                {
                    name: ".NET MVC",
                    order: 5,
                },
            ]
        },
        {
            id: this.skillGroupCounter++,
            name: "Frontend",
            order: 2,
            skills: [
                {
                    name: "React",
                    order: 4,
                },
                {
                    name: "Bootstrap",
                    order: 5,
                },
                {
                    name: "HTML",
                    order: 1,
                },
                {
                    name: "CSS",
                    order: 2,
                },
                {
                    name: "JavaScript",
                    order: 3,
                },
            ]
        },
        {
            id: this.skillGroupCounter++,
            name: "Unit Testing",
            order: 3,
            skills: [
                {
                    name: "Dependency Injection",
                    order: 1,
                },
                {
                    name: "NUnit",
                    order: 2,
                },
                {
                    name: "Moq",
                    order: 3,
                }
            ]
        },
        {
            id: this.skillGroupCounter++,
            name: "Source Control",
            order: 4,
            skills: [
                {
                    name: "Azure DevOps",
                    order: 1,
                },
                {
                    name: "Git",
                    order: 2,
                },
                {
                    name: "TFS",
                    order: 3,
                }
            ]
        },
        {
            id: this.skillGroupCounter++,
            name: "External Integrations",
            order: 5,
            skills: [
                {
                    name: "Active Directory",
                    order: 1,
                },
                {
                    name: "Exchange",
                    order: 2,
                },
                {
                    name: "CXT (Logistics Software)",
                    order: 3,
                }
            ]
        },
    ];

    private static workProjectIdCounter = 1;

    private static readonly workProjects : Project[] = [
        {
            id: PortfolioService.workProjectIdCounter++, 
            title: "Employee Onboarding Application",
            companyName: "BakerRipley",
            description: "Worked on a general refactor of our Employee Onboarding application. Moved logic that talked to external systems (e.g. Active Directory, Exchange Server, network drives) to its own classes. This refactor reduced the development time needed when we switched over from on premises Exchange Online.",
            tech: [ 
                {
                    name: "C#",
                    order: 1
                },
                {
                    name: "PowerShell",
                    order: 2
                },
                {
                    name: "SQL",
                    order: 3
                },
                {
                    name: "Active Directory",
                    order: 4
                },
                {
                    name: "Exchange",
                    order: 5
                }
            ]
        },
        {
            id: PortfolioService.workProjectIdCounter++,
            title: "Client Portal Application",
            companyName: "Diligent Delivery Systems",
            description: "Re-engineered our current network delivery portal with a .NET Web API 2 backend and a React frontend. Converted stored procedure and code-file SQL queries to Entity Framework methods. Also directed junior developers by assigning them a set of the application’s features and conveying the requirements via written documentation and oral conversations.",
            tech: [ 
                {
                    name: ".NET Web API 2",
                    order: 1
                },
                {
                    name: "React",
                    order: 2
                },
                {
                    name: "Entity Framework",
                    order: 3
                },
                {
                    name: "Bootstrap",
                    order: 4
                },
                {
                    name: "Nlog",
                    order: 5
                },
            ]
        },
        {
            id: PortfolioService.workProjectIdCounter++, 
            title: "Reschedule Application",
            companyName: "Diligent Delivery Systems",
            description: "Designed a mobile friendly web application to allow our employees to reschedule deliveries on the warehouse. This reduced the overall process time by eliminating the need to reschedule it on the desktop only web application.",
            tech: [ 
                {
                    name: ".NET Web API 2",
                    order: 1
                },
                {
                    name: "React",
                    order: 2
                },
                {
                    name: "Entity Framework",
                    order: 3
                },
                {
                    name: "Bootstrap",
                    order: 4
                },
                {
                    name: "Nlog",
                    order: 5
                },
            ]
        },
        {
            id: PortfolioService.workProjectIdCounter++, 
            title: "Live Tracking Service",
            companyName: "Diligent Delivery Systems",
            description: "Designed a Windows service that periodically sends package scan updates to an external logistics system.",
            tech: [ 
                {
                    name: "Entity Framework",
                    order: 1
                },
                {
                    name: "Nlog",
                    order: 2,
                },
                {
                    name: "CXT (Logistics Software)",
                    order: 3,
                },
            ]
        }
    ];

    getProjects() : Project[] {
        return PortfolioService.projects;
    }

    getWorkExperiences() : WorkExperience[] {
        return PortfolioService.workExperiences
    }

    getSkillGroups() : SkillGroup[] {
        return PortfolioService.skillGroups;
    }

    getWorkProjects() : Project[] {
        return PortfolioService.workProjects;
    }

    getPortfolioPersonProfile() : PortfolioPersonProfile {
        return ({
            id: 1,
            name: "Ismael Almaguer",
            careerTitle: "Full Stack Web Developer",
            pictureSrc: "./images/my-picture.jpeg",
            profileLinks: [
                {
                    displayText: "Résumé",
                    href: "https://example.com",
                    order: 1
                },
                {
                    displayText: "LinkedIn",
                    href: "https://linkedin.com",
                    order: 2
                },
                {
                    displayText: "GitHub",
                    href: "https://github.com",
                    order: 3
                },
            ]
        })
    }

    getEducationExperience() : EducationExperience[] {
        return [
            {
                id: 1,
                schoolName: "University of Houston-Downtown",
                degree: "Bachelor of Science in Computer Science",
                yearOfGraduation: 2017,
                courses: [
                    {
                        name: "Software Engineering",
                        order: 1
                    },
                    {
                        name: "Data Structures and Algorithms",
                        order: 2
                    },
                    {
                        name: "Object Oriented Programming",
                        order: 3
                    },
                    {
                        name: "Database and Warehouses",
                        order: 4
                    }
                ],
                city: "Houston",
                state: "TX"
            }
        ]
    }
}