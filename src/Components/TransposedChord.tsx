import { FC, useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../Context/Context';
import { allBaseChords } from '../Helpers/Chords';

const StyledChord = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledCircle = styled.div`
  border: 1px solid yellowgreen;
  background: yellowgreen;
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: center;

  p {
    font-size: 4rem;
    height: 4rem;
    margin: 0;
    margin-bottom: 78px;
    margin-block-end: 0;
    margin-block-start: 0;

  }
`;

const TransposedChord: FC = () => {
  const { currentChord, capoFret } = useContext(AppContext);

  const transpose = () => {
    const currentChordIndex = allBaseChords.indexOf(currentChord);
    const newChordIndex = currentChordIndex + capoFret;
    let actualNewIndex = 0;

    if (newChordIndex > allBaseChords.length - 1) {
      actualNewIndex = newChordIndex - allBaseChords.length;
    } else {
      actualNewIndex = newChordIndex;
    }

    return allBaseChords[actualNewIndex];
  };

  return (
    <StyledChord>
      <StyledCircle>
        <p>{transpose()}</p>
      </StyledCircle>
    </StyledChord>
  );
};

export default TransposedChord;
