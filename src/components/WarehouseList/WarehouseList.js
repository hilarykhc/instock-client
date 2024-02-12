import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./WarehouseList.scss";
import axios from "axios";
import arrowRight from "../../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import sort from "../../assets/Icons/sort-24px.svg";
import Delete from "../Delete/Delete";
import AddNewWarehouse from "../../pages/AddNewWarehouse/AddNewWarehouse";
import WarehousePageHeader from "../WarehousePageHeader/WarehousePageHeader";

function WarehouseList() {
  const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
  const [lists, setLists] = useState([]);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [displayForm, setDisplayForm] = useState(false);
  const [warehouseData, setWarehouseData] = useState(null);
  const [warehouseSearchTerm, setWarehouseSearchTerm] = useState("");

  const getWarehouseList = async () => {
    try {
      const response = await axios.get(`${REACT_APP_SERVER_URL}/warehouses`, {
        params: {
          sort_by: sortBy,
          order_by: sortOrder,
          warehouseSearchTerm: warehouseSearchTerm,
        },
      });
      setLists(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWarehouseList();
  }, [sortBy, sortOrder, warehouseSearchTerm]);

  const handleDeleteClick = (itemId) => {
    setSelectedItemId(itemId);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (selectedItemId === null) return;

    const url = `${REACT_APP_SERVER_URL}/warehouses/${selectedItemId}`;
    axios
      .delete(url)
      .then((response) => {
        const updatedLists = lists.filter((list) => list.id !== selectedItemId);
        setLists(updatedLists);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });

    setIsDeleteModalOpen(false);
    setSelectedItemId(null);
  };
  const handleEditWarehouseClick = (data) => {
    setIsEditMode(true);
    setDisplayForm(true);
    setWarehouseData(data);
  };
  const addWarehouseHandler = () => {
    setIsEditMode(false);
    setDisplayForm(true);
  };
  const resetDisplayState = () => {
    setIsEditMode(false);
    setDisplayForm(false);
    getWarehouseList();
  };

  const handleSort = (value) => {
    if (sortBy === value) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(value);
      setSortOrder("asc");
    }
  };
  const handleSearchChange = (event) => {
    setWarehouseSearchTerm(event.target.value);
  };
  return (
    <>
      {displayForm && isEditMode && (
        <AddNewWarehouse
          warehouseData={warehouseData}
          onCancel={() => resetDisplayState()}
        />
      )}
      {displayForm && !isEditMode && (
        <AddNewWarehouse onCancel={() => resetDisplayState()} />
      )}
      {!displayForm && (
        <main className="div-container-main">
          <div className="div-container">
            <WarehousePageHeader
              addWarehouseHandler={addWarehouseHandler}
              warehouseSearchTerm={warehouseSearchTerm}
              onSearchChange={handleSearchChange}
            />

            <div className="section__titleContainerNew">
              <div
                className="section__namesortbox"
                onClick={() => handleSort("warehouse_name")}
              >
                <div className="section__subtitleNew">WAREHOUSE</div>
                <img src={sort} alt="sort icon" className="section__sort"></img>
              </div>
              <div
                className="section__namesortbox"
                onClick={() => handleSort("address")}
              >
                <div className="section__addressTitleNew">ADDRESS</div>
                <img src={sort} alt="sort icon" className="section__sort"></img>
              </div>
              <div
                className="section__namesortbox"
                onClick={() => handleSort("contact_name")}
              >
                <div className="section__contactTitleNew">CONTACT NAME</div>
                <img src={sort} alt="sort icon" className="section__sort"></img>
              </div>
              <div
                className="section__namesortbox"
                onClick={() => handleSort("contact_email")}
              >
                <div className="section__contactInfoTitleNew">
                  CONTACT INFORMATION
                </div>
                <img src={sort} alt="sort icon" className="section__sort"></img>
              </div>
              <div className="section__actions">ACTIONS</div>
            </div>
            {lists.map((list) => (
              <div className="section__allContainer" key={list.id}>
                <div className="section__flexContainer">
                  <div className="section__one">
                    <div className="section__subtitle">WAREHOUSE</div>
                    <div className="section__wrapperName">
                      <Link
                        to={`/warehouse/${list.id}`}
                        className="section__link"
                      >
                        <div className="section__name">
                          {list.warehouse_name}
                        </div>
                      </Link>
                      <img
                        src={arrowRight}
                        alt="front arrow"
                        className="section__arrow"
                      ></img>
                    </div>
                    <div className="section__addressTitle">ADDRESS</div>
                    <div className="section__addressBox">
                      <div className="section__address">{list.address}</div>
                      <div className="section__city">{list.city}</div>
                      <span className="section__country">{list.country}</span>
                    </div>
                  </div>
                  <div className="section__two">
                    <div className="section__contactTitle">CONTACT NAME</div>
                    <div className="section__contact">{list.contact_name}</div>
                    <div className="section__contactInfoTitle">
                      CONTACT INFORMATION
                    </div>
                    <div className="section__contactWrapper">
                      <div className="section__contactNumber">
                        {list.contact_phone}
                      </div>
                      <div className="section__email">{list.contact_email}</div>
                    </div>
                  </div>
                </div>
                <div className="section__iconsBox">
                  <img
                    src={deleteIcon}
                    alt="delete icon"
                    className="section__delete"
                    onClick={() => handleDeleteClick(list.id)}
                  ></img>
                  {isDeleteModalOpen && (
                    <Delete
                      styleName="warehouse"
                      list="the list of warehouses"
                      name={
                        lists.find((list) => list.id === selectedItemId)
                          ?.warehouse_name || "the selected item"
                      }
                      onDeleteConfirm={handleDeleteConfirm}
                      onClose={() => setIsDeleteModalOpen(false)}
                    />
                  )}
                  <img
                    onClick={() => handleEditWarehouseClick(list)}
                    src={editIcon}
                    alt="edit icon"
                    className="section__edit"
                  ></img>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}
    </>
  );
}

export default WarehouseList;
