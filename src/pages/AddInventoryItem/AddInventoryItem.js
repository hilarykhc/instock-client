import "./AddInventoryItem.scss";
import axios from "axios";
// import backIcon from '../../assets/Icons'
import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import { useNavigate } from "react-router-dom";
import InventoryForm from "../../components/InventoryForm/InventoryForm";

function AddInventoryItem({ inventoryItem }) {
  // Assuming this prop is the existing data for editing
  const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const navigate = useNavigate();
  const isEditMode = inventoryItem != null;

  const handleSave = (data) => {
    const url = isEditMode
      ? `${REACT_APP_SERVER_URL}/inventories/${inventoryItem.id}` // Edit endpoint
      : `${REACT_APP_SERVER_URL}/inventories`; // Add endpoint
    const method = isEditMode ? axios.put : axios.post;

    method(url, data)
      .then((response) => {
        navigate("/inventory");
      })
      .catch((error) => {
        console.error("There was an error saving the inventory item", error);
        if (error.response) {
          // The server responded with a status code outside the 2xx range
          console.error("Error data:", error.response.data);
          console.error("Error status:", error.response.status);
          console.error("Error headers:", error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.error("Error request:", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error message:", error.message);
        }
      });
  };

  const cancelHandler = () => {
    navigate("/inventory");
  };

  return (
    <main className="new-warehouse">
      <div className="new-warehouse__wrapper">
        <div onClick={cancelHandler} className="new-warehouse__title-container">
          <img
            src={backArrow}
            alt="Back Icon"
            className="new-warehouse__icon"
          />
          <h1 className="new-warehouse__title">
            {isEditMode ? "Edit Inventory Item" : "Add New Inventory Item"}
          </h1>
        </div>
        <InventoryForm
          inventoryData={inventoryItem}
          onSave={handleSave}
          onCancel={cancelHandler}
        />
      </div>
    </main>
  );
}

export default AddInventoryItem;
