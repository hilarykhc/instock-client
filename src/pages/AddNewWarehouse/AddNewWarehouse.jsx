import WarehouseForm from '../../components/WarehouseForm/WarehouseForm';
import './AddNewWarehouse.scss';
// import backIcon from '../../assets/Icons'
import backArrow from '../../assets/Icons/arrow-back.svg';
import { useNavigate } from 'react-router-dom';

function AddNewWarehouse() {
  const navigate = useNavigate();
  const cancelHandler = () => {
    navigate('/warehouse');
  };
  return (
    <main className="new-warehouse">
      <div className="new-warehouse__wrapper">
        <div onClick={cancelHandler} className="new-warehouse__title-container">
          <img
            src={backArrow}
            alt="Back Icon"
            className="new-warehouse__icon"
          />
          <h1 className="new-warehouse__title">add new warehouse</h1>
        </div>
        <WarehouseForm />
      </div>
    </main>
  );
}

export default AddNewWarehouse;
