// import "./App.scss";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";
// import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//       <Route path="/warehouse/:id" element={<WarehouseDetails />} />
//         {/* <Route path="/" element={<WarehousePage />} />
//         <Route path="/warehouse" element={<WarehousePage />} />
        
//         <Route path="/inventory" element={<InventoryPage />} />
//         <Route path="/inventory/:id" element={<InventoryDetail />} /> */}
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// }

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehouseDetails from "./pages/WarehouseDetails/WarehouseDetails";
import AddInventory from './pages/Add-Inventory/add-inventory';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/warehouse/id" element={<WarehouseDetails />} />
        <Route path="/add-inventory" element={<AddInventory/>} />
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
