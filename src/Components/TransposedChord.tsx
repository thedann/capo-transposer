import { FC, useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../Context/Context';
import { allBaseChords } from '../Helpers/Chords';
import MediaQueries from '../Helpers/MediaQueries';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledBackground = styled.div`
  border: 1px solid yellowgreen;
  background: yellowgreen;
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 2.5rem;
    height: auto;
    margin: 0;
    margin-bottom: 78px;
    margin-block-end: 0;
    margin-block-start: 0;
  }

  @media ${MediaQueries.aboveTablet} {
    height: 6rem;

    p {
      font-size: 4rem;

    }
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
    <StyledWrapper>
      <StyledBackground>
        <p>{transpose()}</p>
      </StyledBackground>
    </StyledWrapper>
  );
};

export default TransposedChord;
