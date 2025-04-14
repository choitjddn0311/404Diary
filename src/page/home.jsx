import React from "react";
import {Link} from 'react-router-dom';
import "../style.css"

const Home = (props) => {
    return (
        <>
            <h2>안녕하세요. 블로그 테스트중입니다.</h2>
            <ul>
                <Link to="/product/1"><li>상품1</li></Link>
                <Link to="/product/2"><li>상품2</li></Link>
            </ul>
        </>
    );
};

export default Home;