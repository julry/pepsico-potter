import styled from 'styled-components';

const TitleStyled = styled.h3`
  font-size: 85px;
  font-family: 'HarryPotter', serif;
  text-shadow: #A83031 2px 4px;
  letter-spacing: 0.03em;
  margin-bottom: min(3.6vw, 17px);

  @media screen and (max-width: 320px) {
    font-size: 70px;
  }
`;

export const Title = (props) => <TitleStyled {...props} />