import React, { FC, useContext, useState } from 'react';
import styled from 'styled-components';
import { allBaseChords, Chord } from '../Helpers/Chords';
import Color from '../Helpers/Colors';
import { AppContext } from '../Context/Context';
import { StyledUl } from '../CommonStyling';



const StyledLi = styled.li<{ selected?: boolean }>`
  font-size: 2rem;
  background: ${({ selected }) =>
    selected ? Color.DarkGrey : Color.LightGrey};
  color: ${({ selected }) => (selected ? Color.White : Color.Black)};

  :hover {
    cursor: pointer;
  }
`;

const ChordSelector: FC = () => {
  const { currentChord, updateCurrentChord } = useContext(AppContext);

  return (
    <StyledUl>
      {allBaseChords.map((chord) => (
        <StyledLi
          selected={currentChord === chord}
          onClick={() => updateCurrentChord(chord)}
          key={chord}
        >
          {chord}
        </StyledLi>
      ))}
    </StyledUl>
  );
};

export default ChordSelector;
