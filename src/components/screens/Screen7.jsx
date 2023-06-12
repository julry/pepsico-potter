import styled from 'styled-components';
import { useProgress } from '../../hooks/useProgress';
import { resultTypes } from '../../constants/resultTypes.config';
import { Title } from '../shared/Title';
import { FlexWrapper } from '../shared/FlexWrapper';
import { Button } from '../shared/Button';
import { openHref } from '../../utils/openHref';
import stick from '../../static/images/stick.svg';
import final from '../../static/images/final.png';

const Wrapper = styled(FlexWrapper)`
  padding: min(4.5vw, 26px);
  background: url(${final}) no-repeat 50% 50% /cover;
  max-width: 800px;
  white-space: pre-line;
`;

const ResultWrapper = styled.div`
  position: relative;
  z-index: 3;
  box-shadow: 0 0 14px rgba(9, 96, 140, 0.6);
  border-radius: var(--baseBorderRadius);
  background: #FFFFFF;
  padding: min(4.5vw, 26px);
  width: 100%;
  max-height: min(56vh, 390px);
  overflow: auto;
  color: #000000;
  max-width: 800px;
  margin: ${({hasPositions}) => hasPositions ? 0 : 'min(31.4vw, 140px)'} 0 min(17.2vw, 82px);
  white-space: pre-line;
  font-family: 'Gotham', 'Times New Roman', serif;
  
  @media screen and (min-width: 1000px) {
    max-height: calc(100vh - 260px);
  }
  
  @media screen and (max-width: 330px) {
    white-space: initial;
  }

  @media screen and (min-width: 640px) {
    white-space: initial;
  }
`;

const Stick = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 32.2vw;
  max-width: 153px;
  height: 36.88vw;
  max-height: 175px;
  background: url(${stick}) no-repeat 0 0 /contain;
`;

const ResultTitle = styled.h4`
  font-size: 18px;
  color: var(--mainColor);
  text-align: center;
  
  @media screen and (max-width: 320px) {
    font-size: 16px;
  }
`;

const Position = styled.div`
  margin-top: 8px;

  @media screen and (min-width: 640px) {
    max-width: 640px;
  }
`;

const PositionLabel = styled.h5`
  position: relative;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.02em;
  text-indent: 16px;
  
  &::before {
    content: '';
    position: absolute;
    top: 7px;
    left: 5px;
    display: inline-block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #A83031;
  }
`;

const PositionDescription = styled.p`
  font-size: ${({hasPositions}) => hasPositions ? '12px' : '15px'};
  letter-spacing: -0.02em;
  width: 100%;
`;

const ButtonStyled = styled(Button)`
  position: relative;
  z-index: 3;
`;

export const Screen7 = () => {
    const { progress } = useProgress();
    const { result } = progress;

    const hasPositions = resultTypes[result]?.positions?.length > 1;
    return <Wrapper>
        <Title>результат</Title>
        <ResultWrapper hasPositions={hasPositions}>
            <ResultTitle>{resultTypes[result]?.label}{'\n'}</ResultTitle>
            {resultTypes[result]?.positions?.map(position => (
                <Position>
                    {position.label && <PositionLabel>{position.label}</PositionLabel>}
                    <PositionDescription hasPositions={hasPositions}>{position.description}</PositionDescription>
                </Position>
            ))}
        </ResultWrapper>
        <ButtonStyled
            size='md'
            onClick={() => openHref(' https://groundupcareer.ru/')}
        >
            Узнать больше
        </ButtonStyled>
        <Stick />
    </Wrapper>
}