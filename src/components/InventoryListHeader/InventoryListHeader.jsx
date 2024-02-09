import React from 'react';
import HeaderItem from '../HeaderItem/HeaderItem';

const InventoryListHeader = () => {
  return (
    <>
      <HeaderItem>Inventory Item</HeaderItem>
      <HeaderItem>Category</HeaderItem>
      <HeaderItem>Status</HeaderItem>
      <HeaderItem>Qty</HeaderItem>
      <HeaderItem>Warehouse</HeaderItem>
      <div>Actions</div>
    </>
  );
};

export default InventoryListHeader;
