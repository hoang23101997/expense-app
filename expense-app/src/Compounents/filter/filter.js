import React from "react";

function Filter() {
  return (
    <div className="d-flex justify-content-between">
      <div className="text-light fs-3 text">Filter by year</div>
      <div>
        <select className="form-select">
          <option value={2023}> 2023 </option>
          <option value={2022}> 2022 </option>
          <option value={2021}> 2021 </option>
          <option value={2020}> 2020 </option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
