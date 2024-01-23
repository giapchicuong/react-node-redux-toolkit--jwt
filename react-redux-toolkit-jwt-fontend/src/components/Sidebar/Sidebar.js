import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.scss";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const account = useSelector((state) => state.account);
  if (account && account.isAuthenticated === true) {
    return (
      <div className="sidebar-container">
        <div className="container">
          <div className="top ">
            <NavLink exact to="/" activeClassName="active">
              <div className="brand d-none d-lg-block">Dashboard</div>
            </NavLink>
            <div className="user">
              <div className="icon">
                <i className="fa fa-user-circle-o" aria-hidden="true"></i>
              </div>
              <div className="name d-none d-lg-block">
                {account.userInfor.username}
              </div>
            </div>
          </div>
          <div className="center">
            <NavLink exact to="/" activeClassName="active">
              <div className="item">
                <i className="fa fa-signal fs-6" aria-hidden="true"></i>
                <span className="d-none d-sm-inline">Dashboard</span>
              </div>
            </NavLink>
            <NavLink to="/users" activeClassName="active">
              <div className="item">
                <i className="fa fa-address-card" aria-hidden="true"></i>
                <span className="d-none d-sm-inline">Users</span>
              </div>
            </NavLink>
            <NavLink to="/groups" activeClassName="active">
              <div className="item">
                <i className="fa fa-users" aria-hidden="true"></i>
                <span className="d-none d-sm-inline">Groups</span>
              </div>
            </NavLink>{" "}
            <NavLink to="/roles" activeClassName="active">
              <div className="item">
                <i className="fa fa-cubes" aria-hidden="true"></i>
                <span className="d-none d-sm-inline">Roles</span>
              </div>
            </NavLink>
            <NavLink to="/group-role" activeClassName="active">
              <div className="item">
                <i class="fa fa-sitemap" aria-hidden="true"></i>
                <span className="d-none d-sm-inline">Roles of group</span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    );
  } else {
    // return <Redirect to="/login"></Redirect>;
    return <></>;
  }
};

export default Sidebar;
