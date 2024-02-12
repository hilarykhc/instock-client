import React from "react";
import "./InventoryPageHeader.scss";
import { useState } from "react";

const InventoryPageHeader = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="inventory-header">
      <section className="inventory-header__wrapper">
        <h2 className="inventory-header__title">Inventory</h2>
        <div className="div-container-header">
          <form
            className="inventory-header__search"
            onSubmit={handleFormSubmit}
          >
            <input
              className="inventory-header__search-input"
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </form>

          <button className="inventory-header__btn">+ Add New Item</button>
        </div>
      </section>
    </div>
  );
};

export default InventoryPageHeader;
