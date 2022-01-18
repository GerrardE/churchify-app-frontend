const constants = {
  parameters: "trainingtypes",
  parameter: "trainingtype",
  countryparams: "countries",
  countryparam: "country",
  statesparams: "states",
  stateparam: "state",
  citiesparams: "cities",
  branchesparams: "branches",
  editurl: "/settings/trainingtypes",
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
