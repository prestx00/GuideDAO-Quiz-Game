import React, {useState} from "react";
import styles from "./App.module.scss";
import SelectQuiz from "./select_quiz.js";
import Login from "./login.js";

export default function MainBlock(){
const [login, setLogin] = useState(false);

function handleLoginClick(){
    setLogin(!login)
}

    return (
        <div className={styles.main_block}>
            <div className={styles.main_block_start}>
                {!!login ? <SelectQuiz /> : <Login onHandleLoginClick={handleLoginClick} login={login} />}
            </div>
        </div>
    )
}

