import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import WarehouseDetailsPage from "./pages/WarehouseDetailsPage/WarehouseDetailsPage";
import WarehousePage from "./pages/WarehousePage/WarehousePage";
import InventoryDetailsPage from "./pages/InventoryDetailsPage/InventoryDetailsPage";
import InventoryPage from "./pages/InventoryPage/InventoryPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WarehousePage />} />
        <Route path="/warehouse" element={<WarehousePage />} />
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
