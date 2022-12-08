import React, {useState} from 'react';
import styles from './App.module.scss';
import FinishPage from './finish_page.js';

export default function QuizPage({data}){
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

    
	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < data.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className={styles.quiz_box}>
			{showScore ? (
				<FinishPage data={data} score={score} />
			) : (
				<>
                <div className={styles.question_and_answer_box}>
					<div className={styles.question_box}>
						<div className={styles.question_box_count}>
							<span>Question {currentQuestion + 1}</span>/{data.length}
						</div>
						<div className={styles.question_box_text}>{data[currentQuestion].questionText}</div>
					</div>
					<div className={styles.answer_box}>
						{data[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
                </div>
				</>
			)}
		</div>
	);
}