import { quizConstants } from '../_constants';

export function quiz(state = {}, action) {
  switch (action.type) {
    case quizConstants.OPEN_AND_SHUFFLE_QUIZ:
        let quizList = [
            {
                id: 1,
                question: 'Grand Central Terminal, Park Avenue, New York is the world\s',
                options: [
                    'largest railway station',
                    'highest railway station',
                    'longest railway station',
                    'None of the above'
                ],
                correct_answer: 'largest railway station'
            },
            {
                id: 2,
                question: 'Entomology is the science that studies',
                options: [
                    'Behavior of human beings',
                    'Insects',
                    'The origin and history of technical and scientific terms',
                    'The formation of rocks'
                ],
                correct_answer: 'Insects'
            },
            {
                id: 3,
                question: 'Eritrea, which became the 182nd member of the UN in 1993, is in the continent of',
                options: [
                    'Asia',
                    'Africa',
                    'Europe',
                    'Australia'
                ],
                correct_answer: 'Africa'
            },
            {
                id: 4,
                question: 'Garampani sanctuary is located at',
                options: [
                    'Junagarh, Gujarat',
                    'Diphu, Assam',
                    'Kohima, Nagaland',
                    'Gangtok, Sikkim'
                ],
                correct_answer: 'Diphu, Assam'
            },
            {
                id: 5, 
                question: 'Hitler party which came into power in 1933 is known as',
                options: [
                    'Labour Party',
                    'Nazi Party',
                    'Ku-Klux-Klan',
                    'Democratic Party'
                ],
                correct_answer: 'Nazi Party'
            },
            {
                id: 6,
                question: 'FFC stands for',
                options: [
                    'Foreign Finance Corporation',
                    'Film Finance Corporation',
                    'Federation of Football Council',
                    'None of the above'
                ],
                correct_answer: 'Film Finance Corporation'
            },
            {
                id: 7,
                question: 'Fastest shorthand writer was',
                options: [
                    'Dr. G. D. Bist',
                    'J.R.D. Tata',
                    'J.M. Tagore',
                    'Khudada Khan'
                ],
                correct_answer: 'Dr. G. D. Bist'
            },
            {
                id: 8,
                question: 'Epsom (England) is the place associated with',
                options: [
                    'Horse racing',
                    'Polo',
                    'Shooting',
                    'Snooker'
                ],
                correct_answer: 'Horse racing'
            },
            {
                id: 9,
                question: 'First human heart transplant operation conducted by Dr. Christiaan Barnard on Louis Washkansky, was conducted',
                options: [
                    '1967',
                    '1968',
                    '1958',
                    '1922'
                ],
                correct_answer: '1967'
            },
            {
                id: 10,
                question: 'Galileo was an Italian astronomer who',
                options: [
                    'developed the telescope',
                    'discovered four satellites of Jupiter',
                    'discovered that the movement of pendulum produces a regular time measurement',
                    'All of the above'
                ],
                correct_answer: 'All of the above'
            },            
        ]
        quizList = quizList.sort(() => Math.random() - 0.5);
      return {quiz_list: quizList};
    default:
      return state
  }
}