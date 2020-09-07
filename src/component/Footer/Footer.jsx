import React from 'react';

import styles from './Footer.module.css';
const Footer = () => {
    return(
        <>
        <div className={styles.container}>
            <p>Powered by GitHub pages</p>
            <p>Designed by DongYun Hwang, zzid</p>
            <p>Font : Roboto Mono (Google font)</p>
        </div>
        </>
    )
}
export default Footer;