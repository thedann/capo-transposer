import React, { FC, useContext, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from '../Context/Context';
import chordGrip from '../Helpers/ChordGrip';
import { Chord } from '../Helpers/Chords';
import MediaQueries from '../Helpers/MediaQueries';

const FretWrapper = styled.div`
  padding: 0 0.25rem;
  flex-grow: 1;
  position: relative;
`;

const StyledFret = styled.div<{ capoOn?: boolean }>`
  width: 100%;
  height: 100%;

  background: ${({ capoOn }) => (capoOn ? 'black' : 'none')};
  border-bottom: 1px solid black;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  position: relative;
  z-index: 1;
`;

const StyledNumber = styled.p`
  position: absolute;
  right: -30%;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
`;

const StyledDot = styled.div<{ shouldBeVisible: number | null }>`
  border-radius: 40px;
  border: 1px solid black;
  background: grey;
  width: 10px;
  height: 10px;
  visibility: ${({ shouldBeVisible: toBePlayedAt }) => (toBePlayedAt ? 'visible' : 'hidden')};
`;

interface GuitarFretProp {
  onClick?: () => void;
  fretNumber: number;
}

const GuitarFret: FC<GuitarFretProp> = ({ onClick, fretNumber }) => {
  const { capoFret, currentChord } = useContext(AppContext);

  const [currentGrip, setCurrentGrip] = useState(
    chordGrip(currentChord, capoFret)
  );
  const [allStrings, setAllStrings] = useState<(number | null)[]>(
    []
  );

  useEffect(() => {
    setCurrentGrip(chordGrip(currentChord, capoFret));
  }, [currentChord]);

  useEffect(() => {
    console.log('updatera capooo', capoFret);

    setAllStrings(
      updateStringsBasedOnCurrentGripAndFretNumber(currentGrip, fretNumber)
    );
  }, [capoFret]);

  const updateStringsBasedOnCurrentGripAndFretNumber = (
    grip: (number | null)[],
    fretNumber: number
  ) => {
    const stringsForThisFret = grip.map((fretForThisString, index) => {
      if (fretForThisString === null) {
        // string should not be played anywhere
        return null;
      }
      if (fretForThisString === fretNumber && capoFret > 0) {
        return fretForThisString + capoFret;
      } else if (fretForThisString === fretNumber) {
        return fretForThisString;
      }
      return null;
    });

    return stringsForThisFret;
  };

  const renderDots = (fretToBePlayed: number | null, index: number) => {
    return (
      <StyledDot
        key={index}
        shouldBeVisible={dotShouldBeVisible(fretToBePlayed)}
      />
    );
  };

  const dotShouldBeVisible = (toBePlayedAt: number | null) => {
    return !!toBePlayedAt && toBePlayedAt != capoFret ? toBePlayedAt : null;
  };

  const calculateFretNumber = (capo: number, fret: number) => {
    if (capo > 1) {
      return capo + fret - 1;
    }

    return fret;
  };

  return (
    <FretWrapper onClick={onClick}>
      <StyledNumber>
        {capoFret > 0 ? calculateFretNumber(capoFret, fretNumber) : fretNumber}
      </StyledNumber>
      <StyledFret>
        {allStrings.map((string, index) => renderDots(string, index))}
        {/* <StyledDot toBePlayed={currentGrip[fretNumber]} /> */}
      </StyledFret>
    </FretWrapper>
  );
};

export default GuitarFret;
