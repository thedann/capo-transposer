import React, { FC, useContext } from 'react';
import styled from 'styled-components';
import Color from '../Colors';
import { AppContext } from '../Context/Context';
import MediaQueries from '../Helpers/MediaQueries';
import GuitarFret from './GuitarFret';

const Container = styled.div`
  min-width: 300px;
  max-width: 800px;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  position: relative;

  @media ${MediaQueries.aboveTablet} {
    min-width: 700px;
    max-width: 800px;
  }
`;

const StringContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 110%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  z-index: -10;
  left: -10%;
`;

const StyledGuitarString = styled.div`
  width: 100%;
  height: 2px;
  background: ${Color.LightGrey};
`;

interface Fret {
  onCapo?: boolean;
}

const GuitarNeck: FC = () => {
  const frets: number[] = [1, 2, 3, 4, 5, 6, 7];

  const { capoFret, updateCapo } = useContext(AppContext);

  const onFretClick = (fretNumber: number) => {
    if (fretNumber === capoFret) {
      updateCapo(0);
    } else {
      updateCapo(fretNumber);
    }
  };

  return (
    <Container>
      {frets.map((fretNumber) => (
        <GuitarFret
          onClick={() => onFretClick(fretNumber)}
          capoOn={capoFret === fretNumber}
          number={fretNumber}
        />
      ))}

      <StringContainer>
        <StyledGuitarString />
        <StyledGuitarString />
        <StyledGuitarString />
        <StyledGuitarString />
        <StyledGuitarString />
        <StyledGuitarString />
      </StringContainer>
    </Container>
  );
};

export default GuitarNeck;
