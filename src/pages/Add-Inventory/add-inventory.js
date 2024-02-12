
import React, { useState, useEffect } from "react";
import "./add-inventory.scss";
import backarrow from "../../assets/Icons/arrow_back-24px.svg";
import dropdown from "../../assets/Icons/arrow_drop_down-24px.svg";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
function AddInventory() {
  const [data, setData] = useState();
  const [category, setCategory] = useState();
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const id = queryParams.get("id");
  console.log(id);
  // useEffect(() => {
  //   const getCat = async () => {
  //     const response = await axios.get("http://localhost:8080/inventories");
  //     setCategory(response.data);
  //     console.log(response.data);
  //   };
  //   getCat();
  // }, []);
  const [formData, setFormData] = useState({
    item_name: "",
    description: "",
    category: "",
    status: "Out of Stock",
    quantity: "",
    warehouse_id: "",
  });
  // useEffect(() => {
  //   const edit = async () => {
  //     const response = await axios.get(
  //       `http://localhost:8080/inventories/${id}`
  //     );
  //     console.log(response);
  //     setFormData({
  //       item_name: response.data.item_name,
  //       description: response.data.description,
  //       category: response.data.category,
  //       quantity: response.data.quantity,
  //       warehouse_id: response.data.warehouse_id,
  //       status: response.data.status,
  //     });
  //   };
  //   edit();
  // }, []);
  
  const [formErrors, setFormErrors] = useState({});
  const handleInputChange = (field, value) => {
    console.log(field, value);
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
  const validateForm = () => {
    const validationErrors = {
      item_name: !formData.item_name ? "Item Name is required" : "",
      description: !formData.description ? "Description is required" : "",
      category: !formData.category ? "Category is required" : "",
      warehouse: !formData.warehouse ? "Warehouse is required" : "",
      quantity:
        formData.status === "In Stock" && formData.quantity <= 0
          ? "Quantity must be greater than 0"
          : "",
    };
    return validationErrors;
  };
  // const handleAddItem = async (e) => {
  //   e.preventDefault();
  //   const validationErrors = validateForm();
  //   if (Object.values(validationErrors).some((error) => !!error)) {
  //     setFormErrors(validationErrors);
  //     return;
  //   }
  //   console.log(formData);
  //   try {
  //     const response = await axios.post(
  //       `http://localhost:8080/inventories`,
  //       formData
  //     );
  //     console.log("Item edited successfully:", response.data);
  //     if (response.status === 200) {
  //       navigate("/inventory");
  //     }
  //     setFormData({
  //       item_name: "",
  //       description: "",
  //       category: "",
  //       status: "In Stock",
  //       quantity: "",
  //       warehouse: "",
  //     });
  //     setFormErrors({});
  //   } catch (error) {
  //     console.error("Error adding item:", error);
  //   }
  // };
  const navigate = useNavigate();
  const onClose = () => {
    navigate("/inventory");
  };
  const formSubmitHandler=(event)=>{
    event.preventDefault();
    
  }

  return (
    <section className="addinventory">
      <div className="addinventory__wrap">
        <div className="addinventory__header-wrap">
          <div className="addinventory__icon-wrap">
            <img
              src={backarrow}
              alt="back arrow icon"
              className="addinventory__header-icon"
              onClick={onClose}
            />
          </div>
          <div className="addinventory__title-wrap">
            <h1 className="addinventory__title">Add Inventory Item</h1>
          </div>
        </div>
        <div>
          <form onSubmit={formSubmitHandler} action="" className="addinventory__detail-form">
            <div className="addinventory__detail-form-container">
              <div className="addinventory__detail addinventory__detailborder">
                <div className="addinventory__form-header-wrap">
                  <h2 className="addinventory__form-header">Item Details</h2>
                </div>
                <div className="addinventory__form-detail">
                  <p className="addinventory__form-name">Item Name</p>
                  <input
                    type="text"
                    className="addinventory__form-input"
                    value={formData.item_name}
                    onChange={(e) =>
                      handleInputChange("item_name", e.target.value)
                    }
                  />
                  {formErrors.item_name && (
                    <span className="addinventory__error-message">
                      {formErrors.item_name}
                    </span>
                  )}
                </div>
                <div>
                  <p className="addinventory__form-name">Description</p>
                  <textarea
                    type="text"
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
                  <select
                    className="addinventory__form-category-name"
                    value={formData.category}
                    onChange={(e) =>
                      handleInputChange("category", e.target.value)
                    }
                  >
                    <option hidden value="">
                      Please Select One
                    </option>
                    {category &&
                      category.map((cat) => (
                        <option value={cat.category}>{cat.category}</option>
                      ))}
                  </select>
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
                        className="addinventory__inputNew"
                        type="radio"
                        checked={formData.status === "In Stock"}
                        onChange={() => handleStatusChange("In Stock")}
                      />
                      <span className="addinventory__form-radio">In stock</span>
                    </div>
                    <div>
                      <input
                        type="radio"
                        className="addinventory__inputNew"
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
                     <div className="addinventory__quantityParent">
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
                  </div>
                )}
                <div className="addinventory__wareHouseParent">
                  <p className="addinventory__form-name">Warehouse</p>
                  <select
                    className="addinventory__form-category-name"
                    value={formData.warehouse_name}
                    onChange={(e) =>
                      handleInputChange("warehouse", e.target.value)
                    }
                  >
                    <option hidden value="">
                      Manhattan
                    </option>
                    {category &&
                      category.map((war) => (
                        <option value={war.warehouse_name}>
                          {war.warehouse_name}
                        </option>
                      ))}
                  </select>
                  {formErrors.warehouse && (
                    <span className="addinventory__error-message-warehouse  addinventory__error-message-warehouse-new">
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
                  
                >
                  Save
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
