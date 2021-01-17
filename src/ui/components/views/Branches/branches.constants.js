const constants = {
  parameters: "branches",
  parameter: "branch",
  zoneparams: "zones",
  countryparams: "countries",
  countryparam: "country",
  statesparams: "states",
  stateparam: "state",
  citiesparams: "cities",
  editurl: "/settings/branches",
  actions: true,
  tableData: [
    {
      Header: "Id",
      accessor: "id",
    },
    {
      Header: "ZoneId",
      accessor: "zoneid",
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
