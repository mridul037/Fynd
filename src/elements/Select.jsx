import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Drop from "../sub-element/Drop";
import Dropdown from "../sub-element/Dropdown";
import Result from "../sub-element/Result";
import data1 from "../data/data";
import data2 from "../data/data1";
const useStyles = makeStyles((theme) => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em",
      height: "8px",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 4px rgba(0,0,0,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      outline: "1px solid slategrey",
    },
  },
  card: {
    height: "500px",
    width: "400px",
    backgroundColor: "rgb(241 243 244)",
  },
  row: {
    display: "flex",
    flexDirection: "column",
    margin: "auto 60px",
  },
}));

export default function Selector() {
  const classes = useStyles();
  const [selected, setSelected] = useState([]);
  const [data, setData] = useState([]);
  const [type, setType] = useState("Components");
  useEffect(() => {
    if (type === "Colors") {
      let object2 = data2.reduce((acc, val) => {
        let obj = {};
        obj.value = val;
        obj.label = val;
        acc = [...acc, obj];
        return acc;
      }, []);
      setData(object2);
    } else {
      let object1 = data1.reduce((acc, val) => {
        let obj = {};
        obj.value = val.title;
        obj.label = val.path;
        acc = [...acc, obj];
        return acc;
      }, []);
      console.log(object1);
      setData(object1);
    }
  }, [type]);
  return (
    <Card className={classes.card}>
      <div className={classes.row}>
        <h4>Dropdown with search</h4>
        <div>
          <Drop setType={setType} type={type} />
        </div>
        <div>
          <Dropdown
            options={data}
            selected={selected}
            setSelected={setSelected}
            onChangeCallback={(response) => console.log(response)}
          />
        </div>
        <div>
          <Result type={type} selected={selected} />
        </div>
      </div>
    </Card>
  );
}
