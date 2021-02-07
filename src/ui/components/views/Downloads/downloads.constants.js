const constants = {
  parameters: "downloads",
  parameter: "download",
  categoryparams: "categories",
  editurl: "/settings/downloads",
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
      Header: "Url",
      accessor: "url",
    },
    {
      Header: "Category",
      accessor: "categoryid",
    },
    {
      Header: "Date",
      accessor: "date",
    },
    {
      Header: "Notes",
      accessor: "notes",
    },
  ],
};

export default constants;
