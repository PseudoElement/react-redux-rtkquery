import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import FavouritesPage from "../pages/FavouritesPage";
import Header from "../components/Header";

const AppRouter = () => {
  const navigate = useNavigate();
  React.useEffect(() => {
    navigate("/home");
  }, []);
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/favourites" element={<FavouritesPage />}></Route>
      </Routes>
    </>
  );
};

export default AppRouter;
