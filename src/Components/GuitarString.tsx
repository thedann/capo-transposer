import React, { FC } from 'react';
import styled from 'styled-components';
import Color from '../Colors';

const StyledGuitarString = styled.div`
  width: 100%;
  height: 2px;
  background: ${Color.LightGrey};
  display: flex;
  justify-content: space-between;
`;

const StyledDot = styled.div`
  border-radius: 40px;
  border: 1px solid black;
  width: 4px;
  height: 4px;
`;

const GuitarString: FC = () => (
  <StyledGuitarString>
    {/* <StyledDot />
    <StyledDot />
    <StyledDot />
    <StyledDot />
    <StyledDot />
    <StyledDot /> */}
  </StyledGuitarString>
);

export default GuitarString;