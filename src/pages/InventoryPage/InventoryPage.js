import { useEffect, useState } from "react";
import InventoryListHeader from "../../components/InventoryListHeader/InventoryListHeader";
import axios from "axios";
import InventoryListItem from "../../components/InventoryListItem/InventoryListItem";
import InventoryPageHeader from "../../components/InventoryPageHeader/InventoryPageHeader";

const InventoryPage = () => {
  const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

  const [inventories, setInventories] = useState([]);
  
  const fetchAllInventories = async() => {
    try {
      const response = await axios.get(`${REACT_APP_SERVER_URL}/inventories`)
      setInventories(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchAllInventories()
  },[])

  return (
      <main>
        <InventoryPageHeader />
        <InventoryListHeader />
        {inventories.map((inventory) => (
          <InventoryListItem key={inventory.id} inventoryItem={inventory} />
        ))}
      </main>
  );
};

export default InventoryPage;
