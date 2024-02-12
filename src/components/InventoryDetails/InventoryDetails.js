import "./InventoryDetails.scss";
import arrowBackIcon from "../../assets/Icons/arrow_back-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function InventoryDetails() {
  const [inventories, setInventories] = useState([]);
  const [selectedInventory, setSelectedInventory] = useState({});
  const { inventoryId = "" } = useParams();

  useEffect(() => {
    const getInventories = async () => {
      try {
        const response = await axios.get(`${REACT_APP_SERVER_URL}/inventories`);
        console.log(response.data);
        setInventories(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getInventories();
  }, []);

  useEffect(() => {
    console.log("Inventory ID:", inventoryId);
    const getSingleInventory = async () => {
      try {
        const singleInventoryRes = await axios.get(
          `${REACT_APP_SERVER_URL}/inventories/${inventoryId}`
        );
        console.log(singleInventoryRes.data);
        const {
          id,
          warehouse_name,
          item_name,
          description,
          category,
          status,
          quantity,
        } = singleInventoryRes.data;

        // setSelectedInventory(singleInventoryRes.data);
        setSelectedInventory({
          id,
          warehouse_name,
          item_name,
          description,
          category,
          status,
          quantity,
        });
      } catch (error) {
        console.error(error);
      }
    };

    getSingleInventory();
  }, [inventoryId]);

  console.log("Selected Inventory:", selectedInventory);

  return (
    <main className="inventory-details">
      <div className="div-container1">
        <div className="div-container2">
          <section className="inventory-details__top">
            <div className="inventory-details__top-wrapper">
              <Link
                to="/inventory"
                className="inventory-details__top-back-link"
              >
                <img
                  src={arrowBackIcon}
                  alt="arrow back icon"
                  className="inventory-details__top-back-icon"
                />
              </Link>
              <h2 className="inventory-details__top-title">
                {selectedInventory.item_name}
              </h2>
            </div>
            <Link
              to="/inventory/edit"
              className="inventory-details__top-edit-link"
            >
              <img
                src={editIcon}
                alt="edit icon"
                className="inventory-details__top-edit-icon"
              />
              <p className="inventory-details__top-edit-text">Edit</p>
            </Link>
          </section>

          <section className="inventory-details__bottom">
            <div className="inventory-details__bottom-1">
              <div className="inventory-details__bottom-description">
                <h4 className="inventory-details__bottom-title">
                  ITEM DESCRIPTION:
                </h4>
                <p className="inventory-details__bottom-text">
                  {selectedInventory.description}
                </p>
              </div>
              <div className="inventory-details__category">
                <h4 className="inventory-details__bottom-title">CATEGORY:</h4>
                <p className="inventory-details__bottom-text">
                  {selectedInventory.category}
                </p>
              </div>
            </div>
            <div className="inventory-details__bottom-2">
              <div className="inventory-details__bottom-2-wrapper">
                <div className="inventory-details__status">
                  <h4 className="inventory-details__bottom-title">STATUS:</h4>
                  <p
                    className={`inventory-details__status ${
                      selectedInventory.status === "In Stock"
                        ? "inStock"
                        : "outOfStock"
                    }`}
                  >
                    {selectedInventory.status}
                  </p>
                </div>
                <div className="inventory-details__quantity">
                  <h4 className="inventory-details__bottom-title">QUANTITY:</h4>
                  <p className="inventory-details__bottom-text">
                    {selectedInventory.quantity}
                  </p>
                </div>
              </div>
              <div className="inventory-details__warehouse">
                <h4 className="inventory-details__bottom-title">WAREHOUSE:</h4>
                <p className="inventory-details__bottom-text inventory-details__last-text">
                  {selectedInventory.warehouse_name}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
