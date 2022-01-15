const constants = {
  parameters: "reports",
  attendanceparam: "attendance",
  attendanceparams: "attendances",
  activityparam: "activity",
  trainingparam: "training",
  groupparam: "group",
  freportparam: "freport",
  cellparam: "cell",
  membershipparam: "membership",
  submitparam: "submit",
  branchesparams: "branches",
  zonesparams: "zones",
  eventsparams: "events",
  fellowshipsparams: "fellowships",
  preachersparams: "preachers",
  editurl: "/settings/preachers",
  report: true,
  actions: false,
  dropdowndata: [{name: "zones"}, {name: "branches"}],
  days: [
    {
      key: "Sunday",
      value: 0,
      id: 1,
    },
    {
      key: "Monday",
      value: 1,
      id: 2,
    },
    {
      key: "Tuesday",
      value: 2,
      id: 3,
    },
    {
      key: "Wednesday",
      value: 3,
      id: 4,
    },
    {
      key: "Thursday",
      value: 4,
      id: 5,
    },
    {
      key: "Friday",
      value: 5,
      id: 6,
    },
    {
      key: "Saturday",
      value: 6,
      id: 7,
    },
  ],
  years: [
    {
      id: 2020,
      name: 2020,
    },
    {
      id: 2021,
      name: 2021,
    },
  ],
  tableData: [
    {
      Header: "Month",
      accessor: "month",
    },
    {
      Header: "Avg Men",
      accessor: "avg_men",
    },
    {
      Header: "Avg Women",
      accessor: "avg_women",
    },
    {
      Header: "Avg Children",
      accessor: "avg_children",
    },
    {
      Header: "Total",
      accessor: "total",
    },
  ],
  branchTableData: [
    {
      Header: "Month",
      accessor: "month",
    },
    {
      Header: "Avg Men",
      accessor: "avg_men",
    },
    {
      Header: "Avg Women",
      accessor: "avg_women",
    },
    {
      Header: "Avg Children",
      accessor: "avg_children",
    },
    {
      Header: "Total",
      accessor: "total",
    },
  ],
};

export default constants;
