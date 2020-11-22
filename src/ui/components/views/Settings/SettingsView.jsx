import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { AppTable } from "../../organisms";
import { AppLoader, ButtonGroup } from "../../molecules";
import SettingsUpdate from "./SettingsUpdate";
import SettingAdd from "./SettingsCreate";
import { isEmpty } from "../_validations/schema";

const SettingsView = ({ match, ...rest }) => {
  const { loading } = useSelector((state) => state.settings);

  const data = [
    {id: 1, name: "Zones"},
    {id: 2, name: "Branches"},
    {id: 3, name: "Fellowships"},
    {id: 4, name: "Preachers"},
    {id: 5, name: "Downloads"},
    {id: 6, name: "Events"},
    {id: 7, name: "Categories"},
  ];

  const columns = React.useMemo(
    () => [
      {
        Header: "Id",
        accessor: "id",
      },
      {
        Header: "Name",
        accessor: "name",
      },
    ],
    [],
  );

  if (!isEmpty(match.params) && match.path === "/settings/:id") {
    const { params } = match;
    const { id } = params;

    return <SettingsUpdate id={id} props={rest} />;
  }

  if (!isEmpty(match.params) &&
    match.path === "/settings/create/setting/:setting"
  ) {
    return <SettingAdd props={rest} match={match} />;
  }

  const btnProps = {
    data,
    urlFormat: "/settings/create/setting/",
    btnType: "settings",
    btnTitle: "Create Setting",
    btnGroupClassName: "float-right",
  };

  return (
    <React.Fragment>
      <ButtonGroup btnProps={btnProps} />
      {loading ? (
        <AppLoader loaderWidth="15%" loaderClassName="app-loader" />
      ) : (
        <AppTable
          title="Settings"
          subtitle=""
          data={data}
          columns={columns}
          actions
        />
      )}
    </React.Fragment>
  );
};

SettingsView.propTypes = {
  match: PropTypes.oneOfType([PropTypes.object]),
};

SettingsView.defaultProps = {
  match: {},
};

export default SettingsView;
