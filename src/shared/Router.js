import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import AddList from "../pages/AddList";
import List from "../pages/List";
import Detail from "../pages/Detail";



const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/addlist" element={<AddList />} />
                <Route path="/list" element={<List />} />
                <Route path="/detail" element={<Detail />} />
                
                {/* id에 해당하는 페이지로 이동 */}
                <Route path="detail/:id" element={<Detail />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;