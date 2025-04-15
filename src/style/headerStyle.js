import styled from "styled-components";

export const Header = styled.header `
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    position: sticky;
    top: 0;
    z-index: 2;
    background: #fff;

    &.scrollHeader {
    box-shadow: 0 0 20px #eee;
    }
`;

export const HeaderInner = styled.div `
    width: var(--containerWidth);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const HeaderTop = styled.div `
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: end;
    align-items: center;
`;

export const AuthContainer = styled.ul `
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    font-size: 13px;
    color: #aaa;
    cursor: pointer;
    transition: .3s;

    & > li:not(:nth-child(even)):hover {
        color: #111;
    }
`;

export const HeaderMain = styled.div `
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
`;

export const Logo = styled.div `
    width: 20%;
    height: 100%;
    transition: .5s;
`;

export const Nav = styled.nav `
    width: 35%;
`;

export const GnbContainer = styled.ul `
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Gnb = styled.li `
    height: 100%;
    position: relative;
    align-content: center;
    font-size: 18px;
    cursor: pointer;
    transition: .5s;
    color: #aaa;

    &:hover {
        color: var(--mainColor);
        transition: .5s;
    }
    &::before,
    &::after {
      content: '';
      width: 0;
      height: 2px;
      background: var(--mainColor);
      position: absolute;
      bottom: 0;
      transition: 0.5s;
    }

    &::before {
      left: 50%;
      border-top-right-radius: 1px;
      border-bottom-right-radius: 1px;
    }

    &::after {
      right: 50%;
      border-top-left-radius: 1px;
      border-bottom-left-radius: 1px;
    }

    &:hover::before,
    &:hover::after {
      width: 50%;
    }
`;