import React, { FC } from 'react';
import { StaticImage } from "gatsby-plugin-image";
import { Link } from 'gatsby-link';

import './Projects.sass';
import './Card.sass';
import Card from './Card';
import { blockProject, WpProjectPage } from '../../../shared/types';

type ProjectProps = {
    projectsArray: WpProjectPage[],
}


const Projects: FC<ProjectProps> = (props) => {
    
    function sliceIntoChunks(arr: Object[], chunkSize: number) {
        const res = [];
        for (let i = 0; i < arr.length; i += chunkSize) {
            const chunk = arr.slice(i, i + chunkSize);
            res.push(chunk);
        }
        return res;
    }

    const projectsGrouped = sliceIntoChunks(props.projectsArray, 5);

    const projectRender = props.projectsArray && projectsGrouped.map((group: any, idx) => {
        const keyGroup = `group${idx}`;

        const projectRowRender = group.map((project: WpProjectPage, idx: number) => {
            const projectLink = project.uri;
            // console.log(project);
            const keyProject = `${keyGroup}__project${idx}`;
            return (
                <Card
                    projectLink={projectLink}
                    blockProject={project.blockProject}
                    key={keyProject} />
            )
        });
        
        return (
            <div className='projects-content row' key={keyGroup} >
                {projectRowRender}
            </div>
        )

    });

    return (
        <section className="projects isAnimate animated">
            <div className="page__title page_transform-uppercase page_text-center">
                <h2 className="page__subtitle_big">Проекты</h2>
                <h2 className="page__title_main page__title-h2 page_bold">Проекты{props.projectsArray.length}+</h2>
            </div>
            <div className="wrapper">
                <div className="inner">
                    {projectRender}
                </div>
            </div>
        </section>
    );
}


export default Projects;


