import React, { FC, useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../Context/Context";
import GuitarFret from "./GuitarFret";

const Container = styled.div`
  min-width: 500px;
  max-width: 800px;
  height: 2rem;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
`;

interface Fret {
  onCapo?: boolean;
}

const GuitarNeck: FC = () => {
  const frets: Fret[] = [{}, {}, {}, {}, {}];

  const { capoFret, updateCapo } = useContext(AppContext);

  return (
    <Container>
      {frets.map((fret, index) => (
        <GuitarFret
          onClick={() => updateCapo(index + 1)}
          capoOn={capoFret === index + 1}
        />
      ))}
    </Container>
  );
};

export default GuitarNeck;
