import React, {useState} from 'react';
import { Button,Form,Container } from 'react-bootstrap';
import './login.css';

function Login(props) {
  const [formValues, setFormValues] = useState({email:"", password:"",role:true})
  const [validationStates, setValidationStates] = useState({emailState:true, passwordState:true})

  const handleEmailChange = ((e) => {
    setFormValues({...formValues, email: e.target.value})
  });

  const handlePasswordChange = ((e) => {
  setFormValues({...formValues, password: e.target.value})
  if (e.target.value.length < 6 ) {
    setValidationStates({...validationStates, passwordState:false})
  }else{
    setValidationStates({...validationStates, passwordState:true})
  }
  });

  const clickSubmit = (() => {
    if (formValues.email.includes("@") && validationStates.passwordState) {
      setValidationStates({ ...validationStates, emailState: true });
      //window.location.replace('http://localhost:3000/parts');
      alert("user created :)")
      
    } else if (!formValues.email.includes("@")) {
      setValidationStates({ ...validationStates, emailState: false });
    } else if (!validationStates.passwordState) {
      setValidationStates({ ...validationStates, passwordState: false });
    }
    })

    const exampleJSON = { email: formValues.email, password: formValues.password, role: formValues.role}
  
  return (
    <div className='login'>
      <header className='login-header'>
          <h1>Log In</h1> 
          <Form>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control 
                className={!validationStates.emailState ? 'is-invalid' : ''} 
                type='email' 
                placeholder='email@example.com'
                onChange={handleEmailChange}
                />
              <Form.Label>Password</Form.Label>
              <Form.Control 
              className={!validationStates.passwordState ? 'is-invalid' : ''} 
              type='password'
              onChange={handlePasswordChange}
              />
            </Form.Group>  
          </Form>
          <Button variant='secondary' type='submit' onClick={clickSubmit} className='mt-4'>Log In</Button>
        
      </header>
    </div>
  );
}

export default Login;
