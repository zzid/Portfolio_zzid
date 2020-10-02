import React from 'react';

import styles from './Projects.module.css'
const Projects = () =>{
  const LinkAndTextLi = ({link, text}) =>{
    return (
      <li>
        <a href= {link} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      </li>
    )
  }
  return (
    <div className={styles.container}>
        <ul>
            <LinkAndTextLi
              link="https://github.com/pnu-004-team2/Sotobi"
              text="Android application Project on University"
            />
            <LinkAndTextLi
              link="https://github.com/zzid/PNU_CSE_19_TEAM_11"
              text="Graduation Project"
            />
            <LinkAndTextLi
              link="https://zzid.github.io/covid-19-status-board-react/"
              text="COVID-19 status board (Use React, learn on YouTube)"
            />
            <LinkAndTextLi
              link="https://multicampus-cloud-msa-safehome.github.io/safehome_frontend/"
              text="Multicampus Education Project #1"
            />
          </ul>
    </div>
  )
}
export default Projects;
