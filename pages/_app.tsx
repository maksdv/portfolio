import Header from "../components/layout/Header";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Header />
    </>
  );
}

export default MyApp;
