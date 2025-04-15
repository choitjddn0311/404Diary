import React from "react";
import {Link} from 'react-router-dom';
import { Footer as MainFooter, FooterLogo } from "../style/footerStyle";
import logo from '../images/404DARY_FOOTER_LOGO.png';

const Footer = (props) => {
    return (
        <>
            <MainFooter>
                <FooterLogo>
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </FooterLogo>
                <p>Copyright &copy; 2025 Seongwoo Choi. All Rights Reserved</p>
            </MainFooter>
        </>
    )
}



export default Footer;