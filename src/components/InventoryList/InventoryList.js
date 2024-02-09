import React from "react";
import chevronImage from "../../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";
import Delete from "../Delete/Delete";
const InventoryListItem = (props) => {
  const {
    category,
    description,
    id,
    item_name,
    quantity,
    status,
    warehouse_name,
  } = props.inventoryItem;
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const handleDeleteClick = (itemId) => {
    setSelectedItemId(itemId);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (selectedItemId === null) return;
    props.onDelete(selectedItemId);
    setIsDeleteModalOpen(false);
    setSelectedItemId(null);
  };
  return (
    <>
      <p>{item_name}</p>
      <img src={chevronImage} alt="Chevron Icon" />
      <p>{category}</p>
      <p>{status}</p>
      <p>{quantity}</p>
      <p>{warehouse_name}</p>
      <div>
        <img
          src={deleteIcon}
          alt="Delete Icon"
          onClick={() => handleDeleteClick(id)}
        ></img>
        {isDeleteModalOpen && (
          <Delete
            style="inventory"
            list="the inventory list"
            name={item_name}
            onDeleteConfirm={handleDeleteConfirm}
            onClose={() => setIsDeleteModalOpen(false)}
          />
        )}

        <img src={editIcon} alt="Edit Icon" />
      </div>
    </>
  );
};

export default InventoryListItem;

/*在invenotorypage中的代码
// InventoryPage 组件内部

const deleteInventoryItem = (itemId) => {
  axios.delete(`${REACT_APP_SERVER_URL}/inventories/${itemId}`)
    .then(() => {
      // 使用过滤器来更新列表，移除已删除的项
      const updatedInventories = inventories.filter(item => item.id !== itemId);
      setInventories(updatedInventories);
    })
    .catch(error => console.log(error));
};

// 在渲染 InventoryListItem 时传递 deleteInventoryItem
return (
  <>
    <InventoryListHeader />
    {inventories.map((inventory) => (
      <InventoryListItem key={inventory.id} inventoryItem={inventory} onDelete={deleteInventoryItem} />
    ))}
  </>
);
 */
