import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { TreeItem, TreeView } from "@mui/lab";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useTheme } from "@mui/material";

export default function MuiTreeView() {
  return (
    <TreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      sx={{
        height: 240,
        flexGrow: 1,
        maxWidth: 400,
        overflowY: "auto",
        color: "black",

        "&.MuiTreeView-root": {
          "& .MuiTreeItem-label": {
            fontSize: "0.9rem",
            fontWeight: 800,
            lineHeight: "1.5rem",
          },

          "&.MuiTreeItem-content": {
            fontSize: "0.9rem",
            fontWeight: 800,
            lineHeight: "1.5rem",
          },

          "& .Mui-focused,Mui-selected,Mui-expanded": {
            color: "#C0AA83",
            backgroundColor: "white",
          },
        },
      }}
    >
      <TreeItem nodeId="1" label="Danh mục cấp 1">
        <TreeItem nodeId="2" label="Danh mục cấp 2" />
      </TreeItem>
      <TreeItem nodeId="5" label="Danh mục cấp 1">
        <TreeItem nodeId="6" label="Danh mục cấp 2">
          <TreeItem nodeId="8" label="Danh mục cấp 3" />
        </TreeItem>
      </TreeItem>
    </TreeView>
  );
}
