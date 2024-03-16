import React, {useState,useEffect} from 'react';
import { Button,Form,Container,Row,Col,Image } from 'react-bootstrap';
import './home.css';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";

i18n 
.use (initReactI18next)
.init({
    resources: {
        es: {
            translation: {
                "Username": "NombreUsuario",
                "Firstname": "Primer Nombre",
                "Lastname": "Apellido",
                "Description": "Descripción",
                "URL": "URL"
            }
        },
        en: {
            translation: {
                "Username": "UserName",
                "Firstname": "First Name",
                "Lastname": "Last Name",
                "Description": "Description",
                "URL": "URL"
            }
        }
    },
    lng: "es",
    fallbackLng: "es",

    interpolation: {
        escapeValue: false
    }
});

function Home(){
    const {t} = useTranslation();
    const [fotos, setFotos] = useState([]);
    useEffect(() => {
        const URL ="https://raw.githubusercontent.com/sanrappy/parcial1Web/main/src/data.json";
        fetch(URL).then(data => data.json()).then(data =>{
            setFotos(data);
        }); 
    }, []);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    const ImgPressed = (() => {
        //window.location.replace('http://localhost:3000/perfil');
    })
    return (
        <div className='home'>
            <header className='home-header'>
                <Container>
                    <Row>
                        <Row className='mb-5'>
                            <Col>
                            <Button onClick={() => changeLanguage('es')}>Español</Button>
                        </Col>
                        <Col>
                            <Button onClick={() => changeLanguage('en')}>English</Button>
                        </Col>
                        </Row>
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
                            <h1>{t('Username')}</h1>
                            <p>{t('Firstname')}</p>
                            <p>{t('Lastname')}</p>
                            <p>{t('Description')}</p>
                            <a>{t('URL')}</a>
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