import React from 'react';
import chevronImage from '../../assets/Icons/chevron_right-24px.svg';
import deleteIcon from '../../assets/Icons/delete_outline-24px.svg';
import editIcon from '../../assets/Icons/edit-24px.svg';
const InventoryListItem = (props) => {
  const {
    category,
    description,
    id,
    item_name,
    quantity,
    status,
    warehouse_name,
  } = props.inventoryItem;
  return (
    <>
      <p>{item_name}</p>
      <img src={chevronImage} alt="Chevron Icon" />
      <p>{category}</p>
      <p>{status}</p>
      <p>{quantity}</p>
      <p>{warehouse_name}</p>
      <div>
        <img src={deleteIcon} alt="Delete Icon" />
        <img src={editIcon} alt="Edit Icon" />
      </div>
    </>
  );
};

export default InventoryListItem;
