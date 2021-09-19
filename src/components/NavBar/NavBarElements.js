import styled from 'styled-components';
import { NavLink as Link} from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { ReactComponent as CentralMarketLogoSvg } from '../../logo.svg';

export const Nav = styled.nav`
    background: none;
    display: flex;
    height: 80px;
    justify-content: space-between;
    padding-top: 10px;
    z-index: 10;
`;

export const CentralMarketLogo = styled(CentralMarketLogoSvg)`
    max-height: 100%;
    width: auto;
`;

//padding: 0.5rem calc((100vw - 1000px) / 2);

export const NavLink = styled(Link)`
    color: #4037F5;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    heigth: 100%
    cursor: pointer;
    font-weight: bold;
    font-size: 15px;

    &.active {
        color: #000;
        border-bottom: solid 3px #000;
        transition: all 0.2s ease;
    }
`;

export const NavLinkHome = styled(Link)`
    color: #4037F5;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    heigth: 100%
    cursor: pointer;
    font-weight: bold;
    font-size: 15px;
`;

export const Bars = styled(FaBars)`
    display: none;
    color: #4037F5;

    @media screen and (max-wdth: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;

    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-wdth: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: end;
    margin-right: 24px;

    @media screen and (max-wdth: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(Link)`
    background: #FFFFFF;
    border: 1.5px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;
    color: #161616;
    font-size: 15px;
    font-weight: bold;
    margin-top: 10px;
    margin-right: 20px;
    padding: 15px 0 15px 0;
    text-align: center;
    width: 167px;

    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        color: #4037F5;
        box-shadow: 0 .4rem 0.5rem #9854EF!important;
    }
`;

