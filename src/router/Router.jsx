import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterForm from "../containers/RegisterForm";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
