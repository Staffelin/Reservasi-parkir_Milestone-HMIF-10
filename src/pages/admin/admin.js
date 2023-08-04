import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import './admin.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ReserveCard from "../../components/reserve_admin/reserve-card";


const Admin = () => {
    return (
        <Container fluid>
            <Row>
                <Col md={7} className="border">
                    <h1 className="text-center">Reserve</h1>
                    <Row>
                        <Col>
                            <ReserveCard loc="Seni Rupa" mobil="17" motor="56"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ReserveCard loc="Sipil" mobil="3" motor="89"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <ReserveCard loc="Saraga" mobil="0" motor="9"/>
                        </Col>
                    </Row>
                </Col>

                <Col md={5} className="border">
                    <h1 className="text-center">QR Scanner</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Admin;