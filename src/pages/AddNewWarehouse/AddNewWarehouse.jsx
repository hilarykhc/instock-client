import WarehouseForm from '../../components/WarehouseForm/WarehouseForm';
import './AddNewWarehouse.scss';
// import backIcon from '../../assets/Icons'
import backArrow from '../../assets/Icons/arrow-back.svg'

function AddNewWarehouse() {
  return (
    <main className="new-warehouse">
      <div className="new-warehouse__wrapper">
        <div className="new-warehouse__title-container">
          <img src={backArrow} alt="Back Icon" className='new-warehouse__icon' />
          <h1 className="new-warehouse__title">add new warehouse</h1>
        </div>
        <WarehouseForm />
      </div>
    </main>
  );
}

export default AddNewWarehouse;
