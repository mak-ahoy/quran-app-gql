import React, { useEffect, useState } from 'react'
import NavBar from '../components/Navbar'
import { Container, Row, Col } from 'react-bootstrap'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function SpecificCard() {
    const location = useLocation();
    const chapter_no = location.state
    const [content, setContent] = useState([]);


    const getSurahVerses = async ()=>{

        try{
            const uri = 'http://localhost:8000/get-surahs/surah-info'
            const response = await axios.post(uri, {chapter: chapter_no })
            setContent(response.data.verses)

        }
        catch(error){
            console.log(error.response.data.message);
        }

    }
    useEffect(()=>{
        getSurahVerses();
    }, [])


  return (
    <div>
       <NavBar />
       <Container className='d-flex justify-content-center bg-secondary rounded mt-5' >
        <Row className='gy-3'>
            {
                content.map((verse, index)=>{
                    return (
                        <div className='.bg-secondary.bg-gradient rounded' key={verse.id}>
                        <Col md = {12} className='p-3 bg-light text-right' ><span><h4>{verse.verse_number}</h4></span>{ verse.text_uthmani}</Col>
                        <Col md = {12} className='p-3 bg-light' >{verse.translations[0].text.replace(/<\/?[^>]+(>|$)/g, "")}</Col>
                        </div>
                    )
                })
            }
            
        </Row>
       </Container>
    </div>
  )
}
