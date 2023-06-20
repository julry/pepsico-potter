import styled from 'styled-components';
import logo from '../../static/images/logo.svg';
import hat from '../../static/images/hat.svg';
import start from '../../static/images/start.png';
import startMd from '../../static/images/startMd.png';
import { useProgress } from '../../hooks/useProgress';
import { reachMetrikaGoal } from '../../utils/reachMetrikaGoal';
import { Button } from '../shared/Button';
import { Title } from '../shared/Title';
import { FlexWrapper } from '../shared/FlexWrapper';
import { DesktopDivider } from '../shared/DesktopDivider';

const Wrapper = styled(FlexWrapper)`
  padding: min(5.2vw, 30px) 0;
  background: url(${start}) no-repeat -950px -200px;

  @media screen and (min-width: 640px) {
    background: url(${startMd}) no-repeat;
    background-size: cover;
  }

  @media screen and (min-width: 900px) and (max-height: 750px) {
    padding-bottom: 13px;
  }
`;

const Logo = styled.div`
  width: min(21.2vw, 84px);
  height: min(17.1vw, 81px);
  background: url(${logo}) no-repeat 0 0;
  background-size: contain;
  margin-bottom: min(3.6vw, 17px);

  @media screen and (min-width: 900px) and (max-height: 750px) {
    max-width: 70px;
    max-height: 65px;
  }
`;

const DescriptionWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 329px;
  padding: 18px 24px;
  white-space: pre-line;
  border-radius: var(--smallBorderRadius);
  overflow: hidden;
  background: rgba(69, 98, 147, 0.8);
  z-index: 5;
  flex-shrink: 0;
  
  @media screen and (max-width: 320px) {
    padding: 12px 16px;
  }

  @media screen and (max-height: 650px) {
    max-width: 290px;
    padding: 14px 22px;
  }

  @media screen and (min-width: 490px) and (max-width: 800px) {
    max-width: 80vw;
  }
  
  @media screen and (min-width: 800px) {
    white-space: initial;
    max-width: 783px;
    padding: 18px 24px;
  }

  @media screen and (min-width: 900px) and (max-height: 750px) {
    padding: 13px 24px;
  }
`;

const Description = styled.p`
  font-family: 'agbengaly', sans-serif;
  font-size: 16px;
  letter-spacing: -0.011em;
  line-height: 17px;

  @media screen and (max-width: 320px) {
    font-size: 14px;
    line-height: 15px;
  }

  @media screen and (max-height: 650px) {
    font-size: 14px;
    line-height: 15px;
  }

  @media screen and (min-width: 900px) {
    font-size: 23px;
    line-height: 115%;
    letter-spacing: -0.011em;
  }

  @media screen and (min-width: 430px) and (max-height: 750px){
    font-size: 14px;
    line-height: 15px;
  }
  
  @media screen and (min-width: 900px) and (max-height: 750px) {
    font-size: 20px;
    line-height: 22px;
  }

  @media screen and (min-width: 900px) and (max-height: 600px) {
    font-size: 17px;
    line-height: 22px;
  }
`;

const ButtonWrapper = styled.div`
  position: relative;
  margin-top: auto;

  @media screen and (min-height: 670px) {
    margin-top: min(35vw, 175px);
  }
`;

const HatWrapper = styled.div`
  position: absolute;
  top: max(-29vw, -136px);
  left: 50%;
  transform: translateX(-50%);
  width: 44.8vw;
  max-width: 175px;
  height: 33.3vw;
  max-height: 156px;
  background: url(${hat}) no-repeat 50% 50% /contain;
`;

export const Screen1 = () => {
    const {next} = useProgress();

    const handleNext = () => {
        reachMetrikaGoal('start');
        next();
    };

    return (
        <Wrapper>
            <Logo/>
            <Title>Привет!</Title>
            <DescriptionWrapper>
                <Description>
                    {'Уверены, что ты попал сюда\n' +
                        'не случайно —  мы точно знаем, что тебе подходит PepsiCo.\n' +
                        'И мы знаем, как сложно искать подходящую стажировку\n' +
                        'в большой компании, в этом\n' +
                        'даже настоящим волшебникам нужна помощь. Давай обратимся\n'
                    }
                    <DesktopDivider/>
                    {
                        'к распределительной шляпе\n' +
                        'и узнаем твой идеальный карьерный трек?\n\n'
                    }
                    <DesktopDivider/>
                    <DesktopDivider/>
                    {
                        'Надевай её и готовься узнать\n' +
                        'о себе больше, ведь в тесте тебя ждут увлекательные приключения!'
                    }
                </Description>
            </DescriptionWrapper>
            <ButtonWrapper>
                <HatWrapper/>
                <Button size="md" onClick={handleNext}>Надеть шляпу</Button>
            </ButtonWrapper>
        </Wrapper>
    );
};
