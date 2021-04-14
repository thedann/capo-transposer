import { FC, useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../Context/Context';
import { allBaseChords } from '../Helpers/Chords';

const StyledChord = styled.div`
  font-size: 2rem;
`;

const TransposedChord: FC = () => {
  const { currentChord, capoFret } = useContext(AppContext);

  const transpose = () => {
    const currentChordIndex = allBaseChords.indexOf(currentChord);
    const newChordIndex = currentChordIndex + capoFret;
    let actualNewIndex = 0;

    if (newChordIndex > allBaseChords.length - 1) {
      actualNewIndex = newChordIndex - (allBaseChords.length);
    } else {
      actualNewIndex = newChordIndex;
    }

    return allBaseChords[actualNewIndex];
  };

  return <StyledChord>{transpose()}</StyledChord>;
};

export default TransposedChord;
