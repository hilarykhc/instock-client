import React from "react";
import "./WarehousePageHeader.scss";

const WarehousePageHeader = () => {
  return (
    <div className="warehouse-header">
      <section className="warehouse-header__wrapper">
        <h2 className="warehouse-header__title">Warehouse</h2>
        <div className="div-container-header">
          <form className="warehouse-header__search">
            <input
              className="warehouse-header__search-input"
              type="text"
              placeholder="Search..."
            />
          </form>

          <button className="warehouse-header__btn">+ Add New Item</button>
        </div>
      </section>
    </div>
  );
};

export default WarehousePageHeader;
