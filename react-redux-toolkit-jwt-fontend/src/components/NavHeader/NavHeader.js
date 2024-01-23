import React from "react";
import "./navHeader.scss";
import { Container, Dropdown, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { logoutUser } from "../../services/userSevices";
import { toast } from "react-toastify";
function NavHeader() {
  const account = useSelector((state) => state.account);

  const currentUser = useSelector((state) => state.account.userInfor.username);

  const history = useHistory();
  const handleLogout = async () => {
    const res = await logoutUser();
    if (res && res.EC === 0) {
      toast.success(res.EM);
      history.push("/login");
    }
  };
  if (account && account.isAuthenticated === true) {
    return (
      <div className="header-container">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto"></Nav>
              <Nav className="me-right">
                <Nav.Item exact className="nav-link">
                  Welcome {currentUser} !
                </Nav.Item>
                <NavDropdown
                  title="Settings"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item>Change Password</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={() => handleLogout()}>
                    <span> Logout</span>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
          </Container>
        </Navbar>
      </div>
    );
  } else {
    // return <Redirect to="/login"></Redirect>;
    return <></>;
  }
}

export default NavHeader;
