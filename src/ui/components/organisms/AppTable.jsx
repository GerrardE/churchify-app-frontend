import React from "react";
import PropTypes from "prop-types";
import { Table } from "../molecules";

const AppTable = ({ actionItems, data, columns, actions, props, constants }) => {
  
  return (
    <div className="container-fluid">
      <h4 className="c-grey-900 mT-10 mB-30">{constants.parameters.toUpperCase()}</h4>
      <div className="row">
        <div className="col-md-12">
          <div className="bgc-white bd bdrs-3 p-20 mB-20">
            <h4 className="c-grey-900 mB-20">{`List of all ${constants.parameters}`}</h4>
            <Table columns={columns} data={data} actions={actions} props={props} constants={constants} actionItems={actionItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

AppTable.propTypes = {
  constants: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  actions: PropTypes.oneOfType([PropTypes.object]).isRequired,
  actionItems: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  data: PropTypes.oneOfType([PropTypes.array]).isRequired,
  columns: PropTypes.oneOfType([PropTypes.array]).isRequired,
  props: PropTypes.oneOfType([PropTypes.object]),
};

AppTable.defaultProps = {
  props: {},
};

export default AppTable;
