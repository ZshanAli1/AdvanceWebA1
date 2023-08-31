import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { Container, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import company from "../img/company-img.jpg";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div>
        <Navbar className='navbar' bg='dark' expand='lg'>
          <Container>
            <h1 className='logo lg-heading text-light'>WT</h1>
            <ul className='nav-items'>
              <li className='nav-item'>
                <Nav.Link as={NavLink} to='/'>
                  Home
                </Nav.Link>
              </li>
              <li className='nav-item'>
                <Nav.Link as={NavLink} to='/about'>
                  About
                </Nav.Link>
              </li>
              <li className='nav-item'>
                <Nav.Link as={NavLink} to='/contact'>
                  Contact
                </Nav.Link>
              </li>
            </ul>
          </Container>
        </Navbar>
      </div>
      <section className='contact-form'>
        <Container>
          <div className='form-wrapper'>
            <div className='company-address'>
              <div className='address-group'>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className='fa-3x text-red'
                />
                <h2 className='text-gray md-heading'>Location</h2>
                <p>#2661 Janakpuri Colony, city name, town name</p>
              </div>
              <div className='address-group'>
                <FontAwesomeIcon icon={faEnvelope} className='fa-3x text-red' />
                <h2 className='text-gray md-heading'>Email</h2>
                <p>harshitvashisth@mycompany.com</p>
              </div>
              <div className='address-group'>
                <FontAwesomeIcon
                  icon={faPhoneSquareAlt}
                  className='fa-3x text-red'
                />
                <h2 className='text-gray md-heading'>Call</h2>
                <p>+910101010101</p>
              </div>
              <img src={company} alt='' />
            </div>
            <Form className='form'>
              <h1 className='lg-heading text-black'>Contact Us</h1>
              <p className='text-gray'>
                Let us know your questions, suggestions and concerns by filling
                out the contact form below.
              </p>
              <Form.Group>
                <Form.Label htmlFor='username'>Username</Form.Label>
                <Form.Control type='text' id='username' required />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor='email'>Email</Form.Label>
                <Form.Control type='email' id='email' required />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor='phone'>Phone</Form.Label>
                <Form.Control type='text' id='phone' required />
              </Form.Group>
              <Form.Group>
                <Form.Label htmlFor='message'>Message</Form.Label>
                <Form.Control as='textarea' id='message' />
              </Form.Group>
              <button type='submit' className='form-btn'>
                Submit
              </button>
            </Form>
          </div>
        </Container>
      </section>
      <footer className='footer'>
        <div className='social-media-links'>
          <FontAwesomeIcon icon={faFacebook} className='fa-4x pad' />
          <FontAwesomeIcon icon={faTwitter} className='fa-4x pad' />
          <FontAwesomeIcon icon={faInstagram} className='fa-4x pad' />
        </div>
        <p>World Travel &copy; 2020, All Rights Reserved</p>
      </footer>
    </>
  );
}
export default Contact;
