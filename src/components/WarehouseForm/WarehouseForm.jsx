import Divider from '../Divider/Divider';
import './WarehouseForm.scss';
import {useNavigate } from 'react-router-dom';

const WarehouseForm = () => {
  const navigate = useNavigate();
  const cancelHandler = () => {
    navigate('/warehouse');
  }
  return (
    <form className="warehouse-form">
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
                className="warehouse-form__input"
                type="text"
                id="contact_name"
                name="contact_name"
                placeholder="Contact Name"
              />
            </div>
            <div className="warehouse-form__group">
              <label className="warehouse-form__label" htmlFor="contact_name">
                Position
              </label>
              <input
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
          <button onClick={cancelHandler } className="warehouse-form__btn--cancel">Cancel</button>
          <button className="warehouse-form__btn--add">+Add Warehouse</button>
        </div>
      </div>
    </form>
  );
};

export default WarehouseForm;
