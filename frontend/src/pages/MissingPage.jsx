import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

export default function MissingPage() {
    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Row>
                <Col xs={12} className="text-center">
                    <div className="page-404">
                        <div className="inner-circle"><i className="fa fa-home"></i><span><h1>404</h1></span></div>
                        <h1 className="inner-status">Oops! You're lost</h1>
                        <p className="inner-detail">
                            We cannot find the page you're looking for.
                        </p>
                        <Button href="/" variant="info"><i className="fa fa-home"></i>&nbsp; Return home</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}