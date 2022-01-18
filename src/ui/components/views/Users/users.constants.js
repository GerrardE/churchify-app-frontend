const constants = {
  parameters: "users",
  parametersupdate: "users:admin:update",
  parameter: "user",
  editurl: "/settings/users",
  viewurl: "settings",
  branchesparams: "branches",
  countryparams: "countries",
  countryparam: "country",
  statesparams: "states",
  stateparam: "state",
  zonesparams: "zones",
  rolesparams: "roles",
  rolesparam: "role",
  citiesparams: "cities",
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
