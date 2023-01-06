import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  Chip,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Input,
  InputBase,
  MenuItem,
  Pagination,
  Radio,
  RadioGroup,
  Select,
  Slider,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TreeItem, TreeView } from "@mui/lab";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MuiTreeView from "components/MuiTreeView";

export default function DemoTheme() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ backgroundColor: "white" }}>
      <Box sx={{ color: "red", height: "1000px" }}>
        <Button variant="contained">sadasd</Button>
        <Button variant="outlined">sadasd</Button>

        <FormControl fullWidth>
          <FormLabel>label</FormLabel>

          <InputBase placeholder="Input caption" />
        </FormControl>

        <FormControl fullWidth>
          <FormLabel>label</FormLabel>

          <InputBase
            placeholder="Input caption"
            error={true}
            defaultValue="asdasd"
          />
        </FormControl>

        <Box sx={{ width: "100%" }}>
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Item One" />
              <Tab label="Item Two" />
              <Tab label="Item Three" />
            </Tabs>
          </Box>
        </Box>

        <Chip label="Category" />

        <Pagination count={10} />

        <Divider />

        <Slider
          defaultValue={50}
          aria-label="Default"
          valueLabelDisplay="auto"
          min={0}
          max={1000000}
        />

        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />

        <MuiTreeView />
      </Box>
    </Container>
  );
}
