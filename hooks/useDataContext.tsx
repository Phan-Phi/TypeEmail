import { ThemeSettingContext } from "context/SettingContext";
import { useContext } from "react";

export default function useDataContext() {
  const data = useContext(ThemeSettingContext);

  return data;
}
