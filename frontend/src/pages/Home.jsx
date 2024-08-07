import React , {useEffect, useState} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import SurahCard from '../components/SurahCard'
import NavBar from '../components/Navbar'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
 

export default function Home() {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    

    const handleClick = (e, id) =>{
        e.preventDefault();
        navigate('/home/surah', {state: id} )
    }

    const loadData = async () =>{
        let uri = "http://localhost:8000/get-surahs"
        const response = await axios.get(uri);
        setData(response.data.chapters)
    }
  
    useEffect(()=>{
        loadData();
    }, []);

  return (
    <>
    <NavBar />
    <Container className='d-flex justify-content-center flex-wrap mt-5'>
        <Row>
            <Col md={12}>
                <h1>Welcome to the Quran App</h1>
            </Col>
        </Row>

        <Container className='mt-5 d-flex justify-content-center'>
            <Row>
                {data.map((element, index)=>{
                    return (
                        <Col md={4} key={index}>
                            <Link className='text-decoration-none' onClick={(e) => handleClick(e, element.id )} >
                                <SurahCard title={element.name_simple} othertitle={element.name_arabic} id={element.id} />
                            </Link> 
                        </Col>
                    );
                })}
            
            </Row>
        </Container>
       
    </Container>
    </>
  )
}
