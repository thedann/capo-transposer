import React, { FC } from 'react';
import styled from 'styled-components';
import Color from '../Helpers/Colors';

const StyledGuitarString = styled.div`
  width: 2px;
  height: 100%;
  background: ${Color.DarkGrey};
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 1;
`;

const StyledGuitarStringName = styled.div`
  position: absolute;
  top: -1.25rem;
  left: -0.25rem;
`;

interface StringProps {
  name: string;
}

const GuitarString: FC<StringProps> = ({ name }) => (
  <>
    <StyledGuitarString>
      <StyledGuitarStringName>{name}</StyledGuitarStringName>
    </StyledGuitarString>
  </>
);

export default GuitarString;
