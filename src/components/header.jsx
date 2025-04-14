import React from "react";
import {Link} from 'react-router-dom';

const Header = (props) => {
    return (
        <>
            <title>404 Dirary | 나의 길을 찾다</title>
                <header>
                    <div className="headerInner">
                        <div className="headerTop">
                            <ul className="authContainer">
                                <li>로그인</li>
                                <li>|</li>
                                <li>회원가입</li> 
                            </ul>
                        </div>
                        <div className="headerMain">
                                <div className="logo"></div>
                            <nav>
                                <ul className="gnbContainer">
                                    <Link to="/">
                                    <li className="gnb">홈으로</li>
                                    </Link>
                                    <Link to="/product">
                                    <li className="gnb">글보기</li>
                                    </Link>
                                    <Link to="/product">
                                    <li className="gnb">글 쓰기</li>
                                    </Link>
                                    <li className="gnb">주인장은 누구인가?</li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </header>
        </>
    );
}

export default Header;