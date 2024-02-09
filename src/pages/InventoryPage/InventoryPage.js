import { useEffect } from "react";
import InventoryListHeader from "../../components/InventoryListHeader/InventoryListHeader";
import axios from "axios";

const InventoryPage = () => {
  const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;
  
  const fetchAllInventories = async() => {
    try {
      const response = await axios.get(`${REACT_APP_SERVER_URL}/inventories`)
      console.log(response.data)
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchAllInventories()
  },[])



  return (
    <InventoryListHeader/>
  )
};

export default InventoryPage;
