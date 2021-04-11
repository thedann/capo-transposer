import React, { FC } from "react";
import styled from "styled-components";

const StyledFret = styled.div<{ capoOn?: boolean }>`
  width: 4px;
  height: 100%;

  background: ${({ capoOn }) => (capoOn ? "black" : "white")};
  border: 1px solid black;
`;

interface GuitarFretProp {
  capoOn?: boolean;
  onClick?: () => void;
}

const GuitarFret: FC<GuitarFretProp> = ({ capoOn, onClick }) => {
  return <StyledFret onClick={onClick} capoOn={capoOn} />;
};

export default GuitarFret;
