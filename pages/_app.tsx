import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "components/Layout/Layout";
import ComponentThemeProvider from "hocs/ThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ComponentThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ComponentThemeProvider>
    </>
  );
}
