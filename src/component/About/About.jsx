import React from 'react';
import styles from './About.module.css';
import ghImg from '../../images/GitHub-Mark-64px.png';


/**
 * TODO ::
 *      EDU prog link
 *      EDU prog certification doc
 *      Should i upload project on univ? 
 *      TIL?
 * 
 */
const About = () =>{
    const Sect = ({title,text,duration}) => {
        return (
            <div style={{width: '30vw', margin:"0 10px"}}>
                <div style={{borderTop:'5px solid #000000aa', paddingTop:'3px', borderRadius:'2px'}}>
                    <div style={{fontWeight:'bold'}}>{title}</div>
                    <div style={{fontWeight:'lighter', fontSize:"80%"}}>{text}</div>
                    <div style={{fontSize:"80%",fontWeight:"initial"}}>{duration}</div>
                </div>
            </div>
        )
    }
    return(
        <div className={styles.container}>
            <h2>EDUCATION</h2>
            <div style={{display:'flex', flexDirection:"row"}}>
                <Sect
                    title="Bachelor of Science"
                    text="Computer Science Pusan National University - Busan, Korea Computer Science Engineering"
                    duration="(2014 - 2020)"
                />
                <Sect
                    title="Cloud & MSA Education"
                    text="Multicampus Education"
                    duration="(2020.07 - 2020.12)"
                />
            </div>
            <div className={styles.div}>
                <a href="https://github.com/zzid" target="_blank" rel="noopener noreferrer"><img src={ghImg} alt="img err"/></a>
            </div>
        </div>
    )
}
export default About;