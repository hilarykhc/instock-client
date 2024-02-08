import "./WarehouseDetails.scss";
import arrowBackIcon from "../../assets/Icons/arrow_back-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function WarehouseDetails() {
  const [warehouses, setWarehouses] = useState([]);
  const [selectedWarehouse, setSelectedWarehouse] = useState({});
  const { warehouseId = "" } = useParams();

  //   useEffect(() => {
  //     console.log("Warehouse ID from URL:", warehouseId);
  //   }, [warehouseId]);

  // warehouseId to find selected warehouse
  const selectedWarehouseFromParams = warehouses.find(
    (warehouse) => warehouse.id === warehouseId
  );

  // if videoId not found
  const currentSelectedWarehouse =
    selectedWarehouseFromParams || selectedWarehouse;

  useEffect(() => {
    const getWarehouses = async () => {
      try {
        const response = await axios.get(`${REACT_APP_SERVER_URL}/warehouse`);
        // console.log(response.data);
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
        // console.log(singleWarehouse);
        const singleWarehouseRes = await axios.get(
          `${REACT_APP_SERVER_URL}/warehouse/${singleWarehouse}`
        );

        // console.log(singleWarehouseRes.data);
        setSelectedWarehouse(singleWarehouseRes.data);
      } catch (error) {
        console.error(error);
      }
    };

    getSingleWarehouse();
  }, [warehouseId]);

  //   useEffect(() => {
  //     console.log("Selected Warehouse:", selectedWarehouse);
  //     console.log("Current Selected Warehouse:", currentSelectedWarehouse);
  //   }, [selectedWarehouse, currentSelectedWarehouse]);

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
            <Link to="#" className="warehouse-details__top-edit-link">
              <img
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
                {currentSelectedWarehouse.city}, {currentSelectedWarehouse.city}
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
                  CONACT INFORMATION:
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
    </main>
  );
}
