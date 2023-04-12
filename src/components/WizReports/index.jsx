import React from "react";
import "./wizReports.scss";
import NotesButton from "../../components/NotesButton";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const WizReports = () => {
  return (
    <div className="wizReports">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "35ch" },
        }}
        noValidate
        autoComplete="off"
      ></Box>
      <div>
        <TextField
          id="outlined-multiline-static"
          multiline
          rows={15}
          placeholder="Fill a report..."
          variant="standard"
        />
      </div>
      <NotesButton />
    </div>
  );
};

export default WizReports;
