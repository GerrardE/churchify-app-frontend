import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getItems } from "@infrastructure/services/thunkService";
import * as actions from "@domain/redux/localisation/cities/cities.actions";
import { AppTable } from "../../../organisms";
import { AppLoader } from "../../../molecules";
import CityUpdate from "./CityUpdate";
import CityCreate from "./CityCreate";
import { isEmpty } from "../../_validations/schema";
import constants from "./cities.constants";

const CityView = ({ match, ...rest }) => {
  const { parameter, parameters, tableData } = constants;

  const dispatch = useDispatch();
  
  const { cities: data, loading } = useSelector((state) => state.cities);

  const actionItems = {
    canview: false,
    canedit: true,
    candelete: true,
    candownload: true,
  };

  const columns = React.useMemo(
    () => tableData,
    [tableData],
  );

  React.useEffect(() => {
    dispatch(getItems(actions, `/${parameters}`));
  }, [dispatch, parameters]);

  if (!isEmpty(match.params) && match.path === `/system/localisation/${parameters}/:id`) {
    const { params } = match;
    const { id } = params;

    return <CityUpdate id={id} props={rest} />;
  }

  if (isEmpty(match.params) &&
    match.path === `/system/localisation/${parameters}/create/${parameter}`
  ) {
    return <CityCreate props={rest} match={match} />;
  }

  return (
    <React.Fragment>
      <a
        onClick={() => rest.history.push(`/system/localisation/${parameters}/create/${parameter}`)}
        className="btn btn-outline-primary float-right"
        role="button"
        aria-pressed="true"
        tabIndex={0}
      >
        {`CREATE ${parameter.toUpperCase()}`}
      </a>
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

CityView.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]),
};

CityView.defaultProps = {
  match: {},
};

export default CityView;
