const constants = {
  parameters: "activitytypes",
  parameter: "activitytype",
  countryparams: "countries",
  countryparam: "country",
  statesparams: "states",
  stateparam: "state",
  citiesparams: "cities",
  branchesparams: "branches",
  editurl: "/settings/activitytypes",
  actions: true,
  formDefaults: {
    branchid: 1,
  },
  tableData: [
    {
      Header: "Id",
      accessor: "id",
    },
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Notes",
      accessor: "notes",
    },
  ],
};

export default constants;
