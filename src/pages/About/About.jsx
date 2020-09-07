import React from 'react';
import styles from './About.module.css';
import ghImg from '../../images/GitHub-Mark-64px.png';
// import mailImg from '../../images/mail.png';
const About = () =>{
    return(
        <div className={styles.container}>
            <h1>Links </h1>
            <div className={styles.div}>
                <a href="https://github.com/zzid"><img src={ghImg} alt="img err"/></a>
                {/* <a href="https://github.com/zzid"><img src={mailImg} alt="img err"/></a> */}
            </div>
        </div>
    )
}
export default About;