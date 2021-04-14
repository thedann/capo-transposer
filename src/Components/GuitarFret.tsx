import React, { FC } from 'react';
import styled from 'styled-components';
import MediaQueries from '../Helpers/MediaQueries';

const FretWrapper = styled.div`
  padding: 0 0.5rem;

  :hover {
    cursor: pointer;
  }

  @media ${MediaQueries.aboveTablet} {
    padding: 0 1.5rem;
  }
`;

const StyledFret = styled.div<{ capoOn?: boolean }>`
  width: 0.25rem;
  height: 100%;

  background: ${({ capoOn }) => (capoOn ? 'black' : 'white')};
  border: 1px solid black;
  position: relative;
`;

const StyledNumber = styled.p`
  position: absolute;
  top: -1.5rem;
  padding-right: 1px;
  margin: 0;
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
      <StyledFret capoOn={capoOn} />
    </FretWrapper>
  );
};

export default GuitarFret;
