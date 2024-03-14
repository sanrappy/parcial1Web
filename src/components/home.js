import React, {useState} from 'react';
import { Button,Form,Container,Row,Col,Image } from 'react-bootstrap';
import './home.css';

function Home(){
    const [fotos, setFotos] = useState([]);
    useEffect(() => {
        const URL ="";
        fetch(URL).then(data => data.json()).then(data =>{
            setCarros(data);
        }); 
    }, []);
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
                        {}
                    </Row>
                </Container>
            </header>
        </div>
    );
}

export default Home;