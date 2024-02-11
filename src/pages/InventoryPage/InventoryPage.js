import { useEffect, useState } from "react";
import InventoryListHeader from "../../components/InventoryListHeader/InventoryListHeader";
import axios from "axios";
import InventoryListItem from "../../components/InventoryListItem/InventoryListItem";
import InventoryPageHeader from "../../components/InventoryPageHeader/InventoryPageHeader";

const InventoryPage = () => {
  const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

  const [inventories, setInventories] = useState([]);
    const [sortBy, setSortBy] = useState(null);
    const [sortingOrder, setSortingOrder] = useState('asc');

  const fetchAllInventories = async () => {
    try {
      const response = await axios.get(`${REACT_APP_SERVER_URL}/inventories`, {
        params: {
          sort_by: sortBy,
          order_by: sortingOrder,
        },
      });
      setInventories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllInventories();
  }, [sortBy, sortingOrder]);

   const handleSortClick = (value) => {
     if (sortBy === value) {
       setSortingOrder(sortingOrder === 'asc' ? 'desc' : 'asc');
     } else {
       setSortBy(value);
       setSortingOrder('asc'); 
     }
   };


  const deleteInventoryItem = (itemId) => {
    axios
      .delete(`${REACT_APP_SERVER_URL}/inventories/${itemId}`)
      .then(() => {
        const updatedInventories = inventories.filter(
          (item) => item.id !== itemId
        );
        setInventories(updatedInventories);
      })
      .catch((error) => console.log(error));
  };
  return (
    <main>
      <InventoryPageHeader />
      <InventoryListHeader onSort={handleSortClick} />
      {inventories.map((inventory) => (
        <InventoryListItem
          key={inventory.id}
          inventoryItem={inventory}
          onDelete={deleteInventoryItem}
        />
      ))}
    </main>
  );
};

export default InventoryPage;
