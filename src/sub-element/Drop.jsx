import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 200,
    width:"80px",
    height: "40px",
    backgroundColor: "white",
  },
  col: {
    display: "flex",
    flexDirection: "column",
  },
  text: {
    margin: "10px 0px",
    fontWeight: 500,
  },
}));

export default function Drop({ type, setType }) {
  const classes = useStyles();

  const handleChange = (e) => {
    setType(e.target.value);
  };

  return (
    <div className={classes.col}>
      <p className={classes.text}>Default</p>
      <FormControl variant="outlined" className={classes.formControl}>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={type}
          style={{ backgroundColor: "white", height: "40px" }}
          onChange={handleChange}
          input={<OutlinedInput labelWidth={0} name="members" id="members" />}
        >
          <MenuItem value={"Colors"}>Colors</MenuItem>
          <MenuItem value={"Components"}>Components</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
