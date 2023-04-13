import React from "react";
import "./personInfo.scss";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const PersonInfo = ({ char }) => {
  return (
    <Box
      className="boxbox"
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "80ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name:"
          defaultValue={char?.name}
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="E-mail:"
          defaultValue={char?.email}
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Date of Birth:"
          defaultValue={char?.birthday}
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Education:"
          defaultValue={char?.education}
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Additional references"
          defaultValue="CV + "
        />
      </div>
    </Box>
  );
};
export default PersonInfo;
