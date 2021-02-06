import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";

import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 200,
    height: "40px",
    backgroundColor: "white",
    width:"80px"
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

export default function Result({ type, selected }) {
  const classes = useStyles();
  const [input, setInput] = useState("");
  useEffect(() => {
    console.log(selected);

    let str = type+'-';
    selected.map((val,index) => {
        if(selected.length-1==index)
        {str = str + val.value}
        else{
      str = str + val.value+',';}
    });
    console.log(str);
    setInput(str);
  }, [selected, type]);

  useEffect(() => {
    console.log(input);
  }, [input]);

  const handleChange = (e) => {};

  return (
    <div className={classes.col}>
      <p className={classes.text}>Result</p>
      <FormControl variant="outlined" className={classes.formControl}>
    
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={input}
          style={{ backgroundColor: "white", height: "40px", }}
          onChange={handleChange}
          input={<OutlinedInput labelWidth={0} name="members" id="members" />}
        >
             <MenuItem key={input} value={input}>
               {input}
              </MenuItem>
          {selected.map((val) => {
            return (
              <MenuItem key={val.value} value={val.value}>
                {val.value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
