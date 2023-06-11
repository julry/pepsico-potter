import { questions } from '../constants/question.config';

export const getQuestionById = (id) => questions.find(question => question?.id === id);