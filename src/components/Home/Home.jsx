import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRoute,
  faStrikethrough,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import showcasePhoto3 from "../img/showcase-photo3.jpg";
import showcasePhoto1 from "../img/showcase-photo1.jpg";
import "./Home.css";

function Home() {
  return (
    <>
      <header className='header'>
        <Navbar className='navbar' bg='transparent' expand='lg'>
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
        <div className='header-content'>
          <h1 className='lg-heading text-light main-heading'>
            travel the world
          </h1>
          <p className='text-light'>
            travel the world, experience the greatness, it's the best gift given
            by nature
          </p>
          <Button href='#' className='btn btn-primary text-red md-heading'>
            Explore Places
          </Button>
        </div>
      </header>

      <section className='showcase'>
        <Container>
          <div className='row row1'>
            <div className='img-box'>
              <img src={showcasePhoto3} alt='' />
            </div>
            <div className='text-box'>
              <h2 className='lg-heading text-black'>DEGANVY, U.K</h2>
              <p className='text-gray'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Impedit incidunt nulla a corporis eveniet pariatur maiores, id
                quis, totam dolore praesentium facere consequatur rem, fuga
                minus! Rerum, dolorem praesentium. Nemo?
              </p>
              <Button className='btn btn-secondary'>
                <Nav.Link as={NavLink} to='/about'>
                  MORE
                </Nav.Link>
              </Button>
            </div>
          </div>
          <div className='row row2'>
            <div className='col-md-6 order-md-2 img-box'>
              <img src={showcasePhoto1} alt='' />
            </div>
            <div className='col-md-6 order-md-1 text-box'>
              <h2 className='lg-heading text-black'>DESERT, EGYPT</h2>
              <p className='text-gray'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Maiores, amet ratione, quas laborum porro, explicabo vero ipsum
                laudantium nesciunt eos illum pariatur obcaecati fugiat
                asperiores nulla adipisci. Porro, atque itaque.
              </p>
              <Button className='btn btn-secondary'>
                <Nav.Link as={NavLink} to='/about'>
                  MORE
                </Nav.Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className='features'>
        <Container>
          <div className='box-wrapper'>
            <div className='box box-1'>
              <FontAwesomeIcon icon={faRoute} className='fa-2x text-red' />
              <h2 className='md-heading'>Adventure</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus, quia. Corporis dolores ipsa a veniam molestias beatae,
                fuga ex laboriosam.
              </p>
            </div>
            <div className='box box-2'>
              <FontAwesomeIcon icon={faStrikethrough} className='fa-2x' />
              <h2 className='md-heading'>Less Price</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus, quia. Corporis dolores ipsa a veniam molestias beatae,
                fuga ex laboriosam.
              </p>
            </div>
            <div className='box box-3'>
              <FontAwesomeIcon icon={faUserCheck} className='fa-2x text-red' />
              <h2 className='md-heading'>Experience</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus, quia. Corporis dolores ipsa a veniam molestias beatae,
                fuga ex laboriosam.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <footer className='footer'>
        <Container>
          <div className='social-media-links'>
            <FontAwesomeIcon icon={faFacebook} className='fa-4x pad' />
            <FontAwesomeIcon icon={faTwitter} className='fa-4x pad' />
            <FontAwesomeIcon icon={faInstagram} className='fa-4x pad' />
          </div>
          <p>World Travel &copy; 2020, All Rights Reserved</p>
        </Container>
      </footer>
    </>
  );
}

export default Home;
