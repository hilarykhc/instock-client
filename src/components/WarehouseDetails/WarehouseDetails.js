import "./WarehouseDetails.scss";
import arrowBackIcon from "../../assets/Icons/arrow_back-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import InventoryHeader from "../../components/InventoryHeader/InventoryHeader";
import InventoryListItem from "../../components/InventoryListItem/InventoryListItem";

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function WarehouseDetails() {
  const [warehouses, setWarehouses] = useState([]);
  const [selectedWarehouse, setSelectedWarehouse] = useState({});
  const { warehouseId = "" } = useParams();
  const [isEditMode, setIsEditMode] = useState(false);
  const [displayForm, setDisplayForm] = useState(false);
  const [warehouseData, setWarehouseData] = useState(null);

  console.log(warehouseId);

  // warehouseId to find selected warehouse
  const selectedWarehouseFromParams = warehouses.find(
    (warehouse) => warehouse.id === warehouseId
  );

  const currentSelectedWarehouse =
    selectedWarehouseFromParams || selectedWarehouse;

  useEffect(() => {
    const getWarehouses = async () => {
      try {
        const response = await axios.get(`${REACT_APP_SERVER_URL}/warehouses`);
        setWarehouses(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getWarehouses();
  }, []);

  useEffect(() => {
    const getSingleWarehouse = async () => {
      try {
        const singleWarehouse = warehouseId;
        const singleWarehouseRes = await axios.get(
          `${REACT_APP_SERVER_URL}/warehouses/${singleWarehouse}`
        );

        setSelectedWarehouse(singleWarehouseRes.data);
      } catch (error) {
        console.error(error);
      }
    };

    getSingleWarehouse();
  }, [warehouseId]);

  /*add the inventory list for warehouse details
get the inventory for selected warehouse name
Chao Meng
2024-02-10*/
  const [inventories, setInventories] = useState([]);

  const fetchAllInventories = async () => {
    try {
      const response = await axios.get(`${REACT_APP_SERVER_URL}/inventories`);
      console.log(response.data);
      const filteredInventories = response.data.filter(
        (inventory) =>
          inventory.warehouse_name === currentSelectedWarehouse.warehouse_name
      );
      setInventories(filteredInventories);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (currentSelectedWarehouse.warehouse_name) {
      fetchAllInventories();
    }
  }, [currentSelectedWarehouse]);
  const deleteInventoryItem = (itemId) => {
    axios
      .delete(`${REACT_APP_SERVER_URL}/inventories/${itemId}`)
      .then(() => {
        const updatedInventories = inventories.filter(
          (item) => item.id !== itemId
        );
        setInventories(updatedInventories);
      })
      .catch((error) => console.log(error));
  };

  const handleEditWarehouseClick = (data) => {
    setIsEditMode(true);
    setDisplayForm(true);
    setWarehouseData(data);
  };

  return (
    <main className="warehouse-details">
      <div className="div-container1">
        <div className="div-container2">
          <section className="warehouse-details__top">
            <div className="warehouse-details__top-wrapper">
              <Link to="/" className="warehouse-details__top-back-link">
                <img
                  src={arrowBackIcon}
                  alt="arrow back icon"
                  className="warehouse-details__top-back-icon"
                />
              </Link>
              <h2 className="warehouse-details__top-title">
                {currentSelectedWarehouse.warehouse_name}
              </h2>
            </div>
            <Link
              to={{
                pathname: "/warehouse/edit",
                state: { warehouseData: currentSelectedWarehouse },
              }}
              className="warehouse-details__top-edit-link"
            >
              <img
                onClick={() => handleEditWarehouseClick(warehouses)}
                src={editIcon}
                alt="edit icon"
                className="warehouse-details__top-edit-icon"
              />
              <p className="warehouse-details__top-edit-text">Edit</p>
            </Link>
          </section>

          <section className="warehouse-details__bottom">
            <div className="warehouse-details__bottom-address">
              <h4 className="warehouse-details__bottom-title">
                WAREHOUSE ADDRESS:
              </h4>
              <p className="warehouse-details__bottom-text">
                {currentSelectedWarehouse.address},
              </p>
              <p className="warehouse-details__bottom-text">
                {currentSelectedWarehouse.city},{" "}
                {currentSelectedWarehouse.country}
              </p>
            </div>
            <div className="warehouse-details__bottom-contact">
              <div className="warehouse-details__bottom-left">
                <h4 className="warehouse-details__bottom-title">
                  CONTACT NAME:
                </h4>
                <p className="warehouse-details__bottom-text">
                  {currentSelectedWarehouse.contact_name}
                </p>
                <p className="warehouse-details__bottom-text">
                  {currentSelectedWarehouse.contact_position}
                </p>
              </div>
              <div className="warehouse-details__bottom-right">
                <h4 className="warehouse-details__bottom-title">
                  CONTACT INFORMATION:
                </h4>
                <p className="warehouse-details__bottom-text">
                  {currentSelectedWarehouse.contact_phone}
                </p>
                <p className="warehouse-details__bottom-text">
                  {currentSelectedWarehouse.contact_email}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* add the inventory list for warehouse details
      Chao Meng
      2024-02-10*/}

      <InventoryHeader />
      {inventories.map((inventory) => (
        <InventoryListItem
          key={inventory.id}
          inventoryItem={inventory}
          onDelete={deleteInventoryItem}
        />
      ))}
    </main>
  );
}
