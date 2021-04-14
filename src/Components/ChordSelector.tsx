import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { Chord } from '../Helpers/Chords';
import Color from '../Colors';

const StyledUl = styled.ul`
  height: 10rem;
  overflow: auto;
  scroll-behavior: smooth;
  list-style: none;
  padding: 0;

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${Color.LightGrey};
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${Color.Grey};
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${Color.DarkGrey};
  }
`;

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
  const [currentChord, setCurrentChord] = useState<Chord>(Chord.C);

  const allBaseChords = Object.values(Chord);

  return (
    <StyledUl>
      {allBaseChords.map((chord) => (
        <StyledLi
          selected={currentChord === chord}
          onClick={() => setCurrentChord(chord)}
        >
          {chord}
        </StyledLi>
      ))}
    </StyledUl>
  );
};

export default ChordSelector;
