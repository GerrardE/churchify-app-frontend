import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { Sidebar, Topbar, Footer } from "../organisms";

const Dashboard = ({ children }) => {
  let [collapse, setCollapse] = React.useState(false);

  const toggle = () => setCollapse(prevState => !prevState);

  return (
    <div className={classnames("app", { "is-collapsed": collapse })}>
      <Sidebar toggleCollapse={toggle} />
      <div className="page-container">
        <Topbar toggleCollapse={toggle} />
        <main className="main-content bgc-grey-100">
          <div id="mainContent">
            { children }
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default Dashboard;
