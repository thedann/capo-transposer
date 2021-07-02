import React, { FC, useContext } from 'react';
import styled from 'styled-components';
import { StyledUl } from '../CommonStyling';
import { AppContext } from '../Context/Context';
import { allBaseChords } from '../Helpers/Chords';
import Color from '../Helpers/Colors';

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
