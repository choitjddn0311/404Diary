import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../images/404DIARY_LOGO.png';
import { 
    Header as StyledHeader, 
    HeaderInner, 
    HeaderTop, 
    AuthContainer, 
    HeaderMain, 
    Logo, 
    Nav, 
    GnbContainer, 
    Gnb 
} from '../style/headerStyle';

const Header = (props) => {
    const [scroll, setIsScroll] = useState(false);

    useEffect(() => {
        const scroll = () => {
            setIsScroll(window.scrollY > 50);
        }

        window.addEventListener('scroll', scroll);
        return () => window.removeEventListener('scroll', scroll);
    }, []);
    
    return (
        <>
            <title>404 Dirary | 나의 길을 찾다</title>
            <StyledHeader className={scroll ? "scrollHeader" : ""}>
                <HeaderInner>
                    <HeaderTop>
                        <AuthContainer>
                            <li>로그인</li>
                            <li>|</li>
                            <li>회원가입</li> 
                        </AuthContainer>
                    </HeaderTop>
                    <HeaderMain>
                        <Logo>
                            <Link to="/">
                                <img src={logo} alt="404 Diary 로고" />
                            </Link>
                        </Logo>
                        <Nav>
                            <GnbContainer>
                                <Gnb>
                                    <Link to="/">홈으로</Link>
                                </Gnb>
                                <Gnb>
                                    <Link to="/show">글보기</Link>
                                </Gnb>
                                <Gnb>
                                    <Link to="/write">글 쓰기</Link>
                                </Gnb>
                                <Gnb>
                                    <Link to="/portfolio">포트폴리오</Link>
                                </Gnb>
                            </GnbContainer>
                        </Nav>
                    </HeaderMain>
                </HeaderInner>
            </StyledHeader>
        </>
    );
}

export default Header;