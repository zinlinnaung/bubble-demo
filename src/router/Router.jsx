import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SurveyForm from "../containers/SurveyForm";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SurveyForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
