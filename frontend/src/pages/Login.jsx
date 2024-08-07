import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleLogin = async (e) => {
      try {
        e.preventDefault();
        if (!email || !password){
          alert("Please enter all fields");
          return;
        }
        let uri = 'http://localhost:8000/login'
        const response = await axios.post(uri, {email: email, password: password}) 
        localStorage.setItem("token", response.data.user_token)
        alert(response.data.message)

        navigate('/home')
    }
    catch(error) {
      alert("invalid password or username")
    }
        
    }

    const getEmail = (e) =>{
      setEmail(e.target.value)
    }

    const getPassword = (e) =>{
      setPassword(e.target.value)
    }

  return (
    <>
    <Container className='mx-auto mt-5 p-5 w-75 bg-light rounded'>
     <h3 className='text-center'>LOGIN</h3>
     <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={getEmail}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={getPassword}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Text className="text-muted">
        <a href="/signup" className="link-underline">
            Don't have and account? Signup. 
          </a>
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit" className='mt-4' onClick={handleLogin}>
        Login
      </Button>
    </Form>
    </Container>
    </>
   
  );
}

export default Login;