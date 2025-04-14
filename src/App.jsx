import React, {Component} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./page/home";
import Footer from "./components/footer";
import Products from "./page/product";
import NotFound from "./page/404";

const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/product/*" element={<Products />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App