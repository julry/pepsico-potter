import { screens } from '../constants/screens.config';
import { useState } from 'react';
import { answerTypes } from '../constants/answerTypes';

const INITIAL_ANSWERS = {};
const INITIAL_RESULT = answerTypes.Analytics;
const INITIAL_ANSWER_POINTS = Object.keys(answerTypes)
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
    /////////////////// for development ////////////////////////////////////
    const urlParams = new URLSearchParams(window.location.search);
    const screenParam = urlParams.get('screen');
    ////////////////////////////////////////////////////////////////////////

    const [currentScreenIndex, setCurrentScreenIndex] = useState(+screenParam || 0);
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
        const { answerPoints } = progress;
        let max, maxResult;

        points.forEach(type => {
            const { maxPoints } = progress;
            const totalPoints = answerPoints[type] + pointsAmount;

            if (totalPoints > maxPoints) {
                maxResult = type;
                max = totalPoints;
            }
            answerPoints[type] = totalPoints;
        });

        return { answerPoints, max, maxResult};
    };

    const updateAnswerPoints = (points, pointsAmount) => {
        const { answerPoints, max, maxResult} = getAnswerPoints(points, pointsAmount);

        setProgress(prevProgress => ({
            ...prevProgress,
            answerPoints: {
                ...prevProgress.answerPoints,
                ...answerPoints
            },
            maxPoints: max ?? prevProgress.maxPoints,
            result: maxResult ?? prevProgress.result,
        }));
    }

    const updateAnswer = (questionId, answer, pointsAmount = 0) => {
        if (!answer || !questionId) return;

        const answers = {...progress.answers, [questionId]: answer?.id};

        updateAnswerPoints(answer.points, pointsAmount);

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