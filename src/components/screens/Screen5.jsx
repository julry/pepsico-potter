import { getQuestionById } from '../../utils/getQuestionById';
import { QuestionWrapper } from '../shared/QuestionWrapper';
import { useProgress } from '../../hooks/useProgress';

export const Screen5 = () => {
    const { progress } = useProgress();
    const question = {...getQuestionById(`${progress.result}-0`), number: 4};
    return (<QuestionWrapper question={question} />)
}