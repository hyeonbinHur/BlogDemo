import { BrowserRouter, Routes, Route } from "react-router-dom";

import Feed from "./Feed";
import Home from "./Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/feed" element={<Feed />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
