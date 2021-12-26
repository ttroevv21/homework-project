import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import ContactProvider from "./context/ContactProvider";
import AddPage from "./pages/AddPage";
import EditPage from "./pages/EditPage";
import MainPage from "./pages/MainPage";

const MyRoutes = () => {
  return (
    <ContactProvider>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/edit/:name/:id" element={<EditPage />} />
        </Routes>
      </BrowserRouter>
    </ContactProvider>
  );
};
export default MyRoutes;
