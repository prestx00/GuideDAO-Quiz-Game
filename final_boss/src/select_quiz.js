import React, {useState} from 'react';
import html_arrow from './images/html.svg'
import js_arrow from './images/js.svg'
import react_arrow from './images/react.svg'
import sol_arrow from './images/solidity.svg'
import styles from './App.module.scss'
import QuizPage from './quiz_page.js';
import questionsHtml from './questions_html.js';
import questionsJS from './questions_js.js';
import questionsReact from './questions_react.js';
import questionsSol from './questions_sol.js';

export default function SelectQuiz(){

const[activeQuiz, setActiveQuiz] = useState('');

    function selectedQuiz(activeQuiz) {
        const chosen_questions = {
            html: questionsHtml,
            js: questionsJS,
            react: questionsReact,
            sol: questionsSol
        }
        return chosen_questions[activeQuiz]
    }

    if(activeQuiz){
       return <QuizPage data={selectedQuiz(activeQuiz)} />
    }
    return (
        <>
        <div className={styles.quiz_list_box}>
        

            <button onClick={() => setActiveQuiz('html')}>
                <div className={styles.html_quiz_btn_box}>
                    <div className={styles.html_arrow}>
                        <img src={html_arrow} alt='html_arrow'/>
                    </div>
                    <div className={styles.html_quiz_btn_text}>
                        <p>HTML/CSS</p>
                    </div>
                </div>
            </button>

            <button onClick={() => setActiveQuiz('js')}>
                <div className={styles.js_quiz_btn_box}>
                    <div className={styles.js_arrow}>
                        <img src={js_arrow} alt='js_arrow'/>
                    </div>
                    <div className={styles.js_quiz_btn_text}>
                        <p>JS</p>
                    </div>
                </div>
            </button>

            <button onClick={() => setActiveQuiz('react')}>
                <div className={styles.react_quiz_btn_box}>
                    <div className={styles.react_arrow}>
                        <img src={react_arrow} alt='react_arrow'/>
                    </div>
                    <div className={styles.react_quiz_btn_text}>
                        <p>REACT</p>
                    </div>
                </div>
            </button>

            <button onClick={() => setActiveQuiz('sol')}>
                <div className={styles.sol_quiz_btn_box}>
                    <div className={styles.sol_arrow}>
                        <img src={sol_arrow} alt='sol_arrow'/>
                    </div>
                    <div className={styles.sol_quiz_btn_text}>
                        <p>SOLIDITY</p>
                    </div>
                </div>
            </button>
        </div>
    </>
    );
}