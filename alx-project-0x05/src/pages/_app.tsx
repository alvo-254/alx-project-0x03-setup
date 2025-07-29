import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CounterProvider } from "@/context/CounterContext";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <CounterProvider>
      <Component {...pageProps} />
    </CounterProvider>
  );
}

