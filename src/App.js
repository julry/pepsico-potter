import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useProgressInit } from './hooks/useProgressInit';
import { ProgressProvider } from './context/ProgressContext';

const Wrapper = styled.div`
  --baseBorderRadius: 20px;
  --smallBorderRadius: 10px;
  --mainColor: #203876;

  color: #FFFFFF;
  background: var(--mainColor);
  width: 100%;
  height: ${({height}) => height};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

function App() {
    const [height, setHeight] = useState('100vh');
    const progress = useProgressInit();
    const { screen } = progress;

    const Component = screen?.component || (() => null);

    useEffect(() => {
        function handleResize() {
            const viewportHeight = document.documentElement.clientHeight;
            setHeight(viewportHeight + 'px');
        }
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <ProgressProvider value={progress}>
            <Wrapper height={height}>
                <Component />
            </Wrapper>
        </ProgressProvider>
    );
}

export default App;
