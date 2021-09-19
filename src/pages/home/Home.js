import React, { useState } from 'react';
import { Row, Col, Container, Button, Card } from 'react-bootstrap'
import { CentralMarketLogo } from '../../components/NavBar/NavBarElements';

import './home.css';
const Home = () => {

    return (
        <>
        <Container className="px-5 mt-5">
            <Row className='p-5 header-branch'>
                <Col lg="6" md="6" sm="12" className='text-left'>
                    <div className='header-position-bottom'>
                        <div>
                            <p className='text-title-home pt-5'>Gestiona tus compras de manera inteligente</p>
                            <span className='text-subtitle-home'>Reducimos los gastos en compras los tiempos de entrega de los pedidos y gestionamos los proveedores de nuestros clientes.</span><br/>
                            <div className="text-center pb-10">
                                <Button className="form-button m-3" type="submit">EMPEZAR AHORA</Button>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg="6" md="6" sm="12" className='branch-header-img-container'>
                    <img className='header-branch-img desktop-img' src="images/userDesktop.svg" alt='branch' />
                </Col>
                <Col xs="12" className="text-center mb-5">
                    <p className="text-title-blue-home">COMO FUNCIONA</p>
                    <span className="text-subtitle-home ">Crea tus órdenes de compra de manera simple y rápida.</span>
                </Col>
                <Col xs="12" className="text-center m-5">
                    <p className="text-title-blue-home">PORQUE CENTRAL MARKET</p>
                </Col>
                <Col xs="3">
                    <Card>
                        <img className="svg-home-card" src="images/userDesktop.svg" alt='branch' />
                        <span className="mini-text-title-blue-home p-4">EXPERIENCIA</span>
                        <span className="p-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum industry's standard dummy text ever standard dummy text ever standard dummy text ever.</span>
                    </Card>
                </Col>
                <Col xs="3">
                    <Card>
                        <img className="svg-home-card" src="images/moneyWomen.svg" alt='branch' />
                        <span className="mini-text-title-blue-home p-4">AHORRO</span>
                        <span className="p-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum industry's standard dummy text ever standard dummy text ever standard dummy text ever.</span>
                    </Card>
                </Col>
                <Col xs="3">
                    <Card>
                        <img className="svg-home-card" src="images/supportWomen.svg" alt='branch' />
                        <span className="mini-text-title-blue-home p-4">SOPORTE</span>
                        <span className="p-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum industry's standard dummy text ever standard dummy text ever standard dummy text ever.</span>
                    </Card>
                </Col>
                <Col xs="3">
                    <Card>
                        <img className="svg-home-card" src="images/successBoy.svg" alt='branch' />
                        <span className="mini-text-title-blue-home p-4">VARIEDAD</span>
                        <span className="p-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum industry's standard dummy text ever standard dummy text ever standard dummy text ever.</span>
                    </Card>
                </Col>
                <Col xs="12" className="text-center my-5">
                    <p className="text-title-blue-home">NUESTROS CLIENTES</p>
                </Col>
                <Col xs="4">
                    <img className="svg-home-card" src="images/companies/editorialAtlantida.svg" alt='branch' />
                </Col>
                <Col xs="4">
                    <img className="svg-home-card" src="images/companies/albagroup.svg" alt='branch' />
                </Col>
                <Col xs="4">
                    <img className="svg-home-card"  src="images/companies/osde.svg" alt='branch' />
                </Col>
                <Col xs="4">
                    <img className="svg-home-card" src="images/companies/sancorSeguros.svg" alt='branch' />
                </Col>
                <Col xs="4">
                    <img className="svg-home-card" src="images/companies/ledesma.svg" alt='branch' />
                </Col>
                <Col xs="4">
                    <img className="svg-home-card" src="images/companies/albagroup.svg" alt='branch' />
                </Col>
            </Row>

        </Container>
        <footer className="bg-white py-5">
            <Container>
                <Row>
                    <Col lg="3" md="3" sm="12" className="text-left">
                        <CentralMarketLogo />    
                    </Col>   
                    <Col lg="3" md="3" sm="12" className="text-left">
                        <p className="title-footer">Contactános</p>
                        <span className="link-footer"><a href="#">info@centralmarket.com</a></span><br/>
                        <span>
                            <img src="images/instagram.svg" alt="" />
                            <img className="p-2" src="images/facebook.svg" alt="" />
                        </span>
                    </Col>
                    <Col lg="3" md="3" sm="12" className="text-left">
                        <p className="title-footer">Donde estamos</p>
                        <span>
                            Calle Saavedra 186 <br/>
                            Caba, CP(1826)<br/>
                            Buenos Aires<br/>
                            +54 (011) 4267 8555 <br/>
                            +54 (011) 4234 7499<br/>
                        </span>
                    </Col>
                    <Col lg="3" md="3" sm="12" className="text-left">
                        <p className="title-footer">Menú</p>
                        <span className="link-footer"><a href="#">Empresa</a></span><br/>
                        <span className="link-footer"><a href="#">Clientes</a></span><br/>
                        <span className="link-footer"><a href="#">Contactos</a></span><br/>
                        <span className="link-footer"><a href="#">Registrate</a></span><br/>
                        <span className="link-footer"><a href="#">Ingreso</a></span><br/>
                    </Col>   
                </Row>  
                <hr />
                <p className=" text-opacity-footer">Cookies & Privacy </p>
            </Container>
        </footer>
        </>
    )
}

export default Home
