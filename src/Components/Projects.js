import React from 'react'
import projectsInfo from './ProjectsInfo'
import { GrProjects } from 'react-icons/gr'
import { AiFillGithub } from 'react-icons/ai'
import { HiOutlineExternalLink } from 'react-icons/hi'
const Projects = () => {
  const proj = projectsInfo.map((p) => {
    return (<div className="card" key={p.id}>
      <div className="card__content">

        <div className="card__front">
          <h3 className="card__title">{p.name}</h3>
        </div>

        <div className="card__back">
          <p className="card__body">{p.desc}<br/><br/>
          <a href={p.link} target='_blank'>Visit Website <HiOutlineExternalLink/></a>
          <a href={p.github} target='_blank'>See Code <AiFillGithub/></a>
          </p>
          
        </div>

      </div>
    </div>)
  })
  return (
    <div id="projects">
      <h1 className='heading'>Projects<GrProjects /></h1>
      <div className='cards-container'>
      {proj}
      </div>
    </div>
  )
}

export default Projects
