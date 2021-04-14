import React from 'react';
import styled from 'styled-components';
import './App.css';
import ChordSelector from './Components/ChordSelector';
import GuitarNeck from './Components/GuitarNeck';
import TransposedChord from './Components/TransposedChord';
import ApplicationContextProvider from './Context/Context';

const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const MainWrapper = styled.div`
  display: flex;
  border: 1px solid black;
  height: 80vh;
  min-width: 80%;
  justify-content: center;
  padding-top: 2rem;
`;

const ChordWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledArrowDown = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  margin: 1rem 0;

  span {
    transform: rotate(180deg);
    height: 1rem;
  }
`;

function App() {
  return (
    <ApplicationContextProvider>
      <div className='App'>
        <BodyWrapper>
          <MainWrapper>
            <ChordWrapper>
              <GuitarNeck />
              <ChordSelector />
              <StyledArrowDown>
                <span>|</span>
                <span>^</span>
              </StyledArrowDown>
              <TransposedChord />
            </ChordWrapper>
          </MainWrapper>
        </BodyWrapper>
      </div>
    </ApplicationContextProvider>
  );
}

export default App;
