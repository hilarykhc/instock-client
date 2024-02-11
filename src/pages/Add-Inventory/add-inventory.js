import "./add-inventory.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BackArrow from "../../assets/Icons/arrow-back.svg";
import ErrorIcon from "../../assets/Icons/arrow-back.svg";

export default function EditInventory() {
  const navigate = useNavigate();
  const [warehouses, setWarehouses] = useState([]);
  const [formData, setFormData] = useState({
    item_name: "",
    description: "",
    category: "",
    status: "In Stock",
    quantity: 0,
    warehouse_id: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/warehouses")
      .then((response) => {
        setWarehouses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching warehouses:", error);
      });
  }, []);

  const handleStatusChange = (event) => {
    const { name, value } = event.target;
    console.log(formData);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleCancel = () => {
    navigate("/inventory");
  };

  const handleSave = async () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key]) {
        newErrors[key] = "This field is required";
      }
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }
    try {
      const formattedDateTime = new Date()
        .toISOString()
        .slice(0, 19)
        .replace("T", " ");

      const newInventory = {
        ...formData,
        created_at: formattedDateTime,
        updated_at: formattedDateTime,
      };

      if (formData.status === "Out of Stock") {
        newInventory.quantity = 0;
      }

      await axios.post("http://localhost:8080/api/inventories", newInventory);
      navigate("/inventories");
    } catch (error) {
      console.error("Error adding inventory:", error);
    }
  };

  return (
    <section className="add-inventory">
      <div className="add-inventory__title-container">
        <img
          src={BackArrow}
          className="back-arrow"
          alt="Back Arrow"
          onClick={handleCancel}
        />
        <h1 className="add-inventory__title">Add New Inventory Item</h1>
      </div>
      <form className="add-inventory__form">
        <div className="add-inventory__item-details">
          <h2 className="add-inventory__section-title">Item Details</h2>
          <label className="add-inventory__label" htmlFor="itemName">
            Item Name
          </label>
          <input
            placeholder="Item Name"
            className="add-inventory__input"
            type="text"
            id="item_name"
            name="item_name"
            value={formData.item_name}
            onChange={handleInputChange}
          />
          {errors.item_name && (
            <div className="add-inventory__error">
              <img src={ErrorIcon} className="error-icon" alt="Error Icon" />
              {errors.item_name}
            </div>
          )}
          <label className="add-inventory__label" htmlFor="description">
            Description
          </label>
          <textarea
            placeholder="Please enter a brief item description..."
            className="add-inventory__textarea"
            rows={5}
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          ></textarea>
          {errors.description && (
            <div className="add-inventory__error">
              <img src={ErrorIcon} className="error-icon" alt="Error Icon" />
              {errors.description}
            </div>
          )}
          <label className="add-inventory__label" htmlFor="category">
            Category
          </label>
          <div className="dropdown-container">
            <select
              className="add-inventory__dropdown"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            >
              <option value="">Please select</option>
              <option value="Electronics">Electronics</option>
              <option value="Gear">Gear</option>
              <option value="Apparel">Apparel</option>
              <option value="Accessories">Accessories</option>
              <option value="Health">Health</option>
            </select>
          </div>
          {errors.category && (
            <div className="add-inventory__error">
              <img src={ErrorIcon} className="error-icon" alt="Error Icon" />
              {errors.category}
            </div>
          )}
        </div>
        <div className="add-inventory__item-availability">
          <h2 className="add-inventory__section-title">Item Availability</h2>
          <label className="add-inventory__label">Status</label>
          <div className="add-inventory__status-options">
            <label className="add-inventory__status-label">
              <input
                className="add-inventory__radio-btn"
                type="radio"
                name="status"
                value="In Stock"
                checked={formData.status === "In Stock"}
                onChange={handleStatusChange}
              />
              In Stock
            </label>
            <label className="add-inventory__status-label">
              <input
                className="add-inventory__radio-btn"
                type="radio"
                name="status"
                value="Out of Stock"
                checked={formData.status === "Out of Stock"}
                onChange={handleStatusChange}
              />
              Out of Stock
            </label>
          </div>
          {formData.status === "In Stock" && (
            <div className="add-inventory__quantity">
              <label className="add-inventory__label" htmlFor="quantity">
                Quantity
              </label>
              <input
                className="add-inventory__input"
                type="text"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleInputChange}
              />
            </div>
          )}
          {errors.quantity && (
            <div className="add-inventory__error">
              <img src={ErrorIcon} className="error-icon" alt="Error Icon" />
              {errors.quantity}
            </div>
          )}

          <label className="add-inventory__label" htmlFor="category">
            Warehouse
          </label>
          <div className="dropdown-container">
            <select
              className="add-inventory__dropdown"
              id="warehouse"
              name="warehouse_id"
              value={formData.warehouse_id}
              onChange={handleInputChange}
            >
              <option value="">Please select</option>
              {warehouses.map((warehouse) => (
                <option key={warehouse.id} value={warehouse.id}>
                  {warehouse.warehouse_name}
                </option>
              ))}
            </select>
          </div>
          {errors.warehouse_id && (
            <div className="add-inventory__error">
              <img src={ErrorIcon} className="error-icon" alt="Error Icon" />
              {errors.warehouse_id}
            </div>
          )}
        </div>
      </form>
      <div className="add-inventory__btn-container">
        <button
          className="add-inventory__btn cancel-btn"
          type="button"
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button
          className="add-inventory__btn save-btn"
          type="button"
          onClick={handleSave}
        >
          + Add Item
        </button>
      </div>
    </section>
  );
}
