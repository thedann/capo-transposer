import React, { FC, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Color from '../Helpers/Colors';
import { AppContext } from '../Context/Context';
import MediaQueries from '../Helpers/MediaQueries';
import GuitarFret from './GuitarFret';
import GuitarString from './GuitarString';
import chordGrip from '../Helpers/ChordGrip';

const Container = styled.div`
  min-width: 300px;
  max-width: 800px;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  position: relative;
  border-top: 1px solid black;
  border-bottom: 1px solid black;

  @media ${MediaQueries.aboveTablet} {
    min-width: 700px;
    max-width: 800px;
  }
`;

const StringContainer = styled.div`
  position: absolute;
  height: 80%;
  width: 101%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  z-index: -10;
  left: -1%;
  top: 10%;

  @media ${MediaQueries.aboveTablet} {
    width: 110%;
    left: -10%;
  }
`;

const GuitarNeck: FC = () => {
  const frets: number[] = [1, 2, 3, 4, 5, 6, 7];

  const { capoFret, updateCapo, currentChord } = useContext(AppContext);
  const [currentGrip, setCurrentGrip] = useState(chordGrip(currentChord));

  useEffect(() => {
    setCurrentGrip(chordGrip(currentChord));
  }, [currentChord, capoFret]);

  const onFretClick = (fretNumber: number) => {
    if (fretNumber === capoFret) {
      updateCapo(0);
    } else {
      updateCapo(fretNumber);
    }
  };

  return (
    <Container>
      {frets.map((fretNumber, index) => (
        <GuitarFret
          onClick={() => onFretClick(fretNumber)}
          capoOn={capoFret === fretNumber}
          number={fretNumber}
          key={index}
        />
      ))}

      <StringContainer>
        {currentGrip && currentGrip.map((guitarString) => <GuitarString toBePlayedAt={guitarString} />)}
        {/* <GuitarString />
        <GuitarString />
        <GuitarString />
        <GuitarString />
        <GuitarString />
        <GuitarString /> */}
      </StringContainer>
    </Container>
  );
};

export default GuitarNeck;
