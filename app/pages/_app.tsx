import "bootstrap/dist/css/bootstrap.css";
import Navbar from "../components/Navbar";
import "../styles/sheet.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </>
  );
}
