import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {Row, Col, Button } from 'react-bootstrap';

//import './PageHeader.css';
import './PageHeader.scss';
import { ModalGuiaRapida } from '../ModalGuiaRapida';

export const PageHeader = ({section, tittle, subTittle, imgSrc}) => {
    
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Row className='p-5 header-branch'>
            <Col lg='7'  sm='12' className='text-left'>
                <div className='header-position-top'>
                    {/* <span className='text-title'>{ section }</span> */}
                    <Button className='btn-guide' onClick = { handleShow }>
                        <img className='header-branch-img' src='images/icons/help-icon.svg' alt='help' />
                        GUIA RAPIDA                        
                    </Button> 
                    <ModalGuiaRapida show = { show } handleClose = { handleClose } />
                </div>
                <div className='header-position-bottom'>
                    <div>
                        <p className='text-title-branch'>{ tittle }</p>
                        <span className='text-title-branch-desc'>{ subTittle }</span>
                    </div>
                </div>
            </Col>
            <Col lg='5' className='branch-header-img-container'>
                <img className='header-branch-img' src={ imgSrc } alt='branch' />
            </Col>
        </Row>
    )
}

PageHeader.propTypes = {
    section: PropTypes.string, 
    tittle: PropTypes.string, 
    subTittle: PropTypes.string, 
    imgSrc: PropTypes.string
}

export default PageHeader
