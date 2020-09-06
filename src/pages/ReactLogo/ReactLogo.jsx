import React from 'react';
import logo from './logo.svg';
import styles from './ReactLogo.module.css';
const ReactLogo = ()=>{
    return(
      <div className={styles.container}>
        <img src={logo} className={styles.AppLogo} alt="logo" />
      </div>
    )
}
export default ReactLogo;