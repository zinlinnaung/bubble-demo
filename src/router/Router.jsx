import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterForm from "../containers/RegisterForm";
import CodePage from "../containers/CodePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="/code" element={<CodePage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
