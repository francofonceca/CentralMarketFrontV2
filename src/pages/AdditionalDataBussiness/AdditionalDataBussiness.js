import React from 'react'
import { Container } from 'react-bootstrap'
import { PageHeader } from '../../components/PageHeader/PageHeader'
import { AdditionalDataBussinessForm } from './AdditionalDataBussinessForm'
import './index.css'

const AdditionalDataBussines = () =>  {
    return( 
        <>
            <div className="div-puntos">
                <p><img src="images/puntos.svg" alt="dots" /></p>
                <p><img className="mt-4" src="images/puntos.svg" alt="dots" /></p>
            </div>
            <Container>
                <PageHeader
                    section='Empresa'
                    tittle='Datos'
                    subTittle='Completa datos adicionales para saber más de la empresa'
                    imgSrc ='images/cards.svg'
                />
                <AdditionalDataBussinessForm />
            </Container>
        </>
    )
}
export default AdditionalDataBussines