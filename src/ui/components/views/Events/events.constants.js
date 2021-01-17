const constants = {
  parameters: "events",
  parameter: "event",
  countryparams: "countries",
  countryparam: "country",
  statesparams: "states",
  stateparam: "state",
  citiesparams: "cities",
  branchesparams: "branches",
  editurl: "/settings/events",
  actions: true,
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
      Header: "Date",
      accessor: "date",
    },
    {
      Header: "Address",
      accessor: "address",
    },
    {
      Header: "Branch",
      accessor: "branchid",
    },
    {
      Header: "Notes",
      accessor: "notes",
    },
  ],
};

export default constants;
