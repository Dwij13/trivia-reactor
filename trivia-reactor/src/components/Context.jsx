
import React, { createContext, useState } from "react";

export const AppContext = createContext();

const MainContext = ({ children }) => {
  const [dark, setDark] = useState(false);
  const [click, setClick] = useState("quizz");
  const [score, setScore] = useState(0);


  return (
    <AppContext.Provider
      value={{
        dark,
        setDark,
        click,
        setClick,
        score,
        setScore
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default MainContext;