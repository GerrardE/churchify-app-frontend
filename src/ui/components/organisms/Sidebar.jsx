import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classnames from "classnames";
import PropTypes from "prop-types";
import Logo from "@ui/assets/static/images/logo.png";

const Sidebar = ({ toggleCollapse }) => {
  // TODO: needs refactoring
  const [toggle, setToggle] = React.useState(false);

  const [toggleRep, setToggleRep] = React.useState(false);

  const [multiRep, setToggleMultiRep] = React.useState(false);

  const [multiRepGen, setToggleMultiRepGen] = React.useState(false);

  const [systems, setToggleSystems] = React.useState(false);

  
  const toggleSettings = () => setToggle((prevState) => !prevState);
  
  const toggleReports = () => setToggleRep((prevState) => !prevState);
  
  const toggleMultiRep = () => setToggleMultiRep((prevState) => !prevState);
  
  const toggleMultiRepGen = () => setToggleMultiRepGen((prevState) => !prevState);
  
  const toggleSystems = () => setToggleSystems((prevState) => !prevState);

  const { user } = useSelector((state) => state.signin);

  return (
    <React.Fragment>
      <div className="sidebar">
        <div className="sidebar-inner">
          <div className="sidebar-logo">
            <div className="peers ai-c fxw-nw">
              <div className="peer peer-greed">
                <a className="sidebar-link td-n" href="/dashboard">
                  <div className="peers ai-c fxw-nw">
                    <div className="peer">
                      <div className="logo">
                        <img src={Logo} alt="" />
                      </div>
                    </div>
                    <div className="peer peer-greed">
                      <h5 className="lh-1 mB-0 logo-text">TREM</h5>
                    </div>
                  </div>
                </a>
              </div>
              <div className="peer">
                <div className="mobile-toggle sidebar-toggle">
                  <Link
                    to="#"
                    role="button"
                    className="td-n"
                    onClick={toggleCollapse}
                  >
                    <i className="ti-arrow-circle-left" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <ul className="sidebar-menu scrollable pos-r">
            <li className="nav-item mT-30 actived">
              <a className="sidebar-link" href="/dashboard">
                <span className="icon-holder">
                  <i className="c-black-500 ti-home" />
                </span>
                <span className="title">Dashboard</span>
              </a>
            </li>
            {user.role.includes("admin") ? (
              <li
                className={classnames("nav-item mT-30 dropdown actived", {
                  open: toggleRep,
                })}
              >
                <a className="dropdown-toggle" onClick={toggleReports}>
                  <span className="icon-holder">
                    <i className="c-green-500 ti-clipboard" />
                  </span>
                  <span className="title">Reports</span>
                  <span className="arrow">
                    <i className="ti-angle-right" />
                  </span>
                </a>
                <ul className="dropdown-menu">
                  <li
                    className={classnames("nav-item dropdown", {
                      open: multiRep,
                    })}
                  >
                    <a className="sidebar-link" onClick={toggleMultiRep}>
                      <span>Submit</span>
                      <span className="arrow">
                        <i className="ti-angle-right" />
                      </span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="/reports/submit/attendance">Attendance</a>
                      </li>
                      <li>
                        <a href="/reports/submit/activity">Activity</a>
                      </li>
                      <li>
                        <a href="/reports/submit/membership">Membership</a>
                      </li>
                      <li>
                        <a href="/reports/submit/training">Training</a>
                      </li>
                      <li>
                        <a href="/reports/submit/group">Group</a>
                      </li>
                      <li>
                        <a href="/reports/submit/freport">Fellowship</a>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={classnames("nav-item dropdown", {
                      open: multiRepGen,
                    })}
                  >
                    <a className="sidebar-link" onClick={toggleMultiRepGen}>
                      <span>Generate</span>
                      <span className="arrow">
                        <i className="ti-angle-right" />
                      </span>
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="/reports/generate/zones">Zone</a>
                      </li>
                      <li>
                        <a href="/reports/generate/branches">Branch</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            ) : ""}
            <li className="nav-item mT-30 actived">
              <a className="sidebar-link" href="/downloads">
                <span className="icon-holder">
                  <i className="c-purple-500 ti-download" />
                </span>
                <span className="title">Downloads Center</span>
              </a>
            </li>
            {user.role.includes("admin") ? (
              <li
                className={classnames("nav-item mT-30 dropdown mb-4", {
                  open: toggle,
                })}
              >
                <a className="dropdown-toggle" onClick={toggleSettings}>
                  <span className="icon-holder">
                    <i className="c-orange-500 ti-settings" />
                  </span>
                  <span className="title">Settings</span>
                  <span className="arrow">
                    <i className="ti-angle-right" />
                  </span>
                </a>
                <ul className="dropdown-menu">
                  {user.role === "super:admin" ? (
                    <Fragment>
                      <li>
                        <a className="sidebar-link" href="/settings/users">
                          Users
                        </a>
                      </li>
                      <li>
                        <a className="sidebar-link" href="/settings/roles">
                          Roles
                        </a>
                      </li>
                      <li>
                        <a
                          className="sidebar-link"
                          href="/settings/permissions"
                        >
                          Permissions
                        </a>
                      </li>
                    </Fragment>
                  ) : (
                    ""
                  )}
                  <li>
                    <a className="sidebar-link" href="/settings/zones">
                      Zones
                    </a>
                  </li>
                  <li>
                    <a className="sidebar-link" href="/settings/branches">
                      Branches
                    </a>
                  </li>
                  <li>
                    <a className="sidebar-link" href="/settings/preachers">
                      Preachers
                    </a>
                  </li>
                  <li>
                    <a className="sidebar-link" href="/settings/fellowships">
                      Fellowships
                    </a>
                  </li>
                  <li>
                    <a className="sidebar-link" href="/settings/events">
                      Events
                    </a>
                  </li>
                  <li>
                    <a className="sidebar-link" href="/settings/categories">
                      Categories
                    </a>
                  </li>
                  <li>
                    <a className="sidebar-link" href="/settings/downloads">
                      Downloads
                    </a>
                  </li>
                </ul>
              </li>
            ) : (
              ""
            )}
            {user.role.includes("admin") ? (
              <li
                className={classnames("nav-item mT-30 dropdown mb-4", {
                  open: systems,
                })}
              >
                <a className="dropdown-toggle" onClick={toggleSystems}>
                  <span className="icon-holder">
                    <i className="c-blue-500 ti-pulse" />
                  </span>
                  <span className="title">System</span>
                  <span className="arrow">
                    <i className="ti-angle-right" />
                  </span>
                </a>
                <ul className="dropdown-menu">
                  {user.role === "super:admin" ? (
                    <li>
                      <a className="sidebar-link" href="/system/configs">
                        Configs
                      </a>
                    </li>
                  ) : ("")}
                  <li>
                    <a className="sidebar-link" href="/system/apilogs">
                      ApiLogs
                    </a>
                  </li>
                </ul>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

Sidebar.propTypes = {
  toggleCollapse: PropTypes.func.isRequired,
};

export default Sidebar;
