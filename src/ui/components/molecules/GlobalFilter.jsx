import React from "react";
import { useAsyncDebounce } from "react-table";
import PropTypes from "prop-types";

// This function will be responsible for filtering data received from the table component
const GlobalFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) => {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <label>
      Search:
      {" "}
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
        type="search"
        aria-controls="dataTable"
      />
    </label>
  );
};

GlobalFilter.propTypes = {
  preGlobalFilteredRows: PropTypes.oneOfType([PropTypes.any]).isRequired,
  globalFilter: PropTypes.oneOfType([PropTypes.func]),
  setGlobalFilter: PropTypes.func.isRequired,
};

GlobalFilter.defaultProps = {
  globalFilter: ()=>{},
};

export default GlobalFilter;
