import React from 'react';
import { Helmet } from 'react-helmet';
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
  padding-top: 1rem;

  @media ${MediaQueries.aboveTablet} {
    width: 80%;
  }
`;

const ChordWrapper = styled.div`
  display: flex;
  max-height: 20rem;
  flex-direction: column;
  justify-content: space-between;
  @media ${MediaQueries.aboveTablet} { 
    max-height: 25rem;
  }
`;

const StyledTransposedTo = styled.div`
  font-size: 1.5rem;
  margin: 0.75rem 0;

  @media ${MediaQueries.aboveTablet} {
    font-size: 2rem;
    margin: 1rem 0;
  }
`;

function App() {
  return (
    <ApplicationContextProvider>
      <Helmet>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' cross-origin />
        <link
          href='https://fonts.googleapis.com/css2?family=Lato&display=swap'
          rel='stylesheet'
        />
      </Helmet>
      <div className='App'>
        <BodyWrapper>
          <MainWrapper>
            <GuitarNeck />
            <ChordWrapper>
              <h4>Select Capo</h4>
              <CapoSelector />
              <h4>Select Chord grip</h4>
              <ChordSelector />
            </ChordWrapper>
            <StyledTransposedTo>
              <span>Transpose to 👇</span>
            </StyledTransposedTo>
            <TransposedChord />
          </MainWrapper>
        </BodyWrapper>
      </div>
    </ApplicationContextProvider>
  );
}

export default App;
