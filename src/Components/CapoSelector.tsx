import React, { FC, useContext } from 'react';
import styled from 'styled-components';
import { StyledUl } from '../CommonStyling';
import { AppContext } from '../Context/Context';
import Color from '../Helpers/Colors';

const CapoLi = styled.li<{ selected?: boolean }>`
  font-size: 2rem;
  background: ${({ selected }) =>
    selected ? Color.DarkGrey : Color.LightGrey};
  color: ${({ selected }) => (selected ? Color.White : Color.Black)};

  :hover {
    cursor: pointer;
  }
`;

const CapoSelector: FC = () => {
  const { capoFret, updateCapo } = useContext(AppContext);

  const capoFrets = [0, 1, 2, 3, 4, 5, 6];

  const onFretClick = (fretNumber: number) => {
    if (fretNumber === capoFret) {
      updateCapo(0);
    } else {
      updateCapo(fretNumber);
    }
  };

  const fretText = (number: number): string => {
    return number === 0 ? 'None' : number.toString();
  };

  return (
    <StyledUl>
      {capoFrets.map((fret) => (
        <CapoLi
          key={fret}
          selected={capoFret === fret}
          onClick={() => onFretClick(fret)}
        >
          {fretText(fret)}
        </CapoLi>
      ))}
    </StyledUl>
  );
};

export default CapoSelector;
