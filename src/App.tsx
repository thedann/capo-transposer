import React from "react";
import styled from "styled-components";
import "./App.css";
import GuitarNeck from "./Components/GuitarNeck";
import ApplicationContextProvider from "./Context/Context";

const MainWrapper = styled.div`
  display: flex;
`;

function App() {
  return (
    <ApplicationContextProvider>
      <div className="App">
        <MainWrapper>
          <GuitarNeck />
        </MainWrapper>
      </div>
    </ApplicationContextProvider>
  );
}

export default App;
