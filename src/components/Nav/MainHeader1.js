import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainHeader1.css';
import { List } from 'react-bootstrap-icons';
import logo from '../../assets/img/test2.png'

const MainHeader = props => {
  const { location } = props;

  const [expanded, setExpanded] = useState(false);

  const closeNav = () => setExpanded(false)


  return (
    <>
      <Navbar variant="light" expand="lg" sticky="top"
        className="navbar1 navbar-fixed-top" activeKey={location}
        expanded={expanded}
      >

        <Navbar.Brand exact href="/" eventKey="/" >
          <img alt="logo" src={logo} width="30" height="30" className="d-inline-block align-top"/>
        {' '}
          <span className="navbar-brand1">Samer Alnajjar</span>
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : "expanded")}
          aria-controls="responsive-navbar-nav"
          className="text-light"
          bg="light"
        >
          <List className="text-light" size={40} />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav activeKey={location} className="nav-link">
            <Nav.Link style={{ display: "flex", justifyContent: "center" }} onClick={closeNav} className="text-white " activeClassName="active" as={NavLink} to="/MyBooks">Books</Nav.Link>
            <Nav.Link style={{ display: "flex", justifyContent: "center",}} onClick={closeNav} className="text-white " activeClassName="active" as={NavLink} to="/AboutMe">About Me</Nav.Link>
            <Nav.Link style={{ display: "flex", justifyContent: "center" }} onClick={closeNav} className="text-white " activeClassName="active" as={NavLink} to="/Contact">Contact Me</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default MainHeader
// export default Toolbar;
