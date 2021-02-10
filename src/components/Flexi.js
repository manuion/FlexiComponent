import React, { useState, useEffect } from "react";

const Flexi = ({ onSubmit, config }) => {
  const [inputVal, setInputVal] = useState("");
  const [dropdownVal, setDropdownVal] = useState("");

  useEffect(() => {
  }, []);

  const changeInputHandler = e => {
    setInputVal(e.target.value);
  };

  const changeDropDownHandler = e => {
    setDropdownVal(e.target.value);
  };

  const formSubmitHandler = e => {
    e.preventDefault();
    onSubmit({ name: inputVal, place: dropdownVal });
  };

  return (
    <div>
      
      <form>
        {(config.length > 0) ?config.map((val, index) => {
          if (val.type === "TextField") {
            return (
              <div>
                <label htmlFor={val.label}>{val.label}:</label>
                <input type="text" id={val.label} onChange={changeInputHandler} />
              </div>
            );
          }
          if (val.type === "DropDown") {
            return (
              <div>
                <label htmlFor={val.label}>{val.label}:</label>
                <select type="text" id={val.label} onChange={changeDropDownHandler}>
                  <option value="" />
                  {val.values.map(ddOption => {
                    return <option value={ddOption}>{ddOption}</option>;
                  })}
                </select>
              </div>
            );
          }
        }): <p>No Data</p> }
        <button type="submit" onClick={formSubmitHandler}>
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Flexi;
