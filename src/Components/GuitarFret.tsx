import React, { FC } from 'react';
import styled from 'styled-components';
import MediaQueries from '../Helpers/MediaQueries';

const FretWrapper = styled.div`
  padding: 0 0.25rem;
  flex-grow: 1;
  position: relative;

  :hover {
    cursor: pointer;
  }

  @media ${MediaQueries.aboveTablet} {
    /* padding: 0 1.5rem; */
  }
`;

const StyledFret = styled.div<{ capoOn?: boolean }>`
  width: 100%;
  height: 100%;

  background: ${({ capoOn }) => (capoOn ? 'black' : 'none')};
  border-left: 1px solid black;
  border-right: 1px solid black;

  position: relative;
  z-index: 1;
`;

const StyledNumber = styled.p`
  position: absolute;
  top: -1.5rem;
  left: 0;
  right: 0;
  margin: 0;
  margin-left: auto;
  margin-right: auto;
`;

const StyledCapo = styled.div`
  width: 1rem;
  height: 110%;
  background: black;
  z-index: 1;
  position: absolute;
  top: -0.5rem;
  left: 1rem;
`;

const StyledCapoCurve = styled.div`
  background: black;
  z-index: -100;
  position: absolute;
  bottom: -0.5rem;
  left: 1rem;
  height: 0.5rem;
  width: 1.5rem;
  border-bottom-right-radius: 40px;
`;

const StyledDot = styled.div<{ stringToBePlayedAt?: number }>`
  border-radius: 40px;
  border: 1px solid black;
  width: 10px;
  height: 10px;
  position: absolute;
  left: 2rem;
`;

interface GuitarFretProp {
  capoOn?: boolean;
  onClick?: () => void;
  number: number;
}

const GuitarFret: FC<GuitarFretProp> = ({ capoOn, onClick, number }) => {
  return (
    <FretWrapper onClick={onClick}>
      <StyledNumber>{number}</StyledNumber>
      <StyledFret />
      {capoOn && <StyledCapo />}
      {capoOn && <StyledCapoCurve />}
    </FretWrapper>
  );
};

export default GuitarFret;
