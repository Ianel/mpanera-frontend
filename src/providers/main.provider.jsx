import { createContext, useState } from "react";

export const MainContext = createContext();

const MainProvider = ({ children }) => {
  const [houses, setHouses] = useState([]);
  const [houseType, setHouseType] = useState("maisons");
  const [houseId, setHouseId] = useState("");

  return (
    <MainContext.Provider
      value={{
        houses,
        setHouses,
        houseType,
        setHouseType,
        houseId,
        setHouseId,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export default MainProvider;
