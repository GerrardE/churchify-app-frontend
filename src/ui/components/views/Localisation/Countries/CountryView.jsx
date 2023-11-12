import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getItems } from "@infrastructure/services/thunkService";
import * as actions from "@domain/redux/localisation/countries/countries.actions";
import { AppTable } from "../../../organisms";
import { AppLoader } from "../../../molecules";
import CountryUpdate from "./CountryUpdate";
import CountryCreate from "./CountryCreate";
import { isEmpty } from "../../_validations/schema";
import constants from "./countries.constants";

const CountryView = ({ match, ...rest }) => {
  const { parameter, parameters, tableData } = constants;

  const dispatch = useDispatch();
  
  const { countries: data, loading } = useSelector((state) => state.countries);

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

    return <CountryUpdate id={id} props={rest} />;
  }

  if (isEmpty(match.params) &&
    match.path === `/system/localisation/${parameters}/create/${parameter}`
  ) {
    return <CountryCreate props={rest} match={match} />;
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

CountryView.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]),
};

CountryView.defaultProps = {
  match: {},
};

export default CountryView;
