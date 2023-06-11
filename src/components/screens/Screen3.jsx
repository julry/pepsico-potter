import { getQuestionById } from '../../utils/getQuestionById';
import { QuestionWrapper } from '../shared/QuestionWrapper';

export const Screen3 = () => {
    const question = {...getQuestionById('1'), number: 2};

    return (<QuestionWrapper question={question} />)
}