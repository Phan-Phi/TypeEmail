import { Tab, Tabs } from "@mui/material";
import { useMemo } from "react";

type Props = {
  value: { id: number; name: string }[];
  id: number;
  onChange?: (event: React.SyntheticEvent, newValue: number) => void;
};

export default function TabsMUI(props: Props) {
  const { value, onChange, id } = props;

  const renderTab = useMemo(() => {
    return value.map((el, idx) => {
      return (
        <Tab disableRipple={true} key={idx} label={el.name} value={el.id} />
      );
    });
  }, [value]);

  return (
    <Tabs value={id} onChange={onChange}>
      {renderTab}
    </Tabs>
  );
}
