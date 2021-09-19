import React from 'react';
import DropdownCM from '../Dropdown';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, CentralMarketLogo, NavLinkHome } from './NavBarElements';

const data = {
    mainTitle : 'EMPRESA',
    data: [
        {
            title : 'Datos',
            description : 'Gestiona los datos de tu empresa',
            src: 'calendar-icon.svg',
            path: 'AdditionalDataBussiness'
        },
        {
            title : 'Sucursales',
            description: 'Gestiona tu red de locales',
            src:'store-icon.svg',
            path: 'BranchOffices'
        },
        {
            title : 'Delivery points',
            description : 'Gestiona tu red de entrega',
            src: 'map-marker-icon.svg',
            path: 'DeliveryPoints'
        },
        {
            title: 'Usuarios',
            description : 'Administra usuarios',
            src: 'user-icon.svg',
            path: 'Users'
        },
        {
            title: 'Seguridad',
            description : 'Gestiona grupos y permisos',
            src: 'user-icon.svg',
            path: 'Security'
        }
    ]
}
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLinkHome to='/'>
                    <CentralMarketLogo />
                </NavLinkHome>
                <Bars />
                <NavMenu>
                    <DropdownCM items = { data } />
                    <NavLink to='/clients' >
                        CLIENTES
                    </NavLink>
                    <NavLink to='/contact' >
                        CONTACTO
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to='/register'>REGISTRARSE</NavBtnLink>
                    <NavBtnLink to='/myAcount'>MI CUENTA</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar

