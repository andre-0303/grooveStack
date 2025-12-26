import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import Home from "../pages/Home";
import VinylList from "../pages/VinylList";
import CreateVinyl from "../pages/CreateVinyl";
import EditVinyl from "../pages/EditVinyl";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/vinyls" element={<VinylList />} />
        <Route path="/vinyls/new" element={<CreateVinyl />} />
        <Route path="/vinyls/edit/:id" element={<EditVinyl />} />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
