import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItems } from "@infrastructure/services/thunkService";
import * as actions from "@domain/redux/downloads/downloads.actions";
import { AppTable } from "../../organisms";
import { AppLoader } from "../../molecules";
import constants from "./downloads.constants";

const DownloadView = () => {
  const { parameters, tableData } = constants;

  const dispatch = useDispatch();
  
  const { downloads: data, loading } = useSelector((state) => state.downloads);

  const actionItems = {
    canview: false,
    canedit: false,
    candelete: false,
    candownload: true,
  };

  const columns = React.useMemo(
    () => tableData,
    [tableData],
  );

  React.useEffect(() => {
    dispatch(getItems(actions, parameters));
  }, [dispatch, parameters]);

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

export default DownloadView;
