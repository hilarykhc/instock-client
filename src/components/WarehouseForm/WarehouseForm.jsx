import Divider from '../Divider/Divider';
import './WarehouseForm.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
const emailValidator = require('validator');

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const WarehouseForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    warehouse_name: '',
    address: '',
    city: '',
    country: '',
    contact_name: '',
    contact_phone: '',
    contact_position: '',
    contact_email: '',
  });

  // const [errors, setErrors] = useState({
  //   warehouse_name: '',
  //   address: '',
  //   city: '',
  //   country: '',
  //   contact_name: '',
  //   contact_phone: '',
  //   contact_position: '',
  //   email: '',
  // });
  const [errors, setErrors] = useState({});
  const formErrors = {};

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: '' });
  };
  const cancelHandler = () => {
    navigate('/warehouse');
  };

  const formValidation = () => {
    if (formData.warehouse_name.trim() === '') {
      formErrors.warehouse_name = 'Warehouse name is required';
    }
    if (formData.address.trim() === '') {
      formErrors.address = 'Address is required';
    }
    if (formData.city.trim() === '') {
      formErrors.city = 'City is required';
    }
    if (formData.country.trim() === '') {
      formErrors.country = 'Country is required';
    }
    if (formData.contact_name.trim() === '') {
      formErrors.contact_name = 'Contact name is required';
    }
    if (formData.contact_phone.trim() === '') {
      formErrors.contact_phone = 'Contact phone is required';
    }
    if (formData.contact_position.trim() === '') {
      formErrors.contact_position = 'Contact position is required';
    }
    if (formData.contact_email.trim() === '') {
      formErrors.contact_email = 'Contact Email is required';
    }
    setErrors(formErrors);

    let missingFields = 0;
    for (let keys in Object.keys(formErrors)) {
      missingFields += 1;
    }

    return missingFields === 0;
  };

  const validateEmail = (email) => {
    return emailValidator.isEmail(email);
  };

  const validateContactNumber = (phoneNum) => {
    const phoneRegEx = /^\+?(\d{1,3})?\s*\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    return phoneRegEx.test(phoneNum);
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    // check if form is valid
    const isFormValid = formValidation();
    const isEmailValid = validateEmail(formData.contact_email);
    const isValidPhoneNumber = validateContactNumber(formData.contact_phone);
    if (isFormValid && isEmailValid && isValidPhoneNumber) {
      const newWarehouse = {
        warehouse_name: formData.warehouse_name,
        address: formData.address,
        city: formData.city,
        country: formData.country,
        contact_name: formData.contact_name,
        contact_phone: formData.contact_phone,
        contact_position: formData.contact_position,
        contact_email: formData.contact_email,
      };

      try {
        const response = await axios.post(
          `${REACT_APP_SERVER_URL}/warehouse`,
          newWarehouse
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log('Invalid form');
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
                className={`warehouse-form__input ${
                  errors.warehouse_name ? 'error' : ''
                }`}
                value={formData.warehouse_name}
                type="text"
                id="warehouse_name"
                name="warehouse_name"
                placeholder="Warehouse Name"
              />
              {errors.warehouse_name && (
                <span className="error-message">{errors.warehouse_name}</span>
              )}
            </div>
            <div className="warehouse-form__group">
              <label className="warehouse-form__label" htmlFor="address">
                street address
              </label>
              <input
                onChange={handleChange}
                value={formData.address}
                className={`warehouse-form__input ${
                  errors.address ? 'error' : ''
                }`}
                type="text"
                id="address"
                name="address"
                placeholder="Street Address"
              />
              {errors.address && (
                <span className="error-message">{errors.address}</span>
              )}
            </div>

            <div className="warehouse-form__group">
              <label className="warehouse-form__label" htmlFor="city">
                city
              </label>
              <input
                onChange={handleChange}
                value={formData.city}
                className={`warehouse-form__input ${
                  errors.city ? 'error' : ''
                }`}
                type="text"
                id="city"
                name="city"
                placeholder="City"
              />
              {errors.city && (
                <span className="error-message">{errors.city}</span>
              )}
            </div>
            <div className="warehouse-form__group">
              <label className="warehouse-form__label" htmlFor="warehouse_name">
                Country
              </label>
              <input
                onChange={handleChange}
                value={formData.country}
                className={`warehouse-form__input ${
                  errors.country ? 'error' : ''
                }`}
                type="text"
                id="country"
                name="country"
                placeholder="Country"
              />
              {errors.country && (
                <span className="error-message">{errors.country}</span>
              )}
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
                className={`warehouse-form__input ${
                  errors.contact_name ? 'error' : ''
                }`}
                type="text"
                id="contact_name"
                name="contact_name"
                placeholder="Contact Name"
              />
              {errors.contact_name && (
                <span className="error-message">{errors.contact_name}</span>
              )}
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
                className={`warehouse-form__input ${
                  errors.contact_position ? 'error' : ''
                }`}
                type="text"
                id="contact_position"
                name="contact_position"
                placeholder="Position"
              />
              {errors.contact_position && (
                <span className="error-message">{errors.contact_position}</span>
              )}
            </div>
            <div className="warehouse-form__group">
              <label className="warehouse-form__label" htmlFor="contact_phone">
                Phone Number
              </label>
              <input
                onChange={handleChange}
                value={formData.contact_phone}
                className={`warehouse-form__input ${
                  errors.contact_phone ? 'error' : ''
                }`}
                type="text"
                id="contact_phone"
                name="contact_phone"
                placeholder="Phone Number"
              />
              {errors.contact_phone && (
                <span className="error-message">{errors.contact_phone}</span>
              )}
            </div>
            <div className="warehouse-form__group">
              <label className="warehouse-form__label" htmlFor="contact_email">
                Email
              </label>
              <input
                onChange={handleChange}
                value={formData.contact_email}
                className={`warehouse-form__input ${
                  errors.contact_email ? 'error' : ''
                }`}
                type="text"
                id="contact_email"
                name="contact_email"
                placeholder="Email"
              />
              {errors.contact_email && (
                <span className="error-message">{errors.contact_email}</span>
              )}
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
