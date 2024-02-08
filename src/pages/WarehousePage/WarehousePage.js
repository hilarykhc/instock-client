import {useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import "./WarehousePage.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList";

export default function WarehousePage() {
<<<<<<< HEAD
  return <div><WarehouseList/></div>;
=======
   const navigate = useNavigate()
  const buttonClickHandler = () => {
    navigate('/warehouse/add')
  }
  return (
    <div>
      <WarehouseList />
    <Button onClick={buttonClickHandler } />
    </div>
  );
>>>>>>> develop
}

