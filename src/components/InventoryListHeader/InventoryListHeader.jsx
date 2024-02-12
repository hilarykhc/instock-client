import React from 'react';
import HeaderItem from '../HeaderItem/HeaderItem';
import './InventoryListHeader.scss';

const InventoryListHeader = ({ onSort }) => {
  const handleSort = (criteria) => {
    onSort(criteria);
  };
  
  return (
    <div className="inventory-list">
      <div className="header-row">
        <HeaderItem className="__name" onSort={() => handleSort('item_name')}>
          Inventory Item
        </HeaderItem>
        <HeaderItem
          className="__category"
          onSort={() => handleSort('category')}
        >
          Category
        </HeaderItem>
        <HeaderItem className="__status" onSort={() => handleSort('status')}>
          Status
        </HeaderItem>
        <HeaderItem
          className="__quantity"
          onSort={() => handleSort('quantity')}
        >
          Qty
        </HeaderItem>
        <HeaderItem
          className="__warehouse"
          onSort={() => handleSort('warehouse_name')}
        >
          Warehouse
        </HeaderItem>
        <div className="header-row__actions header-row__header-item">
          Actions
        </div>
      </div>
    </div>
  );
};

export default InventoryListHeader;
