import React, { useState } from "react";
import chevronImage from "../../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import { Link } from "react-router-dom";
import Delete from "../Delete/Delete";
import "./InventoryListItem.scss";
const InventoryListItem = (props) => {
  const { category, id, item_name, quantity, status, warehouse_name } =
    props.inventoryItem;
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const handleDeleteClick = (itemId) => {
    setSelectedItemId(itemId);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (selectedItemId === null) return;
    props.onDelete(selectedItemId);
    setIsDeleteModalOpen(false);
    setSelectedItemId(null);
  };
  return (
    <div className="inventory-row">
      <div className="inventory-row__col inventory-row__col--name">
        <h4 className="inventory-row__cell-header inventory-row__cell-header-top">
          INVENTORY ITEM
        </h4>
        <Link className="inventory-row__link" to={`/inventory/${id}`}>
          {item_name}
          <img
            className="inventory-row__icon"
            src={chevronImage}
            alt="Right Arrow Icon"
          />
        </Link>
      </div>
      <div className="inventory-row__col inventory-row__col--category">
        <h4 className="inventory-row__cell-header">CATEGORY</h4>
        {category}
      </div>
      <div className="inventory-row__col inventory-row__col--status">
        <h4 className="inventory-row__cell-header inventory-row__cell-header-top">
          STATUS
        </h4>

        <div
          className={`inventory-row__col--status--${
            status === "In Stock" ? "green" : "red"
          }`}
        >
          {status}
        </div>
      </div>

      <div className="inventory-row__col inventory-row__col--quantity">
        <h4 className="inventory-row__cell-header">QTY</h4>
        <div className="inventory-row__contact-info">
          <p className="inventory-row__quantity">{quantity}</p>
        </div>
      </div>

      <div className="warehouse__container">
        <div className="inventory-row__col inventory-row__col--warehouse">
          <h4 className="inventory-row__cell-header">WAREHOUSE</h4>
          <div className="inventory-row__contact-info">
            <p className="inventory-row__quantity">{warehouse_name}</p>
          </div>
        </div>
      </div>
      {/* Edit & Delete Button */}
      <div className=" inventory-row__col--actions">
        <button
          className="inventory-row__icon-button"
          onClick={() => handleDeleteClick(id)}
        >
          <img className="inventory-row__icon" src={deleteIcon} alt="delete" />
        </button>
        {isDeleteModalOpen && (
          <Delete
            styleName="inventory"
            list="the inventory list"
            name={item_name}
            onDeleteConfirm={handleDeleteConfirm}
            onClose={() => setIsDeleteModalOpen(false)}
          />
        )}
        <Link
          to={`/inventory/edit/?id=${id}`}
          className="inventory-row__icon-button inventory-row__icon-button--edit"
        >
          <img className="inventory-row__icon" src={editIcon} alt="edit" />
        </Link>
      </div>
    </div>
  );
  // (
  //   <>
  //     <p>{item_name}</p>
  //     <img src={chevronImage} alt="Chevron Icon" />
  //     <p>{category}</p>
  //     <p>{status}</p>
  //     <p>{quantity}</p>
  //     <p>{warehouse_name}</p>
  //     <div>
  //       <img src={deleteIcon} alt="Delete Icon" />
  //       <img src={editIcon} alt="Edit Icon" />
  //     </div>
  //   </>
  // );
};

export default InventoryListItem;
