import React, { FC, useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../Context/Context';
import MediaQueries from '../Helpers/MediaQueries';

const FretWrapper = styled.div`
  padding: 0 0.25rem;
  flex-grow: 1;
  position: relative;

  @media ${MediaQueries.aboveTablet} {
    /* padding: 0 1.5rem; */
  }
`;

const StyledFret = styled.div<{ capoOn?: boolean }>`
  width: 100%;
  height: 100%;

  background: ${({ capoOn }) => (capoOn ? 'black' : 'none')};
  border-bottom: 1px solid black;
  border-bottom: 1px solid black;

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

interface GuitarFretProp {
  onClick?: () => void;
  number: number;
}

const GuitarFret: FC<GuitarFretProp> = ({ onClick, number }) => {
  const { capoFret } = useContext(AppContext);

  return (
    <FretWrapper onClick={onClick}>
      <StyledNumber>{number + capoFret}</StyledNumber>
      <StyledFret />
    </FretWrapper>
  );
};

export default GuitarFret;
