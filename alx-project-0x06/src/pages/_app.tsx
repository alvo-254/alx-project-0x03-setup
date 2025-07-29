
// pages/_app.tsx
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/store/store";
import { CounterProvider } from "@/context/CounterContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CounterProvider>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </CounterProvider>
  );
}
