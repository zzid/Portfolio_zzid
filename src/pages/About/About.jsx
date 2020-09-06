import React from 'react';
import styles from './About.module.css';
import ghImg from '../../images/GitHub-Mark-64px.png';
const About = () =>{
    return(
        <div className={styles.container}>
        <h1>Links </h1>
        <div>
            <a href="https://github.com/zzid"><img src={ghImg} alt="img err"/></a>
        </div>
        </div>
    )
}
export default About;