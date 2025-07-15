export interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubLink: string;
    demoLink: string;
    image: string;
}

export interface Blog{
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    slug: string;
}

export interface Experience {
    role: string;
    company: string;
    location: string;
    duration: string;
    description: string[];
    technologies: string[];
    logo: string; 
    link?: string;
}
