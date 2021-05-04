import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Button
} from 'reactstrap';
import { signInUser, signOutUser } from '../helpers/auth';

const NavBar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const authenticated = () => (
    <>
      <NavItem>
        <Link className="nav-link" to="/add-authors/">Add Authors</Link>
      </NavItem>
      <NavItem>
        <Link className="nav-link" to="/authors">Author Cards</Link>
      </NavItem>
    </>
  );

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">React</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            { user && authenticated() }
          </Nav>
              <Button onClick={signInUser}>
                { user !== null
                  && <div>
                    {
                      user
                        ? <div color="secondary" onClick={signOutUser}>Sign Out</div>
                        : <div color="secondary" onClick={signInUser}>Sign In</div>
                    }
                    </div>
                }
              </Button>
        </Collapse>
      </Navbar>
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.any
};

export default NavBar;
