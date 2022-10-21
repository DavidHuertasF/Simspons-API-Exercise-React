import Home from "../screens/Home/Home";
import Character from "../screens/Character/Character";
import Nav from "../components/UI/Nav";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
        <Nav/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/category/:cat" element={<Home />}></Route>
        <Route path="/character/:idCharacter" element={<Character />}></Route>
        <Route path="/*" element={<div>404 not found</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
