import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Signup() {
    const navigate = useNavigate()
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPass, setConfirmPass] = useState();
    const [username, setUsername] = useState();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    const handleSignup = async (e) => {
      e.preventDefault();
      
      try{
        if (!email || !password || !confirmPass || !username){
          alert('fill all fields')
          return;
        }
        if (!emailRegex.test(email)) {
          alert('invalid email');
          return;
        }
        
        let uri = 'http://localhost:8000/register'
        const response = await axios.post(uri, {email:email, password:password, username:username}) 

        alert(response.data.message)
        navigate("/");
      }
      catch(error){
        alert(error.response.data.message)
      }
    
        
    }

    const getEmail = (e) => {
      e.preventDefault();
      
      setEmail(e.target.value)
      
    }

    const getPassword = (e) => {
      e.preventDefault();
      setPassword(e.target.value)
      
      
    }

    const getConfirmPassword = (e) => {
      e.preventDefault();
      setConfirmPass(e.target.value)
      
      
    }

    const getUsername= (e) => {
      e.preventDefault();
      setUsername(e.target.value)
          
    }

  return (
    <>
    <Container className='mx-auto mt-5 p-4 w-50 bg-light rounded'>
     <h3 className='text-center'>SIGN UP</h3>
     <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={getEmail} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="@username" onChange={getUsername}/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={getPassword} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={getConfirmPassword} />
      </Form.Group>

      <div className='d-flex justify-content-center mt-5'>
        <Row>
          <Col sm={12} md={12} >
            <Form.Text className="text-muted">
            <a href="/" className="link-underline">
                Already have an account? Login. 
              </a>
            </Form.Text>
          </Col>
          
          <Col sm={12} md={12} className='mt-1'>
            <Button variant="primary" type="submit" onClick={handleSignup} >
                Signup
            </Button>
          </Col>
        </Row>
        
           
      </div>
      
    </Form>
    </Container>
    </>
   
  );
}

export default Signup;