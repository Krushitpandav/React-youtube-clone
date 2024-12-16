import { Category } from "@mui/icons-material";
import { Stack } from "@mui/system";
import React from "react";

import { categories } from "../utils/constants";

const Sidebar = ({ selectedCategary, setSelectedCategary }) => (
  <Stack
    direction={"row"}
    sx={{
      overflow: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((Category) => (
      <button
        className="category-btn"
        onClick={() => setSelectedCategary(Category.name)}
        style={{
          background: Category.name === selectedCategary && "#FC1503",
          color: "white",
        }}
      >
        <span
          style={{
            color: Category.name === selectedCategary ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {Category.icon}
        </span>
        <span
          style={{ opacity: Category.name === selectedCategary ? "1" : "0.7" }}
        >
          {Category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
