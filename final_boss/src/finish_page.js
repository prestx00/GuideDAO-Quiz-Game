import React from 'react';
import styles from './App.module.scss';

export default function FinishPage({data, score}){
    return (
        <>
        <div className={styles.score_box}>
                <p>You scored {score} out of {data.length}</p>
		</div>
        </>
    )
}