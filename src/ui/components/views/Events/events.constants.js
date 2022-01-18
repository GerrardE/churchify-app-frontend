import { dateHelper } from "../_helpers";

const date = dateHelper.dateToday();

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
  formDefaults: {
    branchid: 1,
    address: "Trem Headquarters",
    date,
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
