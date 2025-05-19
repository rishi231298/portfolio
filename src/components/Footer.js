import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          <Col size={12} sm={6}>
             <div style={{ fontWeight: 'bold', fontSize: '24px', lineHeight: '1.2',color:"white" }}>
  <span style={{fontSize:"30px"}}>Rishi</span>
  <br />
  <span style={{fontSize:"20px",marginTop:"px"}}>portfolio</span>
</div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/rishi-kumar-singh-99abab190/" target="_blank"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.instagram.com/iamsrk" target="_blank"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Last updated on 18 May 2025</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
