const constants = {
  parameters: "remunerations",
  parameter: "remuneration",
  financesparams: "finances",
  editurl: "/finances/remunerations",
  deleteurl: "/finance/remunerations",
  actions: true,
  tableData: [
    {
      Header: "Id",
      accessor: "id",
    },
    {
      Header: "Submittedby",
      accessor: "user_remunerations.firstname",
    },
    {
      Header: "Finance",
      accessor: "finance_remunerations.name",
    },
    {
      Header: "Pastorpayed",
      accessor: "pastorpayed",
    },
    {
      Header: "Fulltimepastorcount",
      accessor: "fulltimepastorcount",
    },
    {
      Header: "Notes",
      accessor: "notes",
    },
    {
      Header: "Createdat",
      accessor: "createdAt",
    },
  ],
};

export default constants;
