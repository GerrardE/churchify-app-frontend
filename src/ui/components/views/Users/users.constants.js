const constants = {
  parameters: "users",
  parametersupdate: "users:admin:update",
  parameter: "user",
  editurl: "/settings/users",
  branchesparams: "branches",
  countryparams: "countries",
  countryparam: "country",
  statesparams: "states",
  stateparam: "state",
  zonesparams: "zones",
  rolesparams: "roles",
  actions: true,
  tableData: [
    {
      Header: "Id",
      accessor: "id",
    },
    {
      Header: "First Name",
      accessor: "firstname",
    },
    {
      Header: "Last Name",
      accessor: "lastname",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Phone",
      accessor: "phone",
    },
    {
      Header: "Joined",
      accessor: "createdAt",
    },
  ],
};

export default constants;
