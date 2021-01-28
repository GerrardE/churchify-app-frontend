const constants = {
  parameters: "reports",
  attendanceparam: "attendance",
  attendanceparams: "attendances",
  activityparam: "activity",
  trainingparam: "training",
  groupparam: "group",
  freportparam: "freport",
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
      id: 1,
      value: 2020,
    },
    {
      id: 2,
      value: 2021,
    },
  ],
  tableData: [
    {
      Header: "Zone Id",
      accessor: "id",
    },
    {
      Header: "Zone",
      accessor: "name",
    },
    {
      Header: "Total",
      accessor: "zoneattendance",
    },
  ],
  branchTableData: [
    {
      Header: "Branch Id",
      accessor: "id",
    },
    {
      Header: "Branch",
      accessor: "name",
    },
    {
      Header: "Men",
      accessor: "men",
    },
    {
      Header: "Women",
      accessor: "women",
    },
    {
      Header: "Children",
      accessor: "children",
    },
    {
      Header: "Total",
      accessor: "branchattendance",
    },
  ],
};

export default constants;
