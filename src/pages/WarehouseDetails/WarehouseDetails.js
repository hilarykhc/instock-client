


import React, { useState, useEffect } from "react";
import "../../pages/WarehouseDetails/WarehouseDetails.scss";
import arrowBack from "../../assets/Icons/arrow_back-24px.svg";
import editOutline from "../../assets/Icons/edit-24px.svg";
import chevronRight from "../../assets/Icons/chevron_right-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import { Link } from "react-router-dom";
import axios from "axios";

function WarehouseDetails() {
  const [currentWarehouse, setCurrentWarehouse] = useState({});
  const [currentWarehouseContact, setCurrentWarehouseContact] = useState({});
  const [currentWarehouseInventory, setCurrentWarehouseInventory] = useState([]);

  const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
  console.log(REACT_APP_SERVER_URL);

  const getWarehouseDetails = async () => {
    try {
      const response = await axios.get(`${REACT_APP_SERVER_URL}/warehouses/{id}`);
      console.log(response.data);
      setCurrentWarehouse(response.data.currentWarehouse);
      setCurrentWarehouseContact(response.data.currentWarehouseContact);
      setCurrentWarehouseInventory(response.data.currentWarehouseInventory);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWarehouseDetails();
  }, []);

  // Function to determine stock status
  const stockStatus = (status) => {
    // Implement your logic for determining stock status here
    // Return appropriate className based on the status
  };

  return (
    <section className="warehouse-details">
      {/* Rest of your component code */}
      <section className="warehouse-deatils">
      <article className="warehouse-details__container">
          <div className="warehouse-details__header">
            <div className="warehouse-details__name-container">
              {/* <Link to={`/warehouse`} className="warehouse-details__back-arrow">
                <img src={arrowBack} alt="back arrow" />
              </Link> */}
              <h1>123</h1>
            </div>
            <div className="warehouse-details__warehouse-edit">
              {/* <Link
                to={`/warehouse/${this.state.currentWarehouse.id}/edit-warehouse`}
              >
                <EditButton />
              </Link> */}
            </div>
          </div>
          <div className="warehouse-details__details-container">
            <div className="warehouse-details__warehouse-address">
              <p className="warehouse-details__heading">WAREHOUSE ADDRESS:</p>
              <p className="warehouse-details__body">
              address
              </p>
              <p className="warehouse-details__body">
              city,country
              </p>
            </div>
            <div className="warehouse-details__contact-name">
              <p className="warehouse-details__heading">CONTACT NAME:</p>
              <p className="warehouse-details__body">
              name
              </p>
              <p className="warehouse-details__body">
               position
              </p>
            </div>
            <div className="warehouse-details__contact-info">
              <p className="warehouse-details__heading">CONTACT INFORMATION:</p>
              <p className="warehouse-details__body">
              phone
              </p>
              <p className="warehouse-details__body">
                email
              </p>
            </div>
          </div>
          <div className="warehouse-details__tablet-header-container">
            <div className="warehouse-details__tablet-header warehouse-details__tablet-header--inventory">
              <p>INVENTORY ITEM</p>
              <img src={sortIcon} alt="indicator to sort the inventory items" />
            </div>

            <div className="warehouse-details__tablet-header warehouse-details__tablet-header--category">
              <p>CATEGORY</p>
              <img src={sortIcon} alt="indicator to sort the inventory items" />
            </div>

            <div className="warehouse-details__tablet-header warehouse-details__tablet-header--status">
              <p>STATUS</p>
              <img src={sortIcon} alt="indicator to sort the inventory items" />
            </div>

            <div className="warehouse-details__tablet-header warehouse-details__tablet-header--quantity">
              <p>QUANTITY</p>
              <img src={sortIcon} alt="indicator to sort the inventory items" />
            </div>

            <div className="warehouse-details__tablet-header warehouse-details__tablet-header--action">
              <p>ACTIONS</p>
            </div>
          </div>
          <ul className="warehouse-details__ul-items">

                <li  className="warehouse-details__li-item">
                  <div className="warehouse-details__inventory-item">
                    <p className="warehouse-details__mobile-heading">
                      INVENTORY ITEM
                    </p>
                    {/* <Link
                      to={`/inventory/${}`}
                      className="warehouse-details__more-details"
                    >
                      <p className="warehouse-details__body warehouse-details__body--blue-link">
                      123
                      </p>
                      <img src={chevronRight} alt="click to see item" />{" "}
                    </Link> */}
                  </div>
                  <div className="warehouse-details__status">
                    <p className="warehouse-details__mobile-heading">STATUS</p>
                    <p className="stocksttus">
                     status
                    </p>
                  </div>
                  <div className="warehouse-details__category">
                    <p className="warehouse-details__mobile-heading">
                      CATEGORY
                    </p>
                    <p className="warehouse-details__body">category</p>
                  </div>
                  <div className="warehouse-details__quantity">
                    <p className="warehouse-details__mobile-heading">QTY</p>
                    <p className="warehouse-details__body">quantity</p>
                  </div>
                  <div className="warehouse-details__actions-container">
                    <div className="warehouse-details__delete">
                      {/* <Route
                        path="/warehouse"
                        render={(routerProps) => (
                          // <DeleteInventoryFromWarehouse
                          //   id={item.id}
                          //   item={item.itemName}
                          //   warehouseid={item.warehouseID}
                          //   deleteInventoryItemFromWarehouse={
                          //     this.props.deleteInventoryItemFromWarehouse
                          //   }
                          //   {...routerProps}
                          // />
                        )}
                      /> */}
                    </div>

                    {/* <Link to={`/inventory/${item.id}/edit-item`}>
                      <div className="warehouse-details__edit">
                        <img src={editOutline} alt="select to edit" />
                      </div>
                    </Link> */}
                  </div>
                </li>
            
          </ul>
        </article>
      </section>
     
    </section>
  );
}

export default WarehouseDetails;






