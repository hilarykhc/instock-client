import { useState } from "react";
import Delete from "../Delete/Delete";
import axios from "axios";

const ParentComponent = ({ warehouseId }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteConfirm = (name) => {
    const url = `http://localhost:8080/warehouse/${warehouseId}`;
    axios
      .delete(url)
      .then((response) => {
        console.log("Deleted successfully", response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });

    setIsDeleteModalOpen(false);
  };

  return (
    <div>
      {/* 触发删除模态的按钮 */}
      <button onClick={() => setIsDeleteModalOpen(true)}>
        Delete {warehouseId}
      </button>

      {/* Delete模态组件 */}
      {isDeleteModalOpen && (
        <Delete
          name="ExampleWarehouse"
          onDeleteConfirm={handleDeleteConfirm}
          onClose={() => setIsDeleteModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ParentComponent;
