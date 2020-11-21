import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getItems } from "@infrastructure/services/thunkService";
import * as actions from "@domain/redux/categories/categories.actions";
import { AppTable } from "../../organisms";
import { AppLoader } from "../../molecules";
import CategoryUpdate from "./CategoryUpdate";
import CategoryCreate from "./CategoryCreate";
import { isEmpty } from "../_validations/schema";
import constants from "./categories.constants";

const CategoryView = ({ match, ...rest }) => {
  const { parameter, parameters, tableData } = constants;

  const dispatch = useDispatch();
  
  const { categories: data, loading } = useSelector((state) => state.categories);

  const actionItems = {
    canview: false,
    canedit: true,
    candelete: true,
  };

  const columns = React.useMemo(
    () => tableData,
    [tableData],
  );

  React.useEffect(() => {
    dispatch(getItems(actions, parameters));
  }, [dispatch, parameters]);

  if (!isEmpty(match.params) && match.path === `/settings/${parameters}/:id`) {
    const { params } = match;
    const { id } = params;

    return <CategoryUpdate id={id} props={rest} />;
  }

  if (isEmpty(match.params) &&
    match.path === `/settings/${parameters}/create/${parameter}`
  ) {
    return <CategoryCreate props={rest} match={match} />;
  }

  return (
    <React.Fragment>
      <a
        href={`/settings/${parameters}/create/${parameter}`}
        className="btn btn-outline-primary float-right"
        role="button"
        aria-pressed="true"
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

CategoryView.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]),
};

CategoryView.defaultProps = {
  match: {},
};

export default CategoryView;
