import React from 'react';
import styles from "./App.module.scss";
import metamaskLogo from "./images/MetaMask_Fox.svg";

export default function Login({onHandleLoginClick, login}){
    return (
        <div className={styles.login}>
            <h1 className={styles.main_block_start_caption}>MCS QUIZ GAME</h1>
                <button onClick={onHandleLoginClick} className={styles.main_block_start_btn}>
                    LETS GO
                    <img src={metamaskLogo} alt="metamasklogo"/>
                </button>
        </div>
    )
}