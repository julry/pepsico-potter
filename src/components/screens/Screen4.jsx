import { getQuestionById } from '../../utils/getQuestionById';
import { QuestionWrapper } from '../shared/QuestionWrapper';

export const Screen4 = () => {
    const question = {...getQuestionById('2'), number: 3};

    return (<QuestionWrapper question={question} />)
}