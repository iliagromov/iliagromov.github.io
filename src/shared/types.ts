export type wpPage = {
    blockAdvantages: blockAdvantages,
    blockProjects: blockProjects,
    blockServices: blockServices,
    blockSkills: blockSkills,
    blockAbout: blockAbout,
}

type blockAdvantages = {
    advantages: [{
        title: string
    }];
}
export type blockAbout = {
    about: string
}

type blockSkills = {
    skills: [{
        title: String
        image: {
            sourceUrl: string
            title: string
            altText: string
        }
    }];
}

type blockServices = {
    service: [{
        title: string
        image: {
            sourceUrl: string
            title: string
            altText: string
        }
    }];
}

export type blockProjects = {
    projects: WpProjectPage[]
}

export type WpProjectPage = {
    id: number
    link: string
    blockProject: blockProject
}

export type blockProject = {
    days: string
    description: string
    format: string
    pages: projectPage[]
    title: string
    task: string
    sitelink: string
    shortdescription: string
    technology: [{
        name: string
    }]
}

export type projectPage = {
    pagetitle: string
    image: image
    pageLayouts: [
        {
            layout: image
        }
    ]
}

type image = {
    altText: string
    title: string
    sourceUrl: string
}