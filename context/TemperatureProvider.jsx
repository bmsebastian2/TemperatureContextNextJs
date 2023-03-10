import { createContext, useContext, useState } from "react";

export const TemperatureContext = createContext();

const TemperatureProvider = ({ children }) => {
  const [temperature, setTemperature] = useState(50);

  return (
    <TemperatureContext.Provider value={{ temperature, setTemperature }}>
      {children}
    </TemperatureContext.Provider>
  );
};

export default TemperatureProvider;

export const useUserContext = () => useContext(UserContext);
