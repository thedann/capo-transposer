import React, { FC } from 'react';
import styled from 'styled-components';
import Color from '../Helpers/Colors';

const StyledGuitarString = styled.div`
  width: 2px;
  height: 100%;
  background: ${Color.LightGrey};
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const StyledDot = styled.div<{ stringToBePlayedAt?: number }>`
  border-radius: 40px;
  border: 1px solid black;
  width: 10px;
  height: 10px;
  position: absolute;
  top: -5px;
  left: ${({ stringToBePlayedAt }) =>
    stringToBePlayedAt ? `${stringToBePlayedAt * 15}%` : '1px'};
`;

interface StringProps {
  toBePlayedAt?: null | number;
}

const GuitarString: FC<StringProps> = ({ toBePlayedAt }) => (
  <StyledGuitarString>
    {toBePlayedAt && <StyledDot stringToBePlayedAt={toBePlayedAt} />}
  </StyledGuitarString>
);

export default GuitarString;
