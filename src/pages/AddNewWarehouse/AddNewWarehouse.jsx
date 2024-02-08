import WarehouseForm from '../../components/WarehouseForm/WarehouseForm';
import './AddNewWarehouse.scss';
import backArrow from '../../assets/Icons/arrow-back.svg';
import { useNavigate } from 'react-router-dom';

function AddNewWarehouse(props) {
    console.log(props);
    if (props.warehouseData) {
      console.log('Edit Mode');
    } else {
      console.log('Add mode');
    }
  const navigate = useNavigate();
  const cancelHandler = () => {
    props.onCancel()
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
