import React, { FC, useContext } from 'react';
import styled from 'styled-components';
import Color from '../Colors';
import { AppContext } from '../Context/Context';
import GuitarFret from './GuitarFret';

const Container = styled.div`
  min-width: 500px;
  max-width: 800px;
  height: 10rem;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const StringContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  z-index: -10;
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
  const frets: Fret[] = [{}, {}, {}, {}, {}];

  const { capoFret, updateCapo } = useContext(AppContext);

  const onFretClick = (index: number) => {
    const newIndex = index + 1;
    if (newIndex === capoFret) {
      updateCapo(0);
    } else {
      updateCapo(index + 1);
    }
  };

  return (
    <Container>
      {frets.map((fret, index) => (
        <GuitarFret
          onClick={() => onFretClick(index)}
          capoOn={capoFret === index + 1}
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
