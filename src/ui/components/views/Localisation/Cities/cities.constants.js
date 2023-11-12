const constants = {
  parameters: "cities",
  parameter: "city",
  editurl: "/system/localisation/cities",
  deleteurl: "/system/localisation/cities",
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
      Header: "Stateid",
      accessor: "state_id",
    },
    {
      Header: "Statecode",
      accessor: "state_code",
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
      Header: "Latitude",
      accessor: "latitude",
    },
    {
      Header: "Longitude",
      accessor: "longitude",
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
