import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  select: {
    maxWidth: "30rem",
    [theme.breakpoints.up("xs")]: {
      minWidth: "20rem",
    },
  },
}));

const CustomMultipleSelect = ({ label, items, onChange }) => {
  const classes = useStyles();

  const [value, setValue] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    onChange(value);
  }, [value]);

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>

      <Select
        value={value}
        onChange={handleChange}
        multiple
        className={classes.select}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
      >
        {items.map((item) => (
          <MenuItem key={uuidv4()} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

CustomMultipleSelect.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomMultipleSelect;
