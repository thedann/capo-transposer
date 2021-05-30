import React, { FC, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { AppContext } from '../Context/Context';
import chordGrip from '../Helpers/ChordGrip';
import GuitarFret from './GuitarFret';
import GuitarString from './GuitarString';

const Container = styled.div`
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Neck = styled.div`
  width: 8rem;
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  border-left: 1px solid black;
  border-right: 1px solid black;
`;

const StringContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  z-index: -10;
  left: 10%;
`;

const StyledCapo = styled.div`
  width: 135%;
  height: 0.5rem;
  background: black;
  z-index: 1;
  position: absolute;
  left: -1rem;
  top: 1rem;
`;

const StyledCapoCurve = styled.div`
  background: black;
  z-index: -100;
  position: absolute;
  left: -0.5rem;
  height: 1rem;
  width: 0.75rem;
  border-bottom-left-radius: 40px;
`;

const GuitarNeck: FC = () => {
  const frets: number[] = [1, 2, 3, 4, 5, 6, 7];

  const { capoFret, currentChord } = useContext(AppContext);
  const [currentGrip, setCurrentGrip] = useState(chordGrip(currentChord));

  useEffect(() => {
    setCurrentGrip(chordGrip(currentChord));
  }, [currentChord, capoFret]);

  return (
    <Container>
      <Neck>
        {frets.map((fretNumber, index) => (
          <GuitarFret number={fretNumber} key={index} />
        ))}

        <StringContainer>
          {currentGrip && currentGrip.map((whereToBePlayed) => <GuitarString toBePlayedAt={whereToBePlayed} />)}
          {capoFret > 0 && (
            <StyledCapo>
              <StyledCapoCurve />
            </StyledCapo>
          )}
        </StringContainer>
      </Neck>
    </Container>
  );
};

export default GuitarNeck;
