import React, {useState} from 'react';
import styles from './App.module.scss';
import SelectQuiz from './select_quiz.js';

export default function FinishPage({data, score}){
    const[retry, setRetry] = useState(false);
    function check_eligible(){
       return score > (data.length / 2)
    }

    function handleRetryButton(){
        setRetry(!retry);
    }

    return (
        retry ? (<SelectQuiz />) :
            (<>
                <div className={styles.score_box}>
                    
                        {check_eligible() ? <p className={styles.score_text}>Congratulations! You eligible for airdrop!</p> : 
                        <p className={styles.score_text}>Dont worry! Try again!</p>}
                        <p className={styles.score}>You scored {score} out of {data.length}</p>
                        <div className={styles.btn_box}>
                            <button className={check_eligible() ? styles.finish_btn : styles.finish_btn_reject} disabled={check_eligible()}>claim</button>
                            <button className={styles.finish_btn} onClick={handleRetryButton}>retry</button>
                        </div>

                </div>
        </>)
    )
}