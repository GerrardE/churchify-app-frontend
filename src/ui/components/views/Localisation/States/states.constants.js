const constants = {
  parameters: "states",
  parameter: "state",
  editurl: "/system/localisation/states",
  deleteurl: "/system/localisation/states",
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
      Header: "Countryid",
      accessor: "country_id",
    },
    {
      Header: "Countrycode",
      accessor: "country_code",
    },
    {
      Header: "Fipscode",
      accessor: "fips_code",
    },
    {
      Header: "Iso2",
      accessor: "iso2",
    },
    {
      Header: "Flag",
      accessor: "flag",
    },
    {
      Header: "WikiDataId",
      accessor: "wikiDataId",
    },
    {
      Header: "Createdat",
      accessor: "createdAt",
    },
  ],
};

export default constants;
