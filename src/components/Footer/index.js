import React from 'react';
import { Container, Row, Col, ListGroupItem, ListGroup } from 'reactstrap';
import LOGO from '../../images/LOGO.png';
import FOO from '../../images/FOO.png';


export default class Footer extends React.Component {
  render() {
    return (
      <Container>

        <Row>
          <Col xs="12" sm="4" lg="3">
            <div className='logoFOOTER' >
              <h3>Members</h3>
              <a href="/Home">
                <img src={FOO} alt="LOGO-3@3x.png" className="LOGO-img" />
              </a>
              <ListGroup>
                <h3>Contact Us</h3>
                <ListGroupItem>+46727745380</ListGroupItem>

                <ListGroupItem>vintrosagatan 54 lgh 1804, 12474 Stockholm, Sweden</ListGroupItem>
                <ListGroupItem>
                  info@lishba.com</ListGroupItem>
              </ListGroup>
            </div>
            </Col>
          <Col> 
          <ListGroup>
                <h3>Services</h3>
                <ListGroupItem>Custom Software Development</ListGroupItem>

                <ListGroupItem>Web App Development</ListGroupItem>
                <ListGroupItem>Wordpress Development cms</ListGroupItem>
                <ListGroupItem>SHOPIFY</ListGroupItem>

                <ListGroupItem>E-Commerce</ListGroupItem>
                <ListGroupItem>React js </ListGroupItem>

              </ListGroup>
              </Col>
          <Col> <ListGroup>
                <h3>Industries</h3>
                <ListGroupItem>Autotech</ListGroupItem>

                <ListGroupItem>Fintech</ListGroupItem>
                <ListGroupItem>Foodtech</ListGroupItem>
                <ListGroupItem>SHOPIFY</ListGroupItem>

                <ListGroupItem>Healthcare</ListGroupItem>
                <ListGroupItem>Construction </ListGroupItem>

              </ListGroup></Col>
          <Col>
            <div className='logoFOOTER' >
              <a href="/Home">
                <img src={LOGO} alt="LOGO-3@3x.png" className="LOGO-img" />
              </a>
              <ListGroup>
                <h3>About</h3>
                <ListGroupItem>Company Profile</ListGroupItem>

                <ListGroupItem>Our Team</ListGroupItem>
                <ListGroupItem>Our Methodology</ListGroupItem>
                <ListGroupItem>Careers</ListGroupItem>

                <ListGroupItem>Contact</ListGroupItem>
                <ListGroupItem>Resources </ListGroupItem>

              </ListGroup>
            </div>
          </Col>
        </Row>


      </Container>
    );
  }
}