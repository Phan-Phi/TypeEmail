import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "components/Layout/Layout";
import ComponentThemeProvider from "hocs/ThemeProvider";
import SettingContext from "context/SettingContext";
import { Box } from "@mui/material";
import { Outfit } from "hocs/localFont";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ComponentThemeProvider>
        {/* <Layout>
          <Component {...pageProps} />
        </Layout> */}
        <SettingContext>
          <main>
            <Component {...pageProps} />
          </main>
        </SettingContext>
      </ComponentThemeProvider>
    </>
  );
}
