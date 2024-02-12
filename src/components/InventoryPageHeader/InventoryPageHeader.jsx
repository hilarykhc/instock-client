import React from "react";
import searchImage from "../../assets/Icons/search-24px.svg";
import "./InventoryPageHeader.scss";
import { Link } from 'react-router-dom';

const InventoryPageHeader = () => {
  return (
    <div className="inventory-header">
      <section className="inventory-header__wrapper">
        <h2 className="inventory-header__title">Inventory</h2>
        <div className="div-container-header">
          <form className="inventory-header__search">
            {/* <img
            className="inventory-header__search-img"
            src={searchImage}
            alt="Search icon"
          /> */}
            <input
              className="inventory-header__search-input"
              type="text"
              placeholder="Search..."
            />
          </form>

          {/* <button className="inventory-header__btn">+ Add New Item</button> */}
          <button className="inventory-header__btn"><Link to="/add-inventory">+ Add New Item</Link></button>
        </div>
      </section>
    </div>
  );
};

export default InventoryPageHeader;
