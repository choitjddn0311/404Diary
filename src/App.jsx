import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./style/globalStyle";
import Header from "./components/header";
import Home from "./page/home";
import Footer from "./components/footer";
import Write from "./page/write";
import Show from "./page/show";
import NotFound from "./page/404";

const App = () => {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/write/*" element={<Write />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                    <Route path="/show/*" element={<Show />}></Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;