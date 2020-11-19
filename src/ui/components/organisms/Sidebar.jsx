import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import PropTypes from "prop-types";
import Logo from "@ui/assets/static/images/logo.png";

const Sidebar = ({ toggleCollapse }) => {
  const [toggle, setToggle] = React.useState(false);

  const toggleSettings = () => setToggle(prevState => !prevState);

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
                  <i className="c-blue-500 ti-home" />
                </span>
                <span className="title">Reports</span>
              </a>
            </li>
            <li className="nav-item mT-30 actived">
              <a className="sidebar-link" href="/dashboard/downloads">
                <span className="icon-holder">
                  <i className="c-blue-500 ti-download" />
                </span>
                <span className="title">Downloads Center</span>
              </a>
            </li>
            <li className="nav-item mT-30 actived">
              <a className="sidebar-link" href="/dashboard/resources">
                <span className="icon-holder">
                  <i className="c-blue-500 ti-layout-grid3" />
                </span>
                <span className="title">Resources</span>
              </a>
            </li>
            <li className={classnames("nav-item mT-30 dropdown", {"open": toggle})}>
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
                  <a className='sidebar-link' href="/dashboard/settings/zones">Zones</a>
                </li>
                <li>
                  <a className='sidebar-link' href="/dashboard/settings/branches">Branches</a>
                </li>
                <li>
                  <a className='sidebar-link' href="/dashboard/settings/preachers">Preachers</a>
                </li>
                <li>
                  <a className='sidebar-link' href="/dashboard/settings/fellowships">Fellowships</a>
                </li>
                <li>
                  <a className='sidebar-link' href="/dashboard/settings/events">Events</a>
                </li>
                <li>
                  <a className='sidebar-link' href="/dashboard/settings/categories">Categories</a>
                </li>
                <li>
                  <a className='sidebar-link' href="/dashboard/settings/downloads">Downloads</a>
                </li>
              </ul>
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
