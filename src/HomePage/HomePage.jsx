import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { userActions } from '../_actions';

function HomePage() {
    const users = useSelector(state => state.users);
    const user = useSelector(state => state.authentication.user);
    const dispatch = useDispatch();
    let history = useHistory();
    useEffect(() => {
        dispatch(userActions.getAll());
    }, []);

    function openQuiz() {
        
    let quizList = [
        {
            id: 1,
            question: 'Grand Central Terminal, Park Avenue, New York is the world\s',
            options: [
                {option: 'largest railway station', class: ''},
                {option: 'highest railway station', class: ''},
                {option: 'longest railway station', class: ''},
                {option: 'None of the above', class: ''}
            ],
            score: 5,
            correct_answer: 'largest railway station'
        },
        {
            id: 2,
            question: 'Entomology is the science that studies',
            options: [
                {option: 'Behavior of human beings',class: ''},
                {option: 'Insects',class: ''},
                {option: 'The origin and history of technical and scientific terms',class: ''},
                {option: 'The formation of rocks', class: ''},
            ],
            score: 7,
            correct_answer: 'Insects'
        },
        {
            id: 3,
            question: 'Eritrea, which became the 182nd member of the UN in 1993, is in the continent of',
            options: [
                {option: 'Asia',class: ''},
                {option: 'Africa',class: ''},
                {option: 'Europe',class: ''},
                {option: 'Australia',class: ''},
            ],
            score: 10,
            correct_answer: 'Africa'
        },
        {
            id: 4,
            question: 'Garampani sanctuary is located at',
            options: [
                {option: 'Junagarh, Gujarat',class: ''},
                {option: 'Diphu, Assam',class: ''},
                {option: 'Kohima, Nagaland',class: ''},
                {option: 'Gangtok, Sikkim', class: ''},
            ],
            score: 15,
            correct_answer: 'Diphu, Assam'
        },
        {
            id: 5, 
            question: 'Hitler party which came into power in 1933 is known as',
            options: [
                {option: 'Labour Party',class: ''},
                {option: 'Nazi Party',class: ''},
                {option: 'Ku-Klux-Klan',class: ''},
                {option: 'Democratic Party', class: ''},
            ],
            score: 2,
            correct_answer: 'Nazi Party'
        },
        {
            id: 6,
            question: 'FFC stands for',
            options: [
                {option: 'Foreign Finance Corporation',class: ''},
                {option: 'Film Finance Corporation',class: ''},
                {option: 'Federation of Football Council',class: ''},
                {option: 'None of the above', class: ''},
            ],
            score: 5,
            correct_answer: 'Film Finance Corporation'
        },
        {
            id: 7,
            question: 'Fastest shorthand writer was',
            options: [
                {option: 'Dr. G. D. Bist',class: ''},
                {option: 'J.R.D. Tata',class: ''},
                {option: 'J.M. Tagore',class: ''},
                {option: 'Khudada Khan', class: ''},
            ],
            score: 20,
            correct_answer: 'Dr. G. D. Bist'
        },
        {
            id: 8,
            question: 'Epsom (England) is the place associated with',
            options: [
                {option: 'Horse racing',class: ''},
                {option: 'Polo',class: ''},
                {option: 'Shooting',class: ''},
                {option: 'Snooker', class: ''},
            ],
            score: 6,
            correct_answer: 'Horse racing'
        },
        {
            id: 9,
            question: 'First human heart transplant operation conducted by Dr. Christiaan Barnard on Louis Washkansky, was conducted',
            options: [
                {option: '1967',class: ''},
                {option: '1968',class: ''},
                {option: '1958',class: ''},
                {option: '1922',class: ''},
            ],
            score: 5,
            correct_answer: '1967'
        },
        {
            id: 10,
            question: 'Galileo was an Italian astronomer who',
            options: [
                {option: 'developed the telescope',class: ''},
                {option: 'discovered four satellites of Jupiter',class: ''},
                {option: 'discovered that the movement of pendulum produces a regular time measurement',class: ''},
                {option: 'All of the above', class: ''},
            ],
            score: 5,
            correct_answer: 'All of the above'
        },            
    ];
    localStorage.setItem('quiz_list', JSON.stringify(quizList))
    history.push('/quiz')
    }

    return (
        <div className="col-lg-8 offset-lg-2">
            <h1>Hi {user.firstName}!</h1>
        <p>You're logged in to Quiz Nepal.</p>
        <button onClick={() => openQuiz()}>Start Quiz</button>
            <p>
                <Link to="/login">Logout</Link>
            </p>
        </div>
    );
}

export { HomePage };

{/* <h3>All registered users:</h3>
{users.loading && <em>Loading users...</em>}
{users.error && <span className="text-danger">ERROR: {users.error}</span>} */}
// {users.items &&
//     <ul>
//         {users.items.map((user, index) =>
//             <li key={user.id}>
//                 {user.firstName + ' ' + user.lastName}
//             </li>
//         )}
//     </ul>
// }
