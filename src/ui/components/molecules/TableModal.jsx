import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { deleteItem } from "@infrastructure/services/thunkService";

const TableModal = ({ config, show, toggle }) => {
  const dispatch = useDispatch();
  const { actions, path } = config;
  
  const handleDelete = async (actions, path) => {
    await dispatch(deleteItem(actions, path));

    window.location.reload();
  };

  return (
    <div>
      <Modal isOpen={show} toggle={toggle} className="modal-dialog-centered">
        <ModalHeader toggle={toggle}>{config.title}</ModalHeader>
        <ModalBody>Are you sure you want to delete this item?</ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            className="mr-2"
            onClick={() => handleDelete(actions, path)}
          >
            {config.btnText}
          </Button>
          <Button className="btn-outline-danger" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

TableModal.propTypes = {
  config: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  toggle: PropTypes.func.isRequired,
  show: PropTypes.oneOfType([PropTypes.bool]).isRequired,
};

export default TableModal;
