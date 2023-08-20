const constants = {
  parameters: "receipts",
  parameter: "receipt",
  branchesparams: "branches",
  financesparams: "finances",
  zonesparams: "zones",
  editurl: "/finances/receipts",
  actions: true,
  tableData: [
    {
      Header: "Id",
      accessor: "id",
    },
    {
      Header: "Submittedby",
      accessor: "user_receipts.firstname",
    },
    {
      Header: "Finance",
      accessor: "finance_receipts.name",
    },
    {
      Header: "Month",
      accessor: "month",
    },
    {
      Header: "Offerings",
      accessor: "offerings",
    },
    {
      Header: "Tithes",
      accessor: "tithes",
    },
    {
      Header: "Seedfaith",
      accessor: "seedfaith",
    },
    {
      Header: "Thanksgiving",
      accessor: "thanksgiving",
    },
    {
      Header: "Annualthanksgiving",
      accessor: "annualthanksgiving",
    },
    {
      Header: "Buildingprojects",
      accessor: "buildingprojects",
    },
    {
      Header: "Otherprojects",
      accessor: "otherprojects",
    },
    {
      Header: "Crusadeandmissionary",
      accessor: "crusadeandmissionary",
    },
    {
      Header: "Assetdisposal",
      accessor: "assetdisposal",
    },
    {
      Header: "Interestincome",
      accessor: "interestincome",
    },
    {
      Header: "Loanrepayedbydebtors",
      accessor: "loanrepayedbydebtors",
    },
    {
      Header: "Loanreceived",
      accessor: "loanreceived",
    },
    {
      Header: "Donationreceived",
      accessor: "donationreceived",
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
