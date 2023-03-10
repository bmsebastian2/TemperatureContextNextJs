import { useContext } from "react";
import { TemperatureContext } from "@/context/TemperatureProvider";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Link from "next/link";
const HeaderCustom = () => {
  const { temperature, setTemperature } = useContext(TemperatureContext);
  return (
    <div>
      <h2>Header Custom</h2>
      <h1>{temperature}</h1>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Button onClick={() => setTemperature(temperature + 1)}>+</Button>
        <Button onClick={() => setTemperature(temperature - 1)}>-</Button>
      </ButtonGroup>
      <Link href={"/"}>Back</Link>
    </div>
  );
};

export default HeaderCustom;
