// export default function InventoryPage() {
//   return <div>InventoryPage</div>;
// }

import React, { useState } from "react";
import "./add-inventory.scss";
import backarrow from "../../assets/Icons/arrow_back-24px.svg";
import dropdown from "../../assets/Icons/arrow_drop_down-24px.svg";

function AddInventory({ onClose}) {
  const [inventory, setInventory] = useState([]);
  const [formData, setFormData] = useState({
    itemName: "",
    description: "",
    category: "",
    status: "In Stock",
    quantity: 0,
    warehouse: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setFormErrors({ ...formErrors, [field]: "" });
  };

  const handleStatusChange = (status) => {
    setFormData({
      ...formData,
      status,
      quantity: status === "Out of Stock" ? 0 : formData.quantity,
    });
  };
  const validateForm = async () => {
    const validationErrors = {
      itemName: !formData.itemName.trim() ? "Item Name is required" : "",
      description: !formData.description.trim()
        ? "Description is required"
        : "",
      category: !formData.category.trim() ? "Category is required" : "",
      quantity:
        formData.status === "In Stock" && formData.quantity <= 0
          ? "Quantity must be greater than 0"
          : "",
    };
    return validationErrors;
  };
  const handleAddItem = async (e) => {
    e.preventDefault();

    const validationErrors = await validateForm();

    if (Object.values(validationErrors).some((error) => !!error)) {
      setFormErrors(validationErrors);
      return;
    }

    const newItem = { ...formData, id: Date.now() };
    setInventory([...inventory, newItem]);

    setFormData({
      itemName: "",
      description: "",
      category: "",
      status: "In Stock",
      quantity: 0,
      warehouse: "",
    });
    setFormErrors({});
    onClose();
  };
  return (
    <section className="addinventory">
      <div className="addinventory__wrap">
        <div className="addinventory__header-wrap">
          <div className="addinventory__icon-wrap">
            <img
              src={backarrow}
              alt="back arrow icon"
              className="addinventory__header-icon"
            />
          </div>
          <div className="addinventory__title-wrap">
            <h1 className="addinventory__title">Add New Inventory Item</h1>
          </div>
        </div>
        <div>
          <form action="" className="addinventory__detail-form">
            <div className="addinventory__detail-form-container">
              <div className="addinventory__detail">
                <div className="addinventory__form-header-wrap">
                  <h2 className="addinventory__form-header">Item Details</h2>
                </div>
                <div className="addinventory__form-detail">
                  <p className="addinventory__form-name">Item Name</p>
                  <input
                    type="text"
                    placeholder="Item Name"
                    className="addinventory__form-input"
                    value={formData.itemName}
                    onChange={(e) =>
                      handleInputChange("itemName", e.target.value)
                    }
                  />
                  {formErrors.itemName && (
                    <span className="addinventory__error-message">
                      {formErrors.itemName}
                    </span>
                  )}
                </div>
                <div>
                  <p className="addinventory__form-name">Description</p>
                  <textarea
                    type="text"
                    placeholder="Please enter a brief item description..."
                    className="addinventory__form-input-des"
                    value={formData.description}
                    onChange={(e) =>
                      handleInputChange("description", e.target.value)
                    }
                  />
                  {formErrors.description && (
                    <span className="addinventory__error-message-description">
                      {formErrors.description}
                    </span>
                  )}
                </div>
                <div>
                  <p className="addinventory__form-name">Category</p>
                  <input
                    type="text"
                    placeholder="Item Name"
                    className="addinventory__form-category-name"
                    value={formData.category}
                    onChange={(e) =>
                      handleInputChange("category", e.target.value)
                    }
                  />
                  <img
                    src={dropdown}
                    alt="dropdown-icon"
                    className="addinventory__form-categoryinput-icon"
                  />
                  {formErrors.category && (
                    <span className="addinventory__error-message-category">
                      {formErrors.category}
                    </span>
                  )}
                </div>
              </div>
              <div className="editWarehouse__divider"></div>
              <div className="addinventory__detail">
                <div className="addinventory__form-header-wrap">
                  <h2 className="addinventory__form-header">
                    Item Availability
                  </h2>
                </div>
                <div>
                  <p className="addinventory__form-name">Status</p>
                  <div className="addinventory__form-radio-wrap">
                    <div>
                      <input
                        type="radio"
                        checked={formData.status === "In Stock"}
                        onChange={() => handleStatusChange("In Stock")}
                      />
                      <span className="addinventory__form-radio">In stock</span>
                    </div>
                    <div>
                      <input
                        type="radio"
                        className="addinventory__form-radio"
                        checked={formData.status === "Out of Stock"}
                        onChange={() => handleStatusChange("Out of Stock")}
                      />
                      <span className="addinventory__form-radio">
                        Out of stock
                      </span>
                    </div>
                  </div>
                </div>
                {formData.status === "In Stock" && (
                  <div className="addinventory__form-name-quantity">
                    <p className="addinventory__form-name">Quantity</p>
                    <input
                      type="number"
                      placeholder="0"
                      className="addinventory__form-input"
                      value={formData.quantity}
                      onChange={(e) =>
                        handleInputChange("quantity", e.target.value)
                      }
                    />
                    {formErrors.quantity && (
                      <span className="addinventory__error-message-quantity">
                        {formErrors.quantity}
                      </span>
                    )}
                  </div>
                )}
                <div>
                  <p className="addinventory__form-name">Warehouse</p>
                  <input
                    type="text"
                    placeholder="Please select"
                    className="addinventory__form-category-name"
                    value={formData.warehouse}
                    onChange={(e) =>
                      handleInputChange("warehouse", e.target.value)
                    }
                  />
                  <img
                    src={dropdown}
                    alt="dropdown-icon"
                    className="addinventory__form-input-icon-quality"
                  />
                  {formErrors.warehouse && (
                    <span className="addinventory__error-message-warehouse">
                      {formErrors.warehouse}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="addinventory__btn-wrap">
              <div className="addinventory__btn-cancel-wrap">
                <button className="addinventory__btn-cancel" onClick={onClose}>
                  Cancel
                </button>
              </div>
              <div className="addinventory__btn-addItem-wrap">
                <button
                  className="addinventory__btn-addItem"
                  onClick={handleAddItem}
                >
                  + Add Item
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AddInventory;
