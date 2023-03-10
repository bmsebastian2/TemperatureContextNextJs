import "@/styles/globals.css";
import TemperatureProvider from "../context/TemperatureProvider";

export default function App({ Component, pageProps }) {
  return (
    <TemperatureProvider>
      <Component {...pageProps} />
    </TemperatureProvider>
  );
}
