import Divider from '../Divider/Divider';
import './WarehouseForm.scss';
import { useNavigate } from 'react-router-dom';
import notificationIcon from '../../assets/Icons/error.svg';
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

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setErrors({ ...errors, [event.target.name]: '' });
  };

  const cancelHandler = () => {
    navigate('/warehouse');
  };

  const formValidation = () => {
    const formErrors = {};

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
    } else if (!validateContactNumber(formData.contact_phone)) {
      formErrors.contact_phone = 'Invalid phone number';
    }
    if (formData.contact_position.trim() === '') {
      formErrors.contact_position = 'Contact position is required';
    }
    if (formData.contact_email.trim() === '') {
      formErrors.contact_email = 'Contact Email is required';
    } else if (!validateEmail(formData.contact_email)) {
      formErrors.contact_email = 'Invalid email address';
    }
    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
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

    const isFormValid = formValidation();
    const isEmailValid = validateEmail(formData.contact_email);
    const isValidPhoneNumber = validateContactNumber(formData.contact_phone);

    if (isFormValid && isEmailValid && isValidPhoneNumber) {
      const newWarehouse = { ...formData };

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
              <div
                className={`error-message ${
                  errors.warehouse_name ? 'active' : ''
                }`}
              >
                {errors.warehouse_name && (
                  <>
                    <img
                      src={notificationIcon}
                      alt="Error Icon"
                      className="error-icon"
                    />
                    <span>{errors.warehouse_name}</span>
                  </>
                )}
              </div>
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
              <div
                className={`error-message ${errors.address ? 'active' : ''}`}
              >
                {errors.address && (
                  <>
                    <img
                      src={notificationIcon}
                      alt="Error Icon"
                      className="error-icon"
                    />
                    <span>{errors.address}</span>
                  </>
                )}
              </div>
            </div>
            {/* City */}
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
              <div className={`error-message ${errors.city ? 'active' : ''}`}>
                {errors.city && (
                  <>
                    <img
                      src={notificationIcon}
                      alt="Error Icon"
                      className="error-icon"
                    />
                    <span>{errors.city}</span>
                  </>
                )}
              </div>
            </div>
            {/* COUNTRY */}
            <div className="warehouse-form__group">
              <label className="warehouse-form__label" htmlFor="country">
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
              <div
                className={`error-message ${errors.country ? 'active' : ''}`}
              >
                {errors.country && (
                  <>
                    <img
                      src={notificationIcon}
                      alt="Error Icon"
                      className="error-icon"
                    />
                    <span>{errors.country}</span>
                  </>
                )}
              </div>
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
              <div
                className={`error-message ${
                  errors.contact_name ? 'active' : ''
                }`}
              >
                {errors.contact_name && (
                  <>
                    <img
                      src={notificationIcon}
                      alt="Error Icon"
                      className="error-icon"
                    />
                    <span>{errors.contact_name}</span>
                  </>
                )}
              </div>
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
              <div
                className={`error-message ${
                  errors.contact_position ? 'active' : ''
                }`}
              >
                {errors.contact_position && (
                  <>
                    <img
                      src={notificationIcon}
                      alt="Error Icon"
                      className="error-icon"
                    />
                    <span>{errors.contact_position}</span>
                  </>
                )}
              </div>
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
              <div
                className={`error-message ${
                  errors.contact_phone ? 'active' : ''
                }`}
              >
                {errors.contact_phone && (
                  <>
                    <img
                      src={notificationIcon}
                      alt="Error Icon"
                      className="error-icon"
                    />
                    <span>{errors.contact_phone}</span>
                  </>
                )}
              </div>
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
              <div
                className={`error-message ${
                  errors.contact_email ? 'active' : ''
                }`}
              >
                {errors.contact_email && (
                  <>
                    <img
                      src={notificationIcon}
                      alt="Error Icon"
                      className="error-icon"
                    />
                    <span>{errors.contact_email}</span>
                  </>
                )}
              </div>
            </div>
          </section>
        </div>
        {/* Button Container */}
        <div className="warehouse-form__btn-container">
          <button
            onClick={cancelHandler}
            className="warehouse-form__btn--cancel"
          >
            Cancel
          </button>
          <button type="submit" className="warehouse-form__btn--add">
            + Add Warehouse
          </button>
        </div>
      </div>
    </form>
  );
};

export default WarehouseForm;
