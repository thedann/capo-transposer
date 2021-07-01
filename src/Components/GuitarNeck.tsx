import { FC, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { AppContext } from '../Context/Context';
import chordGrip from '../Helpers/ChordGrip';
import Color from '../Helpers/Colors';
import { fretType } from '../Helpers/FretType';
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
  border-left: 1px solid ${Color.DarkGrey};
  border-right: 1px solid ${Color.DarkGrey};
  background: ${Color.Wood};
`;

const StringContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  left: 10%;
`;

const StyledCapo = styled.div`
  width: 135%;
  height: 0.5rem;
  background: black;
  z-index: 1;
  position: absolute;
  left: -1rem;
  top: 0.5rem;
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
  const guitarStrings: string[] = ['E', 'A', 'D', 'G', 'B', 'e'];

  const { capoFret, currentChord } = useContext(AppContext);

  const [currentGrip, setCurrentGrip] = useState(
    chordGrip(currentChord, capoFret)
  );

  useEffect(() => {
    setCurrentGrip(chordGrip(currentChord, capoFret));
  }, [currentChord, capoFret]);

  const getStringsForThisFret = (fretNumber: number) => {
    const guitarStringsToBePlayed = currentGrip.map((guitarString) =>
      guitarString === fretNumber ? guitarString : null
    );

    return guitarStringsToBePlayed;
  };

  return (
    <Container>
      <Neck>
        {frets.map((fretNumber, index) => (
          <GuitarFret
            fretNumber={fretNumber}
            guitarStringsThatShouldBePlayedAtThisFret={getStringsForThisFret(
              fretNumber
            )}
            key={index}
          />
        ))}

        <StringContainer>
          {guitarStrings &&
            guitarStrings.map((guitarString) => (
              <GuitarString name={guitarString} key={guitarString} />
            ))}
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
