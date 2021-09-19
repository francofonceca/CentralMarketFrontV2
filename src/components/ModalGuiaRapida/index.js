import React from 'react';
import { Modal, Row, Col, Card } from 'react-bootstrap';
import './modalGuia.css';

export const ModalGuiaRapida = ( { show, handleClose }) => {

    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false} size="lg" >
                <Modal.Header closeButton>
                    <div className="text-center w-100">
                        <p className="title-modal">GUIA RAPIDA</p>
                        <span> Configura en tres pasos tu cuenta en forma rapida</span>
                    </div>
                </Modal.Header>
                <Modal.Body>
                        <Row>
                            <Col lg="3" md="3" sm="12" className="col-guide"> 
                                <Card className="pt-4 text-center card-gray">
                                    <img src = "images/icons/store-icon.svg" alt = "Sucursales" className="icon-guide" />
                                    <p className="text-title pt-2">1. Sucursales</p>
                                    <p className="text-description"> Carga los datos de tus sucursales y sus referentes</p>
                                </Card>
                            </Col>
                            <Col lg="3" md="3" sm="12"> 
                                <Card className="pt-4 text-center card-gray">
                                    <img src = "images/icons/map-marker-icon.svg" alt = "Sucursales" className="icon-guide" />
                                    <p className="text-title pt-2">2. Delivery Points</p>
                                    <p className="text-description ">Carga los datos de tus delivery points y sus referentes</p>
                                </Card>  
                            </Col>
                            <Col lg="3" md="3" sm="12">
                                <Card className="pt-4 text-center card-gray">
                                    <img src = "images/icons/user-icon.svg" alt = "Sucursales" className="icon-guide" />
                                    <p className="text-title pt-2">3. Usuarios</p>
                                    <p className="text-description"> Carga los datos de los usuarios y sus referentes </p>
                                </Card>   
                            </Col>
                            <Col lg="3" md="3" sm="12"> 
                                <Card className="pt-4 text-center card-gray">
                                    <img src = "images/icons/security-icon.svg" alt = "Sucursales" className="icon-guide" />
                                    <p className="text-title pt-2">4. Seguridad</p>    
                                    <p className="text-description"> Carga tus datos principales para seguridad dentro de la aplicacion</p>
                                </Card>  
                            </Col>
                        </Row>
                        <br />
                </Modal.Body>
            </Modal>
        </>
    )
}