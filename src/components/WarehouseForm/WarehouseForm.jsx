import Divider from '../Divider/Divider';
import './WarehouseForm.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const REACT_APP_SERVER_URL =
  process.env.REACT_APP_SERVER_URL;


const WarehouseForm = () => {
  console.log(process.env)
  console.log(REACT_APP_SERVER_URL);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    warehouse_name: '',
    address: '',
    city: '',
    country: '',
    contact_name: '',
    contact_phone: '',
    contact_position: '',
    email: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    console.log(formData);
  };
  const cancelHandler = () => {
    navigate('/warehouse');
  };
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    console.log(formData)
    console.log(REACT_APP_SERVER_URL);

    try {
        const response = await axios.get(`http://localhost:8080/warehouse`);
      console.log(response.data)
      // const response = await axios.post(`${REACT_APP_SERVER_URL}/warehouse`, formData
      // )
      
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <form onSubmit={formSubmitHandler} className="warehouse-form">
      <div className="warehouse-form__section-container">
        <div className="warehouse-form__wrapper">
          {/* Warehouse Detail Section */}
          <section className="warehouse-form-section section">
            <h2 className="section__heading">Warehouse Details</h2>
            <div className="warehouse-form__group">
              <label className="warehouse-form__label" htmlFor="warehouse_name">
                warehouse name
              </label>
              <input
                onChange={handleChange}
                value={formData.warehouse_name}
                className="warehouse-form__input"
                type="text"
                id="warehouse_name"
                name="warehouse_name"
                placeholder="Warehouse Name"
              />
            </div>
            <div className="warehouse-form__group">
              <label className="warehouse-form__label" htmlFor="address">
                street address
              </label>
              <input
                onChange={handleChange}
                value={formData.address}
                className="warehouse-form__input"
                type="text"
                id="address"
                name="address"
                placeholder="Street Address"
              />
            </div>

            <div className="warehouse-form__group">
              <label className="warehouse-form__label" htmlFor="city">
                city
              </label>
              <input
                onChange={handleChange}
                value={formData.city}
                className="warehouse-form__input"
                type="text"
                id="city"
                name="city"
                placeholder="City"
              />
            </div>
            <div className="warehouse-form__group">
              <label className="warehouse-form__label" htmlFor="warehouse_name">
                Country
              </label>
              <input
                onChange={handleChange}
                value={formData.country}
                className="warehouse-form__input"
                type="text"
                id="country"
                name="country"
                placeholder="Country"
              />
            </div>
          </section>
          <Divider />
          {/* Contact section */}
          <section className="warehouse-form-section section">
            <h2 className="section__heading">Contact Details</h2>
            <div className="warehouse-form__group">
              <label className="warehouse-form__label" htmlFor="contact_name">
                Contact Name
              </label>
              <input
                onChange={handleChange}
                value={formData.contact_name}
                className="warehouse-form__input"
                type="text"
                id="contact_name"
                name="contact_name"
                placeholder="Contact Name"
              />
            </div>
            <div className="warehouse-form__group">
              <label
                className="warehouse-form__label"
                htmlFor="contact_position"
              >
                Position
              </label>
              <input
                onChange={handleChange}
                value={formData.contact_position}
                className="warehouse-form__input"
                type="text"
                id="contact_position"
                name="contact_position"
                placeholder="Position"
              />
            </div>
            <div className="warehouse-form__group">
              <label className="warehouse-form__label" htmlFor="contact_phone">
                Phone Number
              </label>
              <input
                onChange={handleChange}
                value={formData.contact_phone}
                className="warehouse-form__input"
                type="text"
                id="contact_phone"
                name="contact_phone"
                placeholder="Phone Number"
              />
            </div>
            <div className="warehouse-form__group">
              <label className="warehouse-form__label" htmlFor="email">
                Email
              </label>
              <input
                onChange={handleChange}
                value={formData.email}
                className="warehouse-form__input"
                type="text"
                id="email"
                name="email"
                placeholder="Email"
              />
            </div>
          </section>
        </div>
        <div className="warehouse-form__btn-container">
          <button
            onClick={cancelHandler}
            className="warehouse-form__btn--cancel"
          >
            Cancel
          </button>
          <button className="warehouse-form__btn--add">+Add Warehouse</button>
        </div>
      </div>
    </form>
  );
};

export default WarehouseForm;
