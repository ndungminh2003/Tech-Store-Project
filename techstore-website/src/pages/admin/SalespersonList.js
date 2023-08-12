import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  getSalesperson,
  deleteAUser,
  resetState,
} from "../../features/account/accountSlice";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import CustomModal from "../../components/CustomModal";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
  },
  {
    title: "Created Date",
    dataIndex: "createdAt",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const SalespersonList = () => {
  const [open, setOpen] = useState(false);
  const [userId, setUserId] = useState("");
  const dispatch = useDispatch();

  const showModal = (e) => {
    setOpen(true);
    setUserId(e);
  };

  const hideModal = () => {
    setOpen(false);
  };
  useEffect(() => {
    dispatch(resetState());
    dispatch(getSalesperson());
  }, []);
  const deleteUser = (e) => {
    dispatch(deleteAUser(e));
    setOpen(false);
    dispatch(getSalesperson());
  };
  const salespseronState = useSelector((state) => state.account.salesperson);
  const data1 = [];
  for (let i = 0; i < salespseronState.length; i++) {
    if (salespseronState[i].role !== "admin") {
      data1.push({
        key: i + 1,
        name: salespseronState[i].name,
        email: salespseronState[i].email,
        mobile: salespseronState[i].mobile,
        createdAt: new Date(salespseronState[i].createdAt).toLocaleString(),
        action: (
          <div className="d-flex">
            <Link
              className=" fs-3 text-danger"
              to={`/admin/salesperson/${salespseronState[i]._id}`}
            >
              <BiEdit />
            </Link>
            <button
              className="ms-3 fs-3 text-danger bg-transparent border-0"
              onClick={() => showModal(salespseronState[i]._id)}
            >
              <AiFillDelete />
            </button>
          </div>
        ),
      });
    }
  }

  return (
    <div className="admin">
      <h3 className="mb-4 title">Salesperson List</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={() => {
          deleteUser(userId);
        }}
        title="Are you sure you want to delete this user ?"
      />
    </div>
  );
};

export default SalespersonList;
