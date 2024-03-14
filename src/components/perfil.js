import React, {useState,useEffect} from 'react';
import { Button,Form,Container,Row,Col,Image } from 'react-bootstrap';
import './perfil.css';

function Perfil(props){
    return (
        <div className='perfil'>
        <header className='perfil-header'>
            <Container>
                <Row>
                    <Col>
                        <Form>
                            <Form.Group>
                                <Form.Control
                                    type='text'
                                    placeholder='Username'
                                ></Form.Control>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </header>
        </div>
    );
}

export default Perfil;