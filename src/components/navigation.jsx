import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <header>
      <div className="links">
          <Navbar bg='dark' variant='dark'>
              <Container>
                  <Navbar.Brand>Notes</Navbar.Brand>
        <NavLink to="/" className="link" activeClassName="active" exact>
          Notes
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add Note
        </NavLink>
        </Container>
        </Navbar>
      </div>
    </header>
  );
};

export default Navigation;