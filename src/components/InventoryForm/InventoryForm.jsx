import React, { useState, useEffect } from "react";
import "./InventoryForm.scss";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Divider from "../Divider/Divider";
const InventoryForm = ({ inventoryData, onSave }) => {
  const navigate = useNavigate();
  const [inventoryItem, setInventoryItem] = useState({
    warehouse_id: "",
    itemName: "",
    description: "",
    category: "Electronics",
    status: "In Stock",
    warehouse: "Manhattan",
  });

  useEffect(() => {
    if (inventoryData) {
      setInventoryItem(inventoryData);
    }
  }, [inventoryData]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInventoryItem({ ...inventoryItem, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // if (onSave) {
    //   onSave(inventoryItem);
    // }
    if (areAllRequiredFieldsPresent(inventoryItem)) {
      onSave(inventoryItem);
    } else {
      console.log("error");
    }
  };
  const areAllRequiredFieldsPresent = (item) => {
    const requiredFields = [
      "itemName",
      "description",
      "category",
      "status",
      "warehouse",
    ];
    return requiredFields.every((field) => item[field] !== "");
  };
  const cancelHandler = () => {
    navigate("/inventory");
  };
  return (
    <form className="inventory-form" onSubmit={handleSubmit}>
      <h1 className="inventory-form__title">Edit Inventory Item</h1>
      <div className="inventory-form__container">
        <div className="inventory-form__column">
          <h2 className="inventory-form__heading">Item Details</h2>
          <label className="inventory-form__label">Item Name</label>
          <input
            className="inventory-form__input"
            name="itemName"
            value={inventoryItem.itemName}
            onChange={handleChange}
          />

          <label className="inventory-form__label">Description</label>
          <textarea
            className="inventory-form__textarea"
            name="description"
            value={inventoryItem.description}
            onChange={handleChange}
          />

          <label className="inventory-form__label">Category</label>
          <select
            className="inventory-form__select"
            name="category"
            value={inventoryItem.category}
            onChange={handleChange}
          >
            <option value="Electronics">Electronics</option>
            {/* Other category options */}
          </select>
        </div>
        <Divider />
        <div className="inventory-form__column">
          <h2 className="inventory-form__heading">Item Availability</h2>
          <div className="inventory-form__status">
            <label className="inventory-form__label">Status</label>
            <div className="inventory-form__radio-group">
              <label className="inventory-form__radio-label">
                In stock
                <input
                  type="radio"
                  name="status"
                  value="In Stock"
                  checked={inventoryItem.status === "In Stock"}
                  onChange={handleChange}
                />
                <span className="inventory-form__radio-custom"></span>
              </label>
              <label className="inventory-form__radio-label">
                Out of stock
                <input
                  type="radio"
                  name="status"
                  value="Out of Stock"
                  checked={inventoryItem.status === "Out of Stock"}
                  onChange={handleChange}
                />
                <span className="inventory-form__radio-custom"></span>
              </label>
            </div>
          </div>

          <label className="inventory-form__label">Warehouse</label>
          <select
            className="inventory-form__select"
            name="warehouse"
            value={inventoryItem.warehouse}
            onChange={handleChange}
          >
            <option value="Manhattan">Manhattan</option>
          </select>
        </div>
      </div>
      <div className="inventory-form__btn-container">
        <button onClick={cancelHandler} className="inventory-form__btn--cancel">
          Cancel
        </button>
        <button
          onSubmit={handleSubmit}
          type="submit"
          className="inventory-form__btn--add"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default InventoryForm;
