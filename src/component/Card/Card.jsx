import React from 'react';
import styles from './Card.module.css'

import myImg from '../../images/profile_picture.jpeg'
const Card = () => {
    return(
        <>
        {/* <div className={styles.container}> */}
        <div className={styles.container}>
            <img className={styles.imgDiv} src={myImg} alt="img err"></img>
            <div className={styles.texts}>
                <h2 className={styles.text}>Hello world! I'm zzid</h2>
                <p className={styles.text}>DongYun Hwang</p>
                <p className={styles.text}>From Republic of Korea</p>
                <p className={styles.text}>I'm big on Web Front-end development</p>
            </div>
        </div>

        </>
    )
}
export default Card;