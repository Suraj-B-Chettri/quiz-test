import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'
import './QuizPage.css';
import { useHistory } from "react-router-dom";

function QuizPage() {
    let history = useHistory();
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let currentUserId = JSON.parse(localStorage.getItem('user')).id ;
    let quizList = JSON.parse(localStorage.getItem('quiz_list'));


    const [selectedQuestion, setSelectedQuestion] = useState(quizList[0]);
    const [myScore, setMyScore] = useState(0);
    const [progress, setProgress] =  useState(10 );
    const eachQuestionProgress = 10;
    const [ulDisabled, setUIDisabled] = useState('');
    const [nextButtonDisabled, setNextButtonDisabled] = useState('Ul-Disabled');
    const [nextButton, setNextButton] = useState('Next');


    function handleClick(selectedAnswer, obj) {
        setUIDisabled('Ul-Disabled');
        setNextButtonDisabled('')
        if(selectedAnswer == obj.correct_answer) {
            obj.options.forEach(eachOption => {
                if(eachOption.option == obj.correct_answer) {
                    eachOption.class = 'Correct';
                    setMyScore(myScore+selectedQuestion.score);
                }
            })
            setSelectedQuestion(obj)

        } else {
            obj.options.forEach(eachOption => {
                if(selectedAnswer == eachOption.option) {
                    eachOption.class = 'Error'
                }
                if(eachOption.option == obj.correct_answer) {
                    eachOption.class = 'Correct';
                }
            })
            setSelectedQuestion(obj)
        }
      }
      function handleNext() {
        setNextButtonDisabled('Ul-Disabled')
        let currentIndex;
        quizList.forEach((record, index)=> {

            if(record.id == selectedQuestion.id) {
                currentIndex = index;
            } 
        })
        
        if(currentIndex ==8) {
                setNextButton('Go to Leader Board')
        }

        if(quizList[currentIndex+1]) {
            setSelectedQuestion(quizList[currentIndex+1])
            setProgress(progress+eachQuestionProgress);
            setUIDisabled('');
        } else {
            users.forEach(record=> {
                if(record.id == currentUserId) {
                    record.score = myScore;
                } 
            });
            localStorage.setItem('users', JSON.stringify(users));
            history.push('/leader-board')
        }

      }



    return (
        <div className="col-lg-8 offset-lg-2">
            <div className="Score-Container">{myScore} / 80</div>
        <br/>
        <br/>

        <ProgressBar now={progress} /> 
          <span className="Progress-bar-red">PROGRESS: {progress} %</span> 
        
        <h4><span >Q. </span><span className="Question-Tag">{selectedQuestion.question}:</span> </h4>
        {selectedQuestion.options &&
        <ul className={ulDisabled}>
            {selectedQuestion.options.map((option, index) =>
                <li className= {`Four-Options ${option.class}`} key={index} onClick={() => handleClick(option.option, selectedQuestion)}>
                    {option.option}
                </li>
            )}
        </ul>
        }
        <div style={{textAlign: "center"}}>
        <button className={nextButtonDisabled} onClick={() => handleNext()}>{nextButton}</button>
        </div>
        </div>
    );
}

export { QuizPage };