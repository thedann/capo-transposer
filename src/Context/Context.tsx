import React, { createContext, useCallback, useContext, useState } from "react";

type AppContextType = {
  capoFret: number;
  updateCapo: (capoFret: number) => void;
};

export const AppContext = createContext<AppContextType>({
  capoFret: 0,
  updateCapo: () => console.log("no context provider"),
});

const ApplicationContextProvider: React.FC = ({ children }) => {
  const [capoFret, setCapoFret] = useState(0);

  const updateCapo = useCallback((fret: number) => {
    setCapoFret(fret);
  }, []);

  return (
    <AppContext.Provider value={{ capoFret, updateCapo }}>
      {children}
    </AppContext.Provider>
  );
};

export default ApplicationContextProvider;
