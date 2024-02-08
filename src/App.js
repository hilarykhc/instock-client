import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehousePage from "./pages/WarehousePage/WarehousePage";

import WarehouseDetail from "./pages/WarehouseDetail/WarehouseDetail";
import AddNewWarehouse from "./pages/AddNewWarehouse/AddNewWarehouse";


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WarehousePage />} />
        <Route path="/warehouse" element={<WarehousePage />} />
        <Route path="/warehouse/:id" element={<WarehouseDetail />} />
        <Route path="/warehouse/add" element={<AddNewWarehouse />} />
        <Route path="/warehouse/edit" element={<AddNewWarehouse />} />
        {/* <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/inventory/:id" element={<InventoryDetail />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
