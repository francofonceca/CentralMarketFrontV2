import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CompanyDataForm } from './CompanyDataForm';
import './CompanyDataReg.scss';

import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';


const CompanyDataReg = () => {

    const { loading, data } = useQuery( FETCH_USER_QUERY );

    if(data){
        console.log(data);
    }

    return (
        <>
            <Container className="fullPage">
                <div className="div-puntos-comp">
                    <img src="images/puntos.svg" alt="dots" />
                    <img className="mt-2" src="images/puntos.svg" alt="dots" />
                </div>
                <Row className="pt-4 px-5 row-size">
                    <Col xs="6" className="row-size">
                        <div className="legend-div">
                            <span className="text-title-comp-data">Bienvenido a <br /><span className="text-violet">Central Market</span></span>
                            <p>Gracias por unirte a Central Market! <br />A continuación necesitamos que completes los siguientes datos para que podamos validar tu empresa y asi puedas empezar a crear órdenes.</p>
                        </div>
                        <div className="image-div">
                            <img className="image-size" src="images/idea.svg" alt="idea" />
                        </div>
                    </Col>
                    <Col xs="6" className="row-size">
                        <CompanyDataForm />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

const FETCH_USER_QUERY = gql`
   {
       currentUser {
            id
        }
    }
`

export default CompanyDataReg
