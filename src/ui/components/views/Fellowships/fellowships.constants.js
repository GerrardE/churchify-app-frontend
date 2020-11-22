const constants = {
  parameters: "fellowships",
  parameter: "fellowship",
  countryparams: "countries",
  countryparam: "country",
  statesparams: "states",
  stateparam: "state",
  citiesparams: "cities",
  branchesparams: "branches",
  editurl: "/settings/fellowships",
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
      Header: "Address",
      accessor: "address",
    },
    {
      Header: "Branch",
      accessor: "branchid",
    },
    {
      Header: "City",
      accessor: "city",
    },
    {
      Header: "State",
      accessor: "state",
    },
    {
      Header: "Country",
      accessor: "country",
    },
    {
      Header: "Notes",
      accessor: "notes",
    },
  ],
};

export default constants;
