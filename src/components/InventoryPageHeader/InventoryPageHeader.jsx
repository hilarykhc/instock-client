import React from 'react';
import searchImage from '../../assets/Icons/search-24px.svg';
import './InventoryPageHeader.scss'
import { useNavigate } from 'react-router-dom';




const InventoryPageHeader = () => {
  const navigate = useNavigate();
  return (
    <div className='inventory-header'>
      <section className="inventory-header__wrapper">
        <h2 className="inventory-header__title">Inventory</h2>
        <form className="inventory-header__search">
          <img
            className="inventory-header__search-img"
            src={searchImage}
            alt="Search icon"
          />
          <input
            className="inventory-header__search-input"
            type="text"
            placeholder="Search..."
          />
        </form>
        <button className="inventory-header__btn" onClick={() => navigate('/add-inventory')}>
  +Add New Item
</button>
      </section>
    </div>
  );
};

export default InventoryPageHeader;
