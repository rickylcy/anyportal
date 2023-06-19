import React, { useState } from "react";
import Box from "@mui/material/Box";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";

function Search() {
  const [input, setInput] = useState("");
  const handleClear = () => {
    console.log("88");
    setInput("");
  };
  const handleSearch = (event) => {
    console.log("set");
    setInput(event.target.value);
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-end",
        mx: 1,
        px: 1,
        pb: 1,
        border: 2,
        borderRadius: 2,
        borderColor: "#999999",
      }}
    >
      <SearchIcon
        sx={{ fontSize: 30, color: "action.active", pt: 0.5 }}
        style={{ color: "#999999" }}
      />
      <TextField
        id="input-with-sx"
        variant="standard"
        placeholder="Search"
        onChange={handleSearch}
        value={input}
        sx={{ bgcolor: "white", color: "white" }}
      />
      <ClearIcon
        onClick={handleClear}
        sx={{ fontSize: 20 }}
        style={{ color: "#999999" }}
      />
    </Box>
  );
}

export default Search;
