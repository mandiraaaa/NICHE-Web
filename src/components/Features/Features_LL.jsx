import * as React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import HeroImg from '../../images/hero-phone.png';
import { StaticImage } from 'gatsby-plugin-image';


const Fetures = () => {
    return (
      <section id="features_ll">
      <Container>
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
          <StaticImage
          alt=""
          src='../../images/hero-phone.png'
         // width="50"
         // height="50"
          className="hero-phone"/>
          </Col >
          <Col md={6} sm={12}>
          <Row className="feature-title">
          <h1>EVERYTHING YOU NEED <br/>AT YOUR FINGERTIPS</h1>
          </Row>
          <Row className="feature-row">
          <h3 className="feature-name">Shop and Explore</h3>
          <p className="feature-info">Shop Women's , Men's , Kids And Cosmetics</p>
          </Row>
          <Row className="feature-row">
          <h3 className="feature-name">Buy Direct</h3>
          <p className="feature-info">Buy Direct From The People Who Made It</p>
          </Row>
      
          </Col>
        </Row>
      </Container>
    </section>
)
}
export default Fetures