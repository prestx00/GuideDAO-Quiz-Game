import React, {useState} from 'react';
import questionsHtml from './questions_html.js';
import styles from './App.module.scss';

export default function QuizPage(){
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

    
	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questionsHtml.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className={styles.quiz_box}>
			{showScore ? (
				<div className={styles.score_box}>
					You scored {score} out of {questionsHtml.length}
				</div>
			) : (
				<>
                <div className={styles.question_and_answer_box}>
					<div className={styles.question_box}>
						<div className={styles.question_box_count}>
							<span>Question {currentQuestion + 1}</span>/{questionsHtml.length}
						</div>
						<div className={styles.question_box_text}>{questionsHtml[currentQuestion].questionText}</div>
					</div>
					<div className={styles.answer_box}>
						{questionsHtml[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
                </div>
				</>
			)}
		</div>
	);
}