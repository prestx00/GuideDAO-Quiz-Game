import React, {useState} from 'react';
import html_arrow from './images/html.svg'
import js_arrow from './images/js.svg'
import react_arrow from './images/react.svg'
import sol_arrow from './images/solidity.svg'
import styles from './App.module.scss'
import QuizPage from './quiz_page.js';

export default function SelectQuiz(){

const[QuizLogin, setQuizLogin] = useState(false);

// function selectedQuiz(chosenQuiz) {
//     const chosen_questions = {
//         html: questionsHtml,
//         js: questionsJS,
//         react: questionsReact
//     }
//     return chosen_questions[chosenQuiz]
// }

    function handleButtonClick(){
        setQuizLogin(!QuizLogin);
    }


    if(QuizLogin){
        return <QuizPage />
    }
    return (
        <>
        <div className={styles.quiz_list_box}>
            
            <button onClick={handleButtonClick}>
                <div className={styles.html_quiz_btn_box}>
                    <div className={styles.html_arrow}>
                        <img src={html_arrow} alt='html_arrow'/>
                    </div>
                    <div className={styles.html_quiz_btn_text}>
                        <p>HTML/CSS</p>
                    </div>
                </div>
            </button>

            <button>
                <div className={styles.js_quiz_btn_box}>
                    <div className={styles.js_arrow}>
                        <p className={styles.soon}>SOON</p>
                        <img src={js_arrow} alt='html_arrow'/>
                    </div>
                    <div className={styles.js_quiz_btn_text}>
                        <p>JS</p>
                    </div>
                </div>
            </button>

            <button>
                <div className={styles.react_quiz_btn_box}>
                    <div className={styles.react_arrow}>
                        <p className={styles.soon}>SOON</p>
                        <img src={react_arrow} alt='html_arrow'/>
                    </div>
                    <div className={styles.react_quiz_btn_text}>
                        <p>REACT</p>
                    </div>
                </div>
            </button>

            <button>
                <div className={styles.sol_quiz_btn_box}>
                    <div className={styles.sol_arrow}>
                        <p className={styles.soon}>SOON</p>
                        <img src={sol_arrow} alt='html_arrow'/>
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