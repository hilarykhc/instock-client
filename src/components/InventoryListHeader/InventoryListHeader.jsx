import React from 'react';
import HeaderItem from '../HeaderItem/HeaderItem';
import './InventoryListHeader.scss';

const InventoryListHeader = () => {
  return (
    <div className="inventory-list">
      <div className="header-row">
        <HeaderItem className="__name">Inventory Item</HeaderItem>
        <HeaderItem className="__category">Category</HeaderItem>
        <HeaderItem className="__status">Status</HeaderItem>
        <HeaderItem className="__quantity">Qty</HeaderItem>
        <HeaderItem className="__warehouse">Warehouse</HeaderItem>
        <div className="header-row__actions header-row__header-item">Actions</div>
      </div>
    </div>
  );
};

export default InventoryListHeader;
