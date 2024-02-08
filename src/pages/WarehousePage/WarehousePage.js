import "./WarehousePage.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList";

export default function WarehousePage() {
  return (
    <div>
      <WarehouseList />
    </div>
  );
}

// import { useState } from "react";
// import axios from "axios";
// import Delete from "../../components/Delete/Delete";
// import "./WarehousePage.scss";
// export default function WarehousePage() {
//   const items = [
//     { id: "1", name: "Television" },
//     { id: "2", name: "Gym Bag" },
//     { id: "3", name: "Hoodie" },
//   ];
//   //record the current item id
//   const [selectedItemId, setSelectedItemId] = useState(null);
//   const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

//   const handleDeleteClick = (itemId) => {
//     setSelectedItemId(itemId);
//     setIsDeleteModalOpen(true);
//   };

//   const handleDeleteConfirm = () => {
//     if (selectedItemId === null) return;

//     const url = `http://localhost:8080/warehouse/${selectedItemId}`;
//     axios
//       .delete(url)
//       .then((response) => {
//         console.log("Deleted successfully", response.data);
//       })
//       .catch((error) => {
//         console.error("There was an error!", error);
//       });

//     // close modal and reset item id
//     setIsDeleteModalOpen(false);
//     setSelectedItemId(null);
//   };
//   return (
//     <div>
//       {items.map((item) => (
//         <div key={item.id}>
//           <button onClick={() => handleDeleteClick(item.id)}>Delete</button>
//         </div>
//       ))}

//       {isDeleteModalOpen && (
//         <Delete
//           name={
//             items.find((item) => item.id === selectedItemId)?.name ||
//             "the selected item"
//           }
//           onDeleteConfirm={handleDeleteConfirm}
//           onClose={() => setIsDeleteModalOpen(false)}
//         />
//       )}
//       {/* WarehousePage */}
//     </div>
//   );
// }
