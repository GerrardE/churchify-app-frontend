import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import PropTypes from "prop-types";
import Logo from "@ui/assets/static/images/logo.png";

const Sidebar = ({ toggleCollapse }) => {
  const [toggle, setToggle] = React.useState(false);

  const [toggleRep, setToggleRep] = React.useState(false);

  const [multiRep, setToggleMultiRep] = React.useState(false);

  const toggleSettings = () => setToggle(prevState => !prevState);

  const toggleReports = () => setToggleRep(prevState => !prevState);

  const toggleMultiRep = () => setToggleMultiRep(prevState => !prevState);

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
                      <h5 className="lh-1 mB-0 logo-text">Trem Admin</h5>
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
            <li className={classnames("nav-item mT-30 dropdown actived", {"open": toggleRep})}>
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
                <li className={classnames("nav-item dropdown", {"open": multiRep})}>
                  <a className='sidebar-link' onClick={toggleMultiRep}>
                    <span>
                      Submit
                    </span>
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
                <li>
                  <a className='sidebar-link' href="/reports/generate">Generate</a>
                </li>
              </ul>
            </li>
            <li className="nav-item mT-30 actived">
              <a className="sidebar-link" href="/downloads">
                <span className="icon-holder">
                  <i className="c-purple-500 ti-download" />
                </span>
                <span className="title">Downloads Center</span>
              </a>
            </li>
            {/* <li className="nav-item mT-30 actived">
              <a className="sidebar-link" href="/resources">
                <span className="icon-holder">
                  <i className="c-blue-500 ti-layout-grid3" />
                </span>
                <span className="title">Resources</span>
              </a>
            </li> */}
            <li className={classnames("nav-item mT-30 dropdown mb-4", {"open": toggle})}>
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
                <li>
                  <a className='sidebar-link' href="/settings/zones">Zones</a>
                </li>
                <li>
                  <a className='sidebar-link' href="/settings/branches">Branches</a>
                </li>
                <li>
                  <a className='sidebar-link' href="/settings/preachers">Preachers</a>
                </li>
                <li>
                  <a className='sidebar-link' href="/settings/fellowships">Fellowships</a>
                </li>
                <li>
                  <a className='sidebar-link' href="/settings/events">Events</a>
                </li>
                <li>
                  <a className='sidebar-link' href="/settings/categories">Categories</a>
                </li>
                <li>
                  <a className='sidebar-link' href="/settings/downloads">Downloads</a>
                </li>
              </ul>
            </li>
            <li className="nav-item mT-30 actived">
              <a className="sidebar-link" href="/permissions">
                <span className="icon-holder">
                  <i className="c-yellow-500 ti-key" />
                </span>
                <span className="title">Permissions</span>
              </a>
            </li>
            <li className="nav-item mT-30 actived">
              <a className="sidebar-link" href="/roles">
                <span className="icon-holder">
                  <i className="c-green-500 ti-android" />
                </span>
                <span className="title">Roles</span>
              </a>
            </li>
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
