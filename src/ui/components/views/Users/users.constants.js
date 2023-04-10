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
      Header: "Role",
      accessor: "roles[0].name",
    },
    {
      Header: "Phone",
      accessor: "phone",
    },
    {
      Header: "Joined",
      accessor: "createdAt",
    },
    {
      Header: "Updated",
      accessor: "updatedAt",
    },
  ],
};

export default constants;
