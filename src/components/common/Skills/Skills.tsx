import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ReactSVG } from 'react-svg';
import './style.sass';


type SkillsProps = {
}

const Skills: FC<SkillsProps> = () => {
  const { allMdx: {nodes} } = useStaticQuery(
    graphql` 
      
      query GetAllSvgSkill {
        allMdx(
            filter: {frontmatter: {category: {eq: "skills"}}}
            sort: {frontmatter: {sortIdx: ASC}}
            ) {
          nodes {
            frontmatter {
              title
              image {
                id
                publicURL
              }
            }
          }
        }
      }
    `);
  const skillsCount = nodes.length;
  const skills = nodes;

  const skillsRender = skills && skills.map((skill: any, i: number) => {

    let svgSrc = skill.frontmatter.image.publicURL ? skill.frontmatter.image.publicURL : '';
    let title = skill.frontmatter.title
    return (
      <div className="skill" key={`skill${i}`}>
        <div className="page__img">
          <ReactSVG 
          src={svgSrc} 
            title={title}
            desc="Description"
            className="wrapper-class-name"
            useRequestCache={false}
            wrapper="span"

            beforeInjection={(svg) => {
              svg.classList.add('svg-class-name')
            }}
          />
        </div>
        <div className="page__subtitle">{title}</div>
      </div>
    )
  });

  return (
    <section className="skills isAnimate animated">
      <div className="page__title page_transform-uppercase page_text-center">
        <div className="page__subtitle_big">Навыки</div>
        <h2 className="page__title_main page__title-h2 page_bold">Навыки {skillsCount}</h2>
      </div>
      <div className="wrapper">
        <div className="skills-content">
          {skillsRender}
        </div>
      </div>
    </section>
  );
}


export default Skills;


