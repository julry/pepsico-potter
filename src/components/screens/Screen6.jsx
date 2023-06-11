import { getQuestionById } from '../../utils/getQuestionById';
import { QuestionWrapper } from '../shared/QuestionWrapper';
import { useProgress } from '../../hooks/useProgress';

export const Screen6 = () => {
    const { progress } = useProgress();
    const question = {...getQuestionById(`${progress.result}-1`), number: 5};
    return (<QuestionWrapper question={question} />)
}