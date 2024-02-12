import React from "react";
import "./WarehousePageHeader.scss";

const WarehousePageHeader = ({
  addWarehouseHandler,
  warehouseSearchTerm,
  onSearchChange,
}) => {
  const handleFormSubmit = (event) => {
    event.preventDefault(); 
  };

  return (
    <div className="warehouse-header">
      <section className="warehouse-header__wrapper">
        <h2 className="warehouse-header__title">Warehouse</h2>
        <div className="div-container-header">
          <form className="warehouse-header__search" onClick={handleFormSubmit}>
            <input
              className="warehouse-header__search-input"
              type="text"
              placeholder="Search..."
              value={warehouseSearchTerm}
              onChange={onSearchChange}
            />
          </form>

          <button
            onClick={addWarehouseHandler}
            className="warehouse-header__btn"
          >
            + Add New Warehouse
          </button>
        </div>
      </section>
    </div>
  );
};

export default WarehousePageHeader;
