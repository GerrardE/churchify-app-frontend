import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getItems } from "@infrastructure/services/thunkService";
import * as actions from "@domain/redux/apilogs/apilogs.actions";
import { AppTable } from "../../organisms";
import { AppLoader } from "../../molecules";
import { isEmpty } from "../_validations/schema";
import constants from "./apilogs.constants";
import ApiLogDetails from "./ApiLogDetails";

const ApiLogView = ({ match, ...rest }) => {
  const { parameters, tableData } = constants;

  const dispatch = useDispatch();
  
  const { apilogs: data, loading } = useSelector((state) => state.apilogs);

  const actionItems = {
    canview: true,
    canedit: false,
    candelete: false,
  };

  const columns = React.useMemo(
    () => tableData,
    [tableData],
  );

  React.useEffect(() => {
    dispatch(getItems(actions, parameters));
  }, [dispatch, parameters]);

  if (!isEmpty(match.params) && match.path === `/system/${parameters}/:id/details`) {
    const { params } = match;
    const { id } = params;

    return <ApiLogDetails id={id} props={rest} />;
  }

  return (
    <React.Fragment>
      {loading ? (
        <AppLoader loaderWidth="15%" loaderClassName="app-loader mt-15" />
      ) : (
        <AppTable
          data={data}
          columns={columns}
          actionItems={actionItems}
          actions={actions}
          constants={constants}
        />
      )}
    </React.Fragment>
  );
};

ApiLogView.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]),
};

ApiLogView.defaultProps = {
  match: {},
};

export default ApiLogView;
