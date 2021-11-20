import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import PropTypes from "prop-types";
import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
} from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import { makeStyles } from "@material-ui/styles";
import { isFunction } from "../../utility/Validator";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "left",
  },
  getContentAnchorEl: null,
  variant: "menu",
  autoFocus: false,
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      maxWidth: 250,
    },
  },
};

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    [theme.breakpoints.down("xs")]: {
      width: "auto",
    },
  },
  select: {
    width: "20rem",
    "@media (max-width:400px)": {
      width: "18rem",
    },
    "@media (max-width:300px)": {
      width: "15rem",
    },
  },
}));

const CustomMultipleSelect = forwardRef(({ label, items, onChange }, ref) => {
  const classes = useStyles();

  const [value, setValue] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // To exposed to parent components
  useImperativeHandle(ref, () => ({
    getValues: () => value,
  }));

  useEffect(() => {
    if (isFunction(onChange)) onChange(value);
  }, [value]);

  const renderValue = (selected) =>
    items
      .filter((item) => selected.indexOf(item.id) !== -1)
      .map((item) => item.name)
      .join(", ");

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="multiple-select-label">{label}</InputLabel>

      <Select
        value={value}
        onChange={handleChange}
        multiple
        className={classes.select}
        labelId="multiple-select-label"
        id="multiple-select"
        renderValue={(selected) => renderValue(selected)}
        MenuProps={MenuProps}
      >
        {items.map((item) => (
          <MenuItem key={uuidv4()} value={item.id}>
            <Checkbox checked={value.indexOf(item.id) > -1} color="primary" />
            <ListItemText primary={item.name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
});

CustomMultipleSelect.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default CustomMultipleSelect;
