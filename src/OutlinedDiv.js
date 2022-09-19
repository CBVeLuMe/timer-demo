import React from "react";


const InputComponent = ({ inputRef, ...other }) => <div {...other} />;
const OutlinedDiv = ({ children, label }) => {
  return (
    <TextField
      variant="outlined"
      label={label}
      multiline
      InputLabelProps={{ shrink: true }}
      InputProps={{
        inputComponent: InputComponent
      }}
      inputProps={{ children: children }}
    />
  );
};

export default OutlinedDiv;