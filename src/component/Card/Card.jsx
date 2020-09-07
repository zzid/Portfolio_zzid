import React from 'react';
import styles from './Card.module.css'

import myImg from '../../images/profile_picture.jpeg'
const Card = () => {
    return(
        <>
        {/* <div className={styles.container}> */}
        <div className={styles.cardDiv}>
            <img className={styles.imgDiv} src={myImg}></img>
            <div className={styles.text}>
                <p>Hello world! I'm zzid.</p>
                <p>DongYun Hwang</p>
                <p>From Republic of Korea</p>
                <p>I'm big on Front-end develop</p>
            </div>
        </div>

        </>
    )
}
export default Card;