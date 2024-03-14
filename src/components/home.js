import React, {useState,useEffect} from 'react';
import { Button,Form,Container,Row,Col,Image } from 'react-bootstrap';
import './home.css';

function Home(){
    const [fotos, setFotos] = useState([]);
    useEffect(() => {
        const URL ="https://raw.githubusercontent.com/sanrappy/parcial1Web/main/src/data.json?token=GHSAT0AAAAAACNMZR6F7XOSXXKZDTN677QQZPTDGSA";
        fetch(URL).then(data => data.json()).then(data =>{
            setFotos(data);
        }); 
    }, []);

    const ImgPressed = (() => {
        window.location.replace('http://localhost:3000/perfil');
    })
    return (
        <div className='home'>
            <header className='home-header'>
                <Container>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image 
                            src="https://thispersondoesnotexist.com" 
                            roundedCircle
                            width="50%"
                            alt="profile picture"
                            onClick={ImgPressed()}
                            />                        
                        </Col>
                        <Col>
                            <h1>Username</h1>
                            <p>FirstName</p>
                            <p>LastName</p>
                            <p>Description</p>
                            <a>URL</a>
                        </Col>
                    </Row>
                    <Row>
                        {fotos.map(foto => (
                            <Col key={foto.id}>
                                <Image src={foto.imgurl}></Image>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </header>
        </div>
    );
}

export default Home;