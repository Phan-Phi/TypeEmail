import React, { createContext } from "react";
import useSWR from "swr";

type CONTEXT = {
  name: string;
};

export const ThemeSettingContext = createContext({});

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function SettingContext({ children }) {
  const { data, mutate } = useSWR(
    "https://mic.t-solution.vn/api/v2/pages/?fields=%2A&locale=vi&type=product.ProductDetailPage&limit=6&search=phấn",
    fetcher
  );
  console.log(
    "🚀 ~ file: SettingContext.tsx:14 ~ SettingContext ~ mutate",
    mutate
  );

  if (data == undefined) {
    return;
  }

  return (
    <ThemeSettingContext.Provider value={data.items}>
      {children}
    </ThemeSettingContext.Provider>
  );
}
