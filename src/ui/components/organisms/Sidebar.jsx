import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Logo from "@ui/assets/static/images/logo.png";
import { Admin, SuperAdmin, SystemAdmin, BranchAdmin, ZoneAdmin, User } from "./Sidebars";

const Sidebar = ({ toggleCollapse, history }) => {
  // TODO: needs refactoring
  const [toggle, setToggle] = React.useState(false);

  const [toggleRep, setToggleRep] = React.useState(false);

  const [toggleFin, setToggleFin] = React.useState(false);

  const [multiRep, setToggleMultiRep] = React.useState(false);

  // const [multiRepGen, setToggleMultiRepGen] = React.useState(false);

  const [systems, setToggleSystems] = React.useState(false);

  const [localisation, setToggleLocalisation] = React.useState(false);

  
  const toggleSettings = () => setToggle((prevState) => !prevState);
  
  const toggleReports = () => setToggleRep((prevState) => !prevState);

  const toggleFinances = () => setToggleFin((prevState) => !prevState);
  
  const toggleMultiRep = () => setToggleMultiRep((prevState) => !prevState);
  
  // const toggleMultiRepGen = () => setToggleMultiRepGen((prevState) => !prevState);
  
  const toggleSystems = () => setToggleSystems((prevState) => !prevState);

  const toggleLocalisation = () => setToggleLocalisation((prevState) => !prevState);

  const { user } = useSelector((state) => state.signin);

  return (
    <React.Fragment>
      <div className="sidebar">
        <div className="sidebar-inner">
          <div className="sidebar-logo">
            <div className="peers ai-c fxw-nw">
              <div className="peer peer-greed">
                <a className="sidebar-link td-n" onClick={() => history.push("/dashboard")}>
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
            {(user.role === "user") ? (
              <User
                toggleRep={toggleRep}
                toggleReports={toggleReports}
                multiRep={multiRep}
                toggleMultiRep={toggleMultiRep}
                toggleFin={toggleFin}
                toggleFinances={toggleFinances}
                history={history}
              />
            ) : ""}
            {(user.role === "branch:admin") ? (
              <BranchAdmin
                toggleRep={toggleRep}
                toggleReports={toggleReports}
                multiRep={multiRep}
                toggleMultiRep={toggleMultiRep}
                toggleFin={toggleFin}
                toggleFinances={toggleFinances}
                toggle={toggle}
                toggleSettings={toggleSettings}
                history={history}
              />
            ) : ""}
            {(user.role === "zone:admin") ? (
              <ZoneAdmin
                toggleRep={toggleRep}
                toggleReports={toggleReports}
                multiRep={multiRep}
                toggleMultiRep={toggleMultiRep}
                toggleFin={toggleFin}
                toggleFinances={toggleFinances}
                toggle={toggle}
                toggleSettings={toggleSettings}
                history={history}
              />
            ) : ""}
            {(user.role === "admin") ? (
              <Admin
                toggleRep={toggleRep}
                toggleReports={toggleReports}
                multiRep={multiRep}
                toggleMultiRep={toggleMultiRep}
                toggleFin={toggleFin}
                toggleFinances={toggleFinances}
                toggle={toggle}
                toggleSettings={toggleSettings}
                systems={systems}
                toggleSystems={toggleSystems}
                history={history}
              />
            ) : ""}
            {(user.role === "super:admin") ? (
              <SuperAdmin
                toggleRep={toggleRep}
                toggleReports={toggleReports}
                multiRep={multiRep}
                toggleMultiRep={toggleMultiRep}
                toggleFin={toggleFin}
                toggleFinances={toggleFinances}
                toggle={toggle}
                toggleSettings={toggleSettings}
                systems={systems}
                toggleSystems={toggleSystems}
                history={history}
              />
            ) : ""}
            {(user.role === "system:admin") ? (
              <SystemAdmin
                toggleRep={toggleRep}
                toggleReports={toggleReports}
                multiRep={multiRep}
                toggleMultiRep={toggleMultiRep}
                toggleFin={toggleFin}
                toggleFinances={toggleFinances}
                toggle={toggle}
                toggleSettings={toggleSettings}
                systems={systems}
                toggleSystems={toggleSystems}
                localisation={localisation}
                toggleLocalisation={toggleLocalisation}
                history={history}
              />
            ) : ""}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

Sidebar.propTypes = {
  toggleCollapse: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.oneOfType([PropTypes.func]).isRequired,
  }).isRequired,
};

export default Sidebar;
