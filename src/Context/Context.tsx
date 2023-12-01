import React, { createContext, useCallback, useState } from "react";
import { Chord } from "../Helpers/Chords";

export type AppContextType = {
  capoFret: number;
  updateCapo: (capoFret: number) => void;
  currentChord: Chord;
  updateCurrentChord: (chord: Chord) => void;
};

export const AppContext = createContext<AppContextType>({
  capoFret: 0,
  updateCapo: () => console.log("no context provider"),
  currentChord: Chord.C,
  updateCurrentChord: () => console.log("no context provider"),
});

const ApplicationContextProvider: React.FC = ({ children }) => {
  const [capoFret, setCapoFret] = useState(0);
  const [currentChord, setChord] = useState(Chord.C);

  const updateCapo = useCallback((fret: number) => {
    setCapoFret(fret);
  }, []);

  const updateCurrentChord = useCallback((chord: Chord) => {
    setChord(chord);
  }, []);

  return (
    <AppContext.Provider
      value={{ capoFret, updateCapo, currentChord, updateCurrentChord }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ApplicationContextProvider;
