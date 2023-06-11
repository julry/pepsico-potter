import { getQuestionById } from '../../utils/getQuestionById';
import { QuestionWrapper } from '../shared/QuestionWrapper';

export const Screen2 = () => {
    const question = {...getQuestionById('0'), number: 1};

    return (<QuestionWrapper question={question} />)
}