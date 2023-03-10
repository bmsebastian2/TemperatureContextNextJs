import VentanaAutomatico from "../components/VentanaAutomtico";
import Temeperature from "../components/Temperature";
import { useContext } from "react";
import { TemperatureContext } from "@/context/TemperatureProvider";
const Index = () => {
  const { temperature, setTemperature } = useContext(TemperatureContext);
  return (
    <div
      style={{
        minHeight: "80vh",
        width: "25vw",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <VentanaAutomatico temp={temperature} />
      <h2>{`Temperature : ${temperature}`}</h2>
      <Temeperature temp={temperature} setTemp={setTemperature} />
    </div>
  );
};

export default Index;
