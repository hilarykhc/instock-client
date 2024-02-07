
import './WarehouseForm.scss';

const WarehouseForm = () => {
  return (
    <form className="warehouse-form">
      <div>
        {/* Warehouse Detail Section */}
        <section>
          <h2>Warehouse Details</h2>
          <div className="form__group">
            <label htmlFor="warehouse_name">warehouse name</label>
            <input
              type="text"
              id="warehouse_name"
              name="warehouse_name"
              placeholder="Warehouse Name"
            />
          </div>
          <div className="form__group">
            <label htmlFor="address">street address</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Street Address"
            />
          </div>

          <div className="form__group">
            <label htmlFor="city">city</label>
            <input type="text" id="city" name="city" placeholder="City" />
          </div>
          <div className="form__group">
            <label htmlFor="warehouse_name">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              placeholder="Country"
            />
          </div>
        </section>
        {/* Contact section */}
        <section>
          <h2>Contact Details</h2>
          <div className="form__group">
            <label htmlFor="contact_name">Contact Name</label>
            <input
              type="text"
              id="contact_name"
              name="contact_name"
              placeholder="Contact Name"
            />
          </div>
          <div className="form__group">
            <label htmlFor="contact_name">Position</label>
            <input
              type="text"
              id="contact_position"
              name="contact_position"
              placeholder="Position"
            />
          </div>
          <div className="form__group">
            <label htmlFor="contact_phone">Phone Number</label>
            <input
              type="text"
              id="contact_phone"
              name="contact_phone"
              placeholder="Phone Number"
            />
          </div>
          <div className="form__group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" placeholder="Email" />
          </div>
        </section>
        <div>
          <button>Cancel</button>
          <button>Add Warehouse</button>
        </div>
      </div>
    </form>
  );
}

export default WarehouseForm