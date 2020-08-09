import React, { useState } from "react";
import "./LeaderBoardPage.css";
import { useHistory } from "react-router-dom";
import { quiz } from "../_reducers/quiz.reducer";

function LeaderBoardPage() {
  let leaderBoards = JSON.parse(localStorage.getItem("users")) || [];
  let currentUserId = JSON.parse(localStorage.getItem("user")).id;
  let history = useHistory();
  leaderBoards.sort(function (a, b) {
    return b.score - a.score;
  });

  function handleNext() {
      history.push('/login')
  }

  function retryQuiz() {
    let quizList = JSON.parse(localStorage.getItem('quiz_list'));
    quizList = quizList.sort(() => Math.random() - 0.5);
    localStorage.setItem('quiz_list', JSON.stringify(quizList));
    history.push('/quiz')
  }


  return (
    <div className="col-lg-8 offset-lg-2">
        <button style={{float: 'left'}}  onClick={() => retryQuiz()} >Retry</button>
        <button style={{float: 'right'}}  onClick={() => handleNext()} >Logout</button>
    <br/><br/>
    <div className="Leaderboard-Header">
        <img className="Leaderboard-Header" src= "https://gamipress.com/wp-content/uploads/2018/12/leaderboards.svg" />
    </div>
      {leaderBoards.map((user, index) => (
        <div key={user.id} className="leaderboard">
          <img src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png" />
          <p className={user.id == currentUserId ? 'LeaderBoardName' : 'LeaderBoardNameAf'}>{user.firstName} {user.lastName} ( {user.username} )</p>
          <p className="score">Score: {user.score}</p>
        </div>
      ))}
    </div>
  );
}

export { LeaderBoardPage };
