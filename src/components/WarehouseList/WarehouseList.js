import React, { useState, useEffect } from "react";
import "./WarehouseList.scss";
import axios from "axios";
import searchIcon from "../../assets/Icons/search-24px.svg";
import arrowRight from "../../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import sort from "../../assets/Icons/sort-24px.svg";
import Delete from "../Delete/Delete";

function WarehouseList() {
  const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
  console.log(REACT_APP_SERVER_URL);
  const [lists, setLists] = useState([]);
  const getWarehouseList = async () => {
    try {
      const response = await axios.get(`${REACT_APP_SERVER_URL}/warehouses`);
      setLists(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWarehouseList();
  }, []);

  const [selectedItemId, setSelectedItemId] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

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
        console.log("Deleted successfully", response.data);
        const updatedLists = lists.filter((list) => list.id !== selectedItemId);
        setLists(updatedLists);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });

    // close modal and reset item id
    setIsDeleteModalOpen(false);
    setSelectedItemId(null);
  };
  return (
    <>
      <div className="section">
        <div className="section__wrapper">
          <div className="section__firstBox">
            <h1 className="section__header">Warehouses</h1>
            <div className="section__inputButtonWrapper">
              <div className="section__inputWrapper">
                <textarea
                  className="section__input"
                  placeholder="Search..."
                ></textarea>
                <img
                  src={searchIcon}
                  alt="search icon"
                  className="section__search"
                ></img>
              </div>
              <button className="section__button">+ Add New Warehouse</button>
            </div>
          </div>

          <div className="section__titleContainerNew">
            <div className="section__namesortbox">
              <div className="section__subtitleNew">WAREHOUSE</div>
              <img src={sort} alt="sort icon" className="section__sort"></img>
            </div>
            <div className="section__namesortbox">
              <div className="section__addressTitleNew">ADDRESS</div>
              <img src={sort} alt="sort icon" className="section__sort"></img>
            </div>
            <div className="section__namesortbox">
              <div className="section__contactTitleNew">CONTACT NAME</div>
              <img src={sort} alt="sort icon" className="section__sort"></img>
            </div>
            <div className="section__namesortbox">
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
                    <div className="section__name">{list.warehouse_name}</div>
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
                    name={
                      lists.find((list) => list.id === selectedItemId)
                        ?.warehouse_name || "the selected item"
                    }
                    style="warehouse"
                    onDeleteConfirm={handleDeleteConfirm}
                    onClose={() => setIsDeleteModalOpen(false)}
                  />
                )}
                <img
                  src={editIcon}
                  alt="edit icon"
                  className="section__edit"
                ></img>
              </div>
            </div>
          ))}
          <div></div>
        </div>
      </div>
    </>
  );
}

export default WarehouseList;
