import React from 'react';
import styled from 'styled-components';
import './App.css';
import CapoSelector from './Components/CapoSelector';
import ChordSelector from './Components/ChordSelector';
import GuitarNeck from './Components/GuitarNeck';
import TransposedChord from './Components/TransposedChord';
import ApplicationContextProvider from './Context/Context';
import MediaQueries from './Helpers/MediaQueries';

const BodyWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  padding-top: 0.5rem;

  @media ${MediaQueries.aboveTablet} {
    border: 1px solid black;
    width: 80%;
  }
`;

const ChordWrapper = styled.div`
  display: flex;
  margin-top: 1rem;
  max-height: 20rem;
  height: 30rem;
  flex-direction: column;
  justify-content: space-between;
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
            <GuitarNeck />
            <ChordWrapper>
              <CapoSelector />
              <ChordSelector />
            </ChordWrapper>
            <StyledArrowDown>
              <span>|</span>
              <span>^</span>
            </StyledArrowDown>
            <TransposedChord />
          </MainWrapper>
        </BodyWrapper>
      </div>
    </ApplicationContextProvider>
  );
}

export default App;
