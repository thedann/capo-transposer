import React, { FC, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { AppContext } from '../Context/Context';
import chordGrip from '../Helpers/ChordGrip';
import { Chord } from '../Helpers/Chords';
import { fretType } from '../Helpers/FretType';

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
  align-items: center;

  position: relative;
  z-index: 2;
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
  z-index: 2;
  visibility: ${({ shouldBeVisible: toBePlayedAt }) =>
    toBePlayedAt ? 'visible' : 'hidden'};
`;

interface GuitarFretProp {
  onClick?: () => void;
  fretNumber: number;
  guitarStringsThatShouldBePlayedAtThisFret: fretType[];
}

const GuitarFret: FC<GuitarFretProp> = ({
  onClick,
  fretNumber,
  guitarStringsThatShouldBePlayedAtThisFret,
}) => {
  const { capoFret, currentChord } = useContext(AppContext);
  const visuallyFirstFretThatCanBePlayed = 1;

  const renderDots = (fretToBePlayed: fretType, index: number) => {
    return (
      <StyledDot
        key={index}
        shouldBeVisible={dotShouldBeVisible(fretToBePlayed)}
      />
    );
  };

  const dotShouldBeVisible = (toBePlayedAt: fretType) => {
    if (capoFret > 0) {
      return !!toBePlayedAt && visuallyFirstFretThatCanBePlayed != toBePlayedAt
        ? toBePlayedAt
        : null;
    }
    return !!toBePlayedAt ? toBePlayedAt : null;
  };

  const calculateFretNumber = (capo: number, fret: number) => {
    if (capo > 1) {
      return capo + fret - 1;
    }

    return fret;
  };

  if (currentChord === Chord.C && capoFret > 1) {
    console.log({ guitarStringsThatShouldBePlayedAtThisFret });
  }

  return (
    <FretWrapper onClick={onClick}>
      <StyledNumber>
        {capoFret > 0 ? calculateFretNumber(capoFret, fretNumber) : fretNumber}
      </StyledNumber>
      <StyledFret>
        {guitarStringsThatShouldBePlayedAtThisFret.map((string, index) =>
          renderDots(string, index)
        )}
        {/* <StyledDot toBePlayed={currentGrip[fretNumber]} /> */}
      </StyledFret>
    </FretWrapper>
  );
};

export default GuitarFret;
