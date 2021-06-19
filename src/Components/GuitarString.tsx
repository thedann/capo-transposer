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
`;



interface StringProps {
  toBePlayedAt?: null | number;
}

const GuitarString: FC<StringProps> = ({ toBePlayedAt }) => (
  <StyledGuitarString>
    {/* {toBePlayedAt && <StyledDot stringToBePlayedAt={toBePlayedAt} />} */}
  </StyledGuitarString>
);

export default GuitarString;
