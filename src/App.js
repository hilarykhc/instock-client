import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createContext, useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import WarehouseDetail from "./pages/WarehouseDetail/WarehouseDetail";
import AddNewWarehouse from "./pages/AddNewWarehouse/AddNewWarehouse";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
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

        

//         />        
        />
        <Route path="/warehouse/add" element={<AddNewWarehouse />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
