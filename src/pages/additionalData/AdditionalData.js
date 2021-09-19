import React, { Component } from 'react'
import { Card, Container, Col, Row } from 'react-bootstrap'
import { BsArrowDown } from "react-icons/bs";
// no se bien si se importa el css principal o el scss con las clases especificas de este componente
import './additionaldata.scss';
import { AdditionalDataForm  } from './AdditionalDataForm';

export default class AdditionalData extends Component {

    render(){
        return( 
            <>
                <div className="div-puntos">
                    <p><img src="images/puntos.svg" alt="dots" /></p>
                    <p><img className="mt-4" src="images/puntos.svg" alt="dots" /></p>
                </div>
                <Container className="px-5 mt-5">
                    <Card className="shadow border-card">
                        <Row className="p-5">
                            <Col lg="3" md="3" sm="12" className="text-center">
                                <img src="images/foco.svg" alt="lamp" />
                            </Col>
                            <Col lg="9" md="9" sm="12" className="text-left pt-4">
                                <span className="text-title-ad-data"> Gracias por enviar <span className="text-violet"> tus datos!</span></span>
                            </Col>
                            <Col xs="12" className="pt-4 text-center">
                                <span className="text-normal">Estamos validando los <span className="text-violet">datos de tu empresa</span>, este proceso podrá demorar unas horas.</span><br/>
                                <span className="text-normal">Mientras tanto te invitamos a completar algunos datos adicionales de tu empresa.</span>
                            </Col>
                        </Row>
                    </Card>
                    <div className="text-center">
                        <BsArrowDown className="my-5  arrow-down" />
                        <p><span className="text-title text-violet">Datos Adicionales</span></p>
                    </div>
                    <AdditionalDataForm />
                </Container>
            </>
        )
    }
}