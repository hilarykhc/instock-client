import "./InventoryDetails.scss";
import arrowBackIcon from "../../assets/Icons/arrow_back-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function InventoryDetails() {
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
                Television
                {/* {currentSelectedInventory.inventory_name} */}
              </h2>
            </div>
            <Link to="#" className="inventory-details__top-edit-link">
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
                  This 50", 4K LED TV provides a crystal-clear picture and vivid
                  colors.
                </p>
              </div>
              <div className="inventory-details__category">
                <h4 className="inventory-details__bottom-title">CATEGORY:</h4>
                <p className="inventory-details__bottom-text">Electronics</p>
              </div>
            </div>
            <div className="inventory-details__bottom-2">
              <div className="inventory-details__bottom-2-wrapper">
                <div className="inventory-details__status">
                  <h4 className="inventory-details__bottom-title">STATUS:</h4>
                  <p className="inventory-details__bottom-text inventory-details__stock-status">
                    in stock
                  </p>
                </div>
                <div className="inventory-details__quantity">
                  <h4 className="inventory-details__bottom-title">QUANTITY:</h4>
                  <p className="inventory-details__bottom-text">500</p>
                </div>
              </div>
              <div className="invenetory-details__warehouse">
                <h4 className="inventory-details__bottom-title">WAREHOUSE:</h4>
                <p className="inventory-details__bottom-text inventory-details__last-text">
                  Manhattan
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
