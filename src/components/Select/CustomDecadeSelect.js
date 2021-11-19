import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import PropTypes from "prop-types";
import CustomMultipleSelect from "./CustomMultipleSelect";
import { decades, decadesYearsMapping } from "../../constants/Decades";

const CustomDecadeSelect = forwardRef(({ onChange }, ref) => {
  const selectRef = useRef();

  const [years, setYears] = useState([]);

  // To exposed to parent components
  useImperativeHandle(ref, () => ({
    getYears: () => years,
  }));

  const handleChange = () => {
    const selectedDecadeIds = selectRef.current.getValues();

    const selectedYears = [];

    selectedDecadeIds.forEach((decadeId) => {
      selectedYears.push(...decadesYearsMapping[decadeId]);
    });

    setYears(selectedYears);
  };

  useEffect(() => {
    onChange(years);
  }, [years]);

  return (
    <CustomMultipleSelect
      label="Decade"
      items={decades}
      onChange={handleChange}
      ref={selectRef}
    />
  );
});

CustomDecadeSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default CustomDecadeSelect;
