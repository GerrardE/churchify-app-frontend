import React from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";
import {
  useTable,
  useFilters,
  useGlobalFilter,
  usePagination,
} from "react-table";
import { Link } from "react-router-dom";
import GlobalFilter from "./GlobalFilter";
import AppModal from "./TableModal";

const Table = ({ columns, data, actions, actionItems, props, constants }) => {
  const { parameters, editurl, viewurl, deleteurl } = constants;
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    preGlobalFilteredRows,
    setGlobalFilter,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    useFilters,
    useGlobalFilter,
    usePagination,
  );

  const [show, setShow] = React.useState(false);
  const [config, setConfig] = React.useState({
    title: "Confirm Action",
    edit: false,
    actions,
    path: "",
    btnText: "",
    props,
  });
  const toggle = () => setShow((show) => !show);
  const storeConfig = (input) => setConfig(input);

  const handleDelete = (id) => {
    const modalConfig = {
      title: "Confirm Action",
      btnText: "Delete",
      actions,
      path: deleteurl ? `${deleteurl}/${id}` : `${parameters}/${id}`,
      props: props,
    };
    storeConfig(modalConfig);
  };

  return (
    <React.Fragment>
      <AppModal config={config} show={show} toggle={toggle} />
      <div className="dataTables_wrapper">
        <div className="dataTables_length">
          <label>
            Page
            {" " + state.pageIndex + " "}
            of
            {" " + pageOptions.length + " "}
            <select
              name="dataTable_length"
              aria-controls="dataTable"
              className=""
              value={state.pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[10, 20, 30, 40, 50, 60, 80, 100].map((pageSize) => (
                <option key={uuidv4()} value={pageSize}>
                  {pageSize}
                </option>
              ))}
            </select>
            entries
          </label>
        </div>
        <div className="dataTables_filter">
          <GlobalFilter
            preGlobalFilteredRows={preGlobalFilteredRows}
            globalFilter={state.globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
        </div>
        <div className="table-responsive">
          <table
            id="dataTable"
            className="table table-striped table-bordered table-hover"
            {...getTableProps()}
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={uuidv4()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()} key={uuidv4()}>
                      {column.render("Header")}
                    </th>
                  ))}
                  {constants.actions && <th>Actions</th>}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} key={row.id}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()} key={uuidv4()}>
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                    {constants.actions && (
                      <td>
                        <div className="peers mR-15">
                          {actionItems.canedit && (
                            <div className="peer">
                              <Link
                                className="td-n c-deep-purple-500 cH-blue-500 fsz-md p-5"
                                to={`${editurl}/${row.original.id}`}
                              >
                                <i className="ti-pencil" />
                              </Link>
                            </div>
                          )}
                          <div className="peer">
                            {actionItems.candelete && (
                              <a className="td-n c-red-500 cH-blue-500 fsz-md p-5">
                                <i
                                  className="ti-trash"
                                  onClick={() => {
                                    handleDelete(row.original.id);
                                    toggle();
                                  }}
                                />
                              </a>
                            )}
                          </div>
                          <div className="peer">
                            {actionItems.canview && (
                              <Link
                                className="td-n c-green-500 cH-green-500 fsz-md p-5"
                                to={`/${viewurl}/${parameters}/${row.original.id}/details`}
                              >
                                <i className="ti-eye" />
                              </Link>
                            )}
                          </div>
                          <div className="peer">
                            {actionItems.candownload && (
                              <a
                                className="td-n c-green-500 cH-purple-500 fsz-md p-5"
                                href={`data:${row.original.mimetype};base64, ${row.original.buffer}`}
                                download={row.original.originalname}
                              >
                                <i className="ti-cloud-down" />
                              </a>
                            )}
                          </div>
                        </div>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="dataTables_paginate paging_simple_numbers">
          <a
            className="paginate_button previous"
            aria-controls="dataTable"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            <i className="ti-angle-double-left" />
          </a>
          <span>
            <a
              className="paginate_button "
              aria-controls="dataTable"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              <i className="ti-angle-left" />
            </a>
            <a
              className="paginate_button "
              aria-controls="dataTable"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              <i className="ti-angle-right" />
            </a>
          </span>
          <a
            className="paginate_button next"
            aria-controls="dataTable"
            id="dataTable_next"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            <i className="ti-angle-double-right" />
          </a>
        </div>
        <br />
      </div>
    </React.Fragment>
  );
};

Table.propTypes = {
  columns: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  actionItems: PropTypes.oneOfType([PropTypes.object]).isRequired,
  constants: PropTypes.oneOfType([PropTypes.object]).isRequired,
  actions: PropTypes.oneOfType([PropTypes.object]).isRequired,
  props: PropTypes.oneOfType([PropTypes.object]),
};

Table.defaultProps = {
  props: {},
};

export default Table;
