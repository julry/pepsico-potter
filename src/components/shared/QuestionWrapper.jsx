import styled from 'styled-components';
import logo from '../../static/images/logo.svg';
import lightning from '../../static/images/lightning.png';
import castle from '../../static/images/castle.svg';
import { QUESTIONS_AMOUNT } from '../../constants/question.config';
import { Button } from './Button';
import { useState } from 'react';
import { useProgress } from '../../hooks/useProgress';
import { FlexWrapper } from './FlexWrapper';

const Wrapper = styled(FlexWrapper)`
  position: relative;
  z-index: 2;
  padding: 5.5vw 3.5vw;
  font-family: 'Gotham', serif;
  font-weight: 500;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: min(3.5vw, 26px);
  max-width: 550px;
`;

const Logo = styled.div`
  width: min(11.7vw, 55px);
  height: min(11.5vw, 54px);
  background: url(${logo}) no-repeat 0 0;
  background-size: contain;
`;

const NumberWrapper = styled.div`
  background: #466197;
  font-size: 16px;
  text-align: center;
  border-radius: var(--smallBorderRadius);
  padding: 0 9px;
  height: 30px;
  display: flex;
  align-items: center;
`;

const QuestionText = styled.p`
  font-size: 15px;
  max-width: 550px;
  white-space: pre-line;

  @media screen and (max-height: 680px){
    font-size: 13px;
  }
  
  @media screen and (min-width: 1000px) {
    font-size: 16px;
  }
`;

const AnswersBlock = styled.div`
  width: 100%;
  margin: min(5.4vw, 35px);
  max-width: 550px;
`;

const AnswerWrapper = styled.div`
  background: ${({isChosen}) => isChosen ? 'linear-gradient(0deg, #CAD5F2, #CAD5F2), #FFFFFF' : '#FFFFFF'};
  box-shadow: 0 0 7px #73B9FF;
  border-radius: var(--baseBorderRadius);
  color: #000000;
  font-size: 13px;
  width: 100%;
  padding: 12px;
  cursor: pointer;
  transition: background 0.45s ease-in;
  
  & + & {
    margin-top: min(3.2vw, 21px);
  }

  @media screen and (max-height: 680px) {
    font-size: 12px;
    padding: 9px;
  }
  
  @media screen and (min-width: 1000px) {
    font-size: 15px;
  }

  @media screen and (max-width: 320px) {
    font-size: 11px;
    padding: 8px;
  }
  
`;

const Background = styled(FlexWrapper)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

const Lightning = styled.div`
  width: min(94.2vw, 375px);
  padding: 4.8vw;
  height: min(25vw, 117px);
  background: url(${lightning}) 0 0 /cover;
  
  @media screen and (min-width: 640px) {
    display: none;
  }
`;

const Castle = styled.div`
  margin-top: auto;
  width: 100%;
  height: 48.28vw;
  background: url(${castle}) 0 0 /cover;
`;

export const QuestionWrapper = ({question}) => {
    const { updateAnswer, next } = useProgress();
    const [chosenAnswer, setChosenAnswer] = useState();
    const [isClicked, setIsClicked] = useState(false);
    const { id, text, pointsAmount, answers, number } = question;

    const handleChooseAnswer = (answer) => {
        if (isClicked) return;
        setChosenAnswer(answer);
    };

    const handleClick = () => {
        if (isClicked) return;
        updateAnswer(id, chosenAnswer, pointsAmount);
        setIsClicked(true);
        setTimeout(() => next(), 300);
    };

    return (
        <>
            <Wrapper>
                <Header>
                    <Logo />
                    <NumberWrapper>
                        {number}/{QUESTIONS_AMOUNT}
                    </NumberWrapper>
                </Header>
                <QuestionText>{text}</QuestionText>
                <AnswersBlock>
                    {answers?.map((answer) => (
                        <AnswerWrapper onClick={() => handleChooseAnswer(answer)} isChosen={chosenAnswer?.id === answer.id}>
                            {answer.text}
                        </AnswerWrapper>
                    ))}
                </AnswersBlock>
                <Button onClick={handleClick} size={'sm'} isChangeOnPress disabled={!chosenAnswer}>Далее</Button>
            </Wrapper>
            <Background>
                <Lightning />
                <Castle />
            </Background>
        </>
    );
};
