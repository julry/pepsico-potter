import { screens } from '../constants/screens.config';
import { useState } from 'react';
import { answerTypes } from '../constants/answerTypes';
import { reachMetrikaGoal } from '../utils/reachMetrikaGoal';

const INITIAL_ANSWERS = {};
const INITIAL_RESULT = answerTypes.HR;
const INITIAL_ANSWER_POINTS = Object.values(answerTypes)
    .reduce((acc, key) => {
        acc[key] = 0;
        return acc;
    }, {});

const INITIAL_PROGRESS = {
    answers: INITIAL_ANSWERS,
    maxPoints: 0,
    result: INITIAL_RESULT,
    answerPoints: INITIAL_ANSWER_POINTS,
};

export function useProgressInit() {
    const [currentScreenIndex, setCurrentScreenIndex] = useState(0);
    const [progress, setProgress] = useState(INITIAL_PROGRESS);
    const screen = screens[currentScreenIndex];

    const next = () => {
        const nextScreenIndex = currentScreenIndex + 1;
        const canNext = nextScreenIndex <= screens.length - 1;
        const nextScreen = screens[nextScreenIndex];

        if (canNext) {
            if (nextScreen?.ref?.current) nextScreen.ref.current.scrollTop = 0;
            setCurrentScreenIndex(nextScreenIndex);
        }
    };

    const getAnswerPoints = (points, pointsAmount) => {
        const {answerPoints} = progress;
        let max, maxResult;

        points.forEach(type => {
            const {maxPoints} = progress;
            const totalPoints = answerPoints[type] + pointsAmount;

            if (totalPoints > maxPoints) {
                maxResult = type;
                max = totalPoints;
            }
            answerPoints[type] = totalPoints;
        });

        return {answerPoints, max, maxResult};
    };

    const updateAnswerPoints = (points, pointsAmount, isLast) => {
        const {answerPoints, max, maxResult} = getAnswerPoints(points, pointsAmount);
        if (isLast) {
            reachMetrikaGoal(maxResult ?? progress.result);
        }

        setProgress(prevProgress => ({
            ...prevProgress,
            answerPoints: {
                ...prevProgress.answerPoints,
                ...answerPoints
            },
            maxPoints: max ?? prevProgress.maxPoints,
            result: maxResult ?? prevProgress.result,
        }));
    };

    const updateAnswer = (questionId, answer, pointsAmount = 1, isLast = false) => {
        if (!answer || !questionId) return;

        const answers = {...progress.answers, [questionId]: answer?.id};

        updateAnswerPoints(answer.points, pointsAmount, isLast);

        setProgress(progress => {
            return {
                ...progress,
                answers
            };
        });
    };

    const updateProgress = (name, value) => {
        setProgress(progress => ({...progress, [name]: value}));
    };

    return {
        progress,
        screen,
        next,
        updateAnswer,
        updateProgress,
    };
}
