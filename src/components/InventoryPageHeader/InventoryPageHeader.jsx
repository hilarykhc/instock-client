import React from 'react';
import searchImage from '../../assets/Icons/search-24px.svg';

const InventoryPageHeader = () => {
  return (
    <header className="header">
      <h2 className="header__title">Inventory</h2>
      <form className="header__search">
        <img
          className="header__search-img"
          src={searchImage}
          alt="Search icon"
        />
        <input
          className="header__search-input"
          type="text"
          placeholder="Search..."
        />
      </form>
        <button className="header__btn">+Add New Item</button>
    </header>
  );
};

export default InventoryPageHeader;
