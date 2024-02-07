// import React from "react";
// import { Link } from "react-router-dom";

// function WarehouseDetails() {
//   return (
//     <div>
//       <h1>Warehouse Details</h1>
//       <p>This is the Warehouse Details page.</p>
//       <Link to="/">Go back to Home</Link>
//     </div>
//   );
// }

// export default WarehouseDetails;


import "./WarehouseDetails.scss";
import arrowBack from "../../assets/Icons/arrow_back-24px.svg";
import editOutline from "../../assets/Icons/edit-24px.svg";
import chevronRight from "../../assets/Icons/chevron_right-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";
import { Link } from "react-router-dom";

import React from "react";
import axios from "axios";

function WarehouseDetails() {
  return (
    <section className="warehouse-details">
    <article className="warehouse-details__container">
      <div className="warehouse-details__header">
        <div className="warehouse-details__name-container">
          {/* <Link to={`/warehouse`} className="warehouse-details__back-arrow">
            <img src={arrowBack} alt="back arrow" />
          </Link> */}
          {/* <h1>{this.state.currentWarehouse.name}</h1> */}
        </div>
        {/* <div className="warehouse-details__warehouse-edit">
          <Link
            to={`/warehouse/${this.state.currentWarehouse.id}/edit-warehouse`}
          >
          </Link>
        </div> */}
      </div>
      <div className="warehouse-details__details-container">
        <div className="warehouse-details__warehouse-address">
          <p className="warehouse-details__heading">WAREHOUSE ADDRESS:</p>
          <p className="warehouse-details__body">
            {/* {this.state.currentWarehouse.address}, */}
          </p>
          <p className="warehouse-details__body">
            {/* {this.state.currentWarehouse.city},{" "}
            {this.state.currentWarehouse.country} */}
          </p>
        </div>
        <div className="warehouse-details__contact-name">
          <p className="warehouse-details__heading">CONTACT NAME:</p>
          <p className="warehouse-details__body">
            {/* {this.state.currentWarehouseContact.name} */}
          </p>
          <p className="warehouse-details__body">
            {/* {this.state.currentWarehouseContact.position} */}
          </p>
        </div>
        <div className="warehouse-details__contact-info">
          <p className="warehouse-details__heading">CONTACT INFORMATION:</p>
          <p className="warehouse-details__body">
            {/* {this.state.currentWarehouseContact.phone} */}
          </p>
          <p className="warehouse-details__body">
            {/* {this.state.currentWarehouseContact.email} */}
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
        {this.state.currentWarehouseInventory.map((item) => {
          return (
            <li key={item.id} className="warehouse-details__li-item">
              <div className="warehouse-details__inventory-item">
                <p className="warehouse-details__mobile-heading">
                  INVENTORY ITEM
                </p>
                <Link
                  to={`/inventory/${item.id}`}
                  className="warehouse-details__more-details"
                >
                  <p className="warehouse-details__body warehouse-details__body--blue-link">
                    {item.itemName}
                  </p>
                  <img src={chevronRight} alt="click to see item" />{" "}
                </Link>
              </div>
              <div className="warehouse-details__status">
                <p className="warehouse-details__mobile-heading">STATUS</p>
                <p className={this.stockStatus(item.status)}>
                  {item.status}
                </p>
              </div>
              <div className="warehouse-details__category">
                <p className="warehouse-details__mobile-heading">
                  CATEGORY
                </p>
                <p className="warehouse-details__body">{item.category}</p>
              </div>
              <div className="warehouse-details__quantity">
                <p className="warehouse-details__mobile-heading">QTY</p>
                <p className="warehouse-details__body">{item.quantity}</p>
              </div>
              <div className="warehouse-details__actions-container">
                <div className="warehouse-details__delete">
                  {/* <Route
                    path="/warehouse"
                    render={(routerProps) => (
                    //   <DeleteInventoryFromWarehouse
                    //     id={item.id}
                    //     item={item.itemName}
                    //     warehouseid={item.warehouseID}
                    //     deleteInventoryItemFromWarehouse={
                    //       this.props.deleteInventoryItemFromWarehouse
                    //     }
                    //     {...routerProps}
                    //   />
                    )}
                  /> */}
                </div>

                <Link to={`/inventory/${item.id}/edit-item`}>
                  <div className="warehouse-details__edit">
                    <img src={editOutline} alt="select to edit" />
                  </div>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </article>
  </section>
);
}

export default WarehouseDetails;