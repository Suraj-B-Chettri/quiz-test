import { quizConstants } from '../_constants';

export const quizActions = {
    shuffle,
};

function shuffle() {
    return { type: quizConstants.OPEN_AND_SHUFFLE_QUIZ};
}