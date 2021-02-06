import React, { Component, useEffect, useState } from "react";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import PropTypes from "prop-types";
import Select, { components } from "react-select";
import Checkbox from "@material-ui/core/Checkbox";

const style = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "0.2px ridge lightgrey",
    color: state.isSelected ? "#00008b" : "grey",
    padding: "10 0",
  }),
  container: provided => ({
    ...provided,
    width: 200
  })
 
};
function Option(props) {
  const { data, innerRef, innerProps } = props;

  return !data.custom ? (
    <div>
      <components.Option {...props}>
        <Checkbox style={{ color: "black" }} checked={props.isSelected} />{" "}
        <label style={{ fontWeight: "500" }}>{props.label}</label>
      </components.Option>
    </div>
  ) : (
    <div
      style={{
        position: "-webkit-sticky",
        position: "sticky",
        height: "60px",
        justifyContent: "center",
        display: "flex",
        alignItems: "center",
      }}
    >
      <span style={{ margin: "auto 30px", color: "black", fontWeight: "600" }}>
        Clear
      </span>
      <span style={{ color: "green", fontWeight: "600" }}>Submit</span>
    </div>
  );
}

class Dropdown extends Component {
  static defaultProps = {
    options: [],
  };

  render() {
    const {
      options,
      onChangeCallback,
      selected,
      setSelected,
      ...otherProps
    } = this.props;
    const handleChange = (e) => {
      setSelected(e);
    };

    return (
      <div>
        <p style={{ margin: "10px 0px", fontWeight: 500 }}>Dropdown</p>
        <Select
          styles={style}
          closeMenuOnSelect={false}
          maxMenuHeight={250}
          placeholder={'Search'}
          isMulti
          name="search"
          controlShouldRenderValue={false}
          components={{ Option }}
          options={[{ title: "*", path: "" }, ...options, { custom: true }]}
          hideSelectedOptions={false}
          backspaceRemovesValue={false}
          onChange={(e) => {
            onChangeCallback(e);
            handleChange(e);
          }}
          theme={(theme) => ({
            ...theme,

            colors: {
              ...theme.colors,
              primary25: "white",
              primary: "white",
            },
          })}
          {...otherProps}
        />
      </div>
    );
  }
}

export default Dropdown;
