import { projectData } from "content/projects/data";
import { Spotlight } from "./spotlight";
import { CardImg } from "./ui/card";

export const Projects = () => {
    return (
        <>
            {projectData.map((project) => (
            <Spotlight key={project.title} className="h-auto sm:h-48 w-full">
                <CardImg
                key={project.title}
                imgSrc={project.imgUrl}
                imgAlt={project.alt}
                content="project"
                contentUrl={project.href}
                repoUrl={project.repo}
                title={project.title}
                date={project.date}
                description={project.description}
                />
            </Spotlight>
            ))}
        </>
    );
    }