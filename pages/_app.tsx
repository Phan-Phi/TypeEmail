import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "components/Layout/Layout";
import ComponentThemeProvider from "hocs/ThemeProvider";
import SettingContext from "context/SettingContext";
import { Box } from "@mui/material";
import { Outfit } from "hocs/localFont";
import ThemeProvider2 from "hocs/ThemeProvider2";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider2>
        {/* <Layout>
          <Component {...pageProps} />
        </Layout> */}
        <SettingContext>
          <main>
            <Component {...pageProps} />
          </main>
        </SettingContext>
      </ThemeProvider2>
      {/* <ComponentThemeProvider>
      
      </ComponentThemeProvider> */}
    </>
  );
}
