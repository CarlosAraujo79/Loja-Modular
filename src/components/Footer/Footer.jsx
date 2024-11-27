import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
        <Container>
          <Row className="footer-row">
            <Col md={3} sm={5} className='box'>
              <div className="logo">
                  <ion-icon name="bag"></ion-icon>
                  <h1>Barlos</h1>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            </Col>

            <Col md={3} sm={5} className='box'>
              <h2>Grupo</h2>
              <ul>
                <li>Ana Beatriz Pessoa </li>
                <li>Carlos Araújo</li>
                <li>Janyne Soartes</li>
                <li>Lucas Dawis</li>

              </ul>
            </Col>
          </Row>
        </Container>
    </footer>
  )
}

export default Footer
