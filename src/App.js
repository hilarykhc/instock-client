import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehouseDetails from "./components/InventoryList/InventoryList";
import AddInventory from './pages/Add-Inventory/add-inventory';
import './App.scss';
import WarehousePage from './pages/WarehousePage/WarehousePage';
import WarehouseDetail from './pages/WarehouseDetail/WarehouseDetail';
import AddNewWarehouse from './pages/AddNewWarehouse/AddNewWarehouse';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/warehouse/warehouse_id" element={<WarehouseDetails />} />
        <Route path="/add-inventory" element={<AddInventory/>} />
        {/* Add other routes as needed */}

        <Route path="/" element={<WarehousePage />} />
        <Route path="/warehouse" element={<WarehousePage />} />
        {/* <Route path="/warehouse/:id" element={<WarehouseDetail />} /> */}
        <Route path="/warehouse/add" element={<AddNewWarehouse />} />
        <Route path="/warehouse/edit" element={<AddNewWarehouse />} />
        <Route path="*" element={<NotFoundPage />} />    
        <Route
          path="/warehouse/:warehouseId"
          element={<WarehouseDetailsPage />}
        />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route
          path="/inventory/:inventoryId"
          element={<InventoryDetailsPage />}
        />        

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
