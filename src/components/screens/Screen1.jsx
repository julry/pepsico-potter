import styled from 'styled-components';

import logo from '../../static/images/logo.svg';
import hat from '../../static/images/hat.svg';
import start from '../../static/images/start.png';
import { Button } from '../shared/Button';
import { useProgress } from '../../hooks/useProgress';
import { Title } from '../shared/Title';
import { FlexWrapper } from '../shared/FlexWrapper';

const Wrapper = styled(FlexWrapper)`
  padding: min(6.6vw, 31px);
  background: url(${start}) no-repeat -950px -200px;
  
  @media screen and (min-width: 640px) {
    background-position: -700px -200px;
  }
  
  @media screen and (min-width: 1000px) {
    background-position: -200px -200px;
  }
`;

const Logo = styled.div`
  width: min(21.2vw, 84px);
  height: min(17.1vw, 81px);
  background: url(${logo}) no-repeat 0 0;
  background-size: contain;
  margin-bottom: min(3.6vw, 17px);
`;

const DescriptionWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 329px;
  padding: 16px;
  white-space: pre-line;
  border-radius: var(--smallBorderRadius);
  overflow: hidden;
  background: rgba(69, 98, 147, 0.8);
  
  @media screen and (max-width: 320px) {
    padding: 10px;
  }
`;

const Description = styled.p`
  font-family: 'agbengaly', sans-serif;
  font-size: 16px;

  @media screen and (max-width: 320px) {
    font-size: 14px;
  }

  @media screen and (max-height: 650px) {
    font-size: 14px;
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
    const { next } = useProgress();
    return (
        <Wrapper>
            <Logo />
            <Title>Привет!</Title>
            <DescriptionWrapper>
                <Description>
                    {'Уверены, что ты попал сюда не случайно, ведь даже настоящим волшебникам нужен совет, когда возможностей вокруг\n' +
                        'слишком много. \n' +
                        '\n' +
                        'Распределительная шляпа обязательно поможет тебе выбрать идеальный карьерный трек, заглянув в твое сознание. Надевай её и готовься узнать\n' +
                        'о себе больше, ведь в тесте тебя ждут увлекательные приключения!'}
                </Description>
            </DescriptionWrapper>
            <ButtonWrapper>
                <HatWrapper/>
                <Button size='md' onClick={next}>Надеть шляпу</Button>
            </ButtonWrapper>
        </Wrapper>
    )
}