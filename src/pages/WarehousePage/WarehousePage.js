import Button from '../../components/Button/Button';
import './WarehousePage.scss';
import {useNavigate } from 'react-router-dom';


const WarehousePage = () => {
  const navigate = useNavigate()
  const buttonClickHandler = () => {
    navigate('/warehouse/add')
  }
  return (
    <>
      <Button onClick={buttonClickHandler } />
    </>
  )
}

export default WarehousePage