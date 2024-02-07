import "../../pages/WarehouseDetails/WarehouseDetails.scss";
import arrowBack from "../../assets/Icons/arrow_back-24px.svg";
import editOutline from "../../assets/Icons/edit-24px.svg";
import chevronRight from "../../assets/Icons/chevron_right-24px.svg";
import sortIcon from "../../assets/Icons/sort-24px.svg";
// import { DeleteInventoryFromWarehouse } from "../Delete/DeleteInventory";

// import { EditButton } from "../Buttons/Buttons";

import React from "react";
import axios from "axios";

import { Link, Route } from "react-router-dom";

class WarehouseDetails extends React.Component {
  state = {
    currentWarehouse: {},
    currentWarehouseContact: {},
    currentWarehouseInventory: [],
  };

  getCurrentWarehouse = (id) => {
    axios
      .get(`http://localhost:8080/warehouse/${id}`)
      .then((response) => {
        this.setState({
          currentWarehouse: response.data.foundWarehouse,
          currentWarehouseContact: response.data.foundWarehouse.contact,
          currentWarehouseInventory: response.data.foundInventory,
        });
      })
      .catch((error) => console.log(error));
  };

  componentDidMount() {
    this.getCurrentWarehouse("2922c286-16cd-4d43-ab98-c79f698aeab0");
  }

  componentDidUpdate(prevProps, prevState) {
    const { id } = this.props.match.params;

    if (id) {
      if (prevState.currentWarehouse !== id) {
        this.getCurrentWarehouse(id);
      }
    } else if (!id) {
      this.getCurrentWarehouse("2922c286-16cd-4d43-ab98-c79f698aeab0");
    }
  }

  stockStatus = (status) => {
    if (status === "In Stock") {
      return "warehouse-details__body warehouse-details__body--stock-status-true";
    } else if (status === "Out of Stock") {
      return "warehouse-details__body warehouse-details__body--stock-status-false";
    }
  };

  render() {
    return (
      <section className="warehouse-details">
        <article className="warehouse-details__container">
          <div className="warehouse-details__header">
            <div className="warehouse-details__name-container">
              <Link to={`/warehouse`} className="warehouse-details__back-arrow">
                <img src={arrowBack} alt="back arrow" />
              </Link>
              <h1>{this.state.currentWarehouse.name}</h1>
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
                {this.state.currentWarehouse.address},
              </p>
              <p className="warehouse-details__body">
                {this.state.currentWarehouse.city},{" "}
                {this.state.currentWarehouse.country}
              </p>
            </div>
            <div className="warehouse-details__contact-name">
              <p className="warehouse-details__heading">CONTACT NAME:</p>
              <p className="warehouse-details__body">
                {this.state.currentWarehouseContact.name}
              </p>
              <p className="warehouse-details__body">
                {this.state.currentWarehouseContact.position}
              </p>
            </div>
            <div className="warehouse-details__contact-info">
              <p className="warehouse-details__heading">CONTACT INFORMATION:</p>
              <p className="warehouse-details__body">
                {this.state.currentWarehouseContact.phone}
              </p>
              <p className="warehouse-details__body">
                {this.state.currentWarehouseContact.email}
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
                          <DeleteInventoryFromWarehouse
                            id={item.id}
                            item={item.itemName}
                            warehouseid={item.warehouseID}
                            deleteInventoryItemFromWarehouse={
                              this.props.deleteInventoryItemFromWarehouse
                            }
                            {...routerProps}
                          />
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
}

export default WarehouseDetails;

// import React from 'react';

// const WarehouseDetails = ({ items }) => {
//   return (
//     <div className="inventory-list">
//       <table>
//         <thead>
//           <tr>
//             <th>Item Name</th>
//             <th>Category</th>
//             <th>Status</th>
//             <th>Quantity</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {items?.map((item) => (
//             <tr key={item.id} className="inventory-item">
//               <td>{item.name}</td>
//               <td>{item.category}</td>
//               <td>{item.status}</td>
//               <td>{item.quantity}</td>
//               <td>{/* Action buttons or links */}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default WarehouseDetails;

