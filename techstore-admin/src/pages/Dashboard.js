import React from "react";
import { BsArrowDownRight, BsArrowUpRight } from "react-icons/bs";
import { Column } from "@ant-design/plots";
import { Table } from "antd";
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Status",
    dataIndex: "staus",
  },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    staus: `London, Park Lane no. ${i}`,
  });
}
const Dashboard = () => {
  const data = [
    {
      type: "Jan",
      sales: 38,
    },
    {
      type: "Feb",
      sales: 52,
    },
    {
      type: "Mar",
      sales: 61,
    },
    {
      type: "Apr",
      sales: 145,
    },
    {
      type: "May",
      sales: 48,
    },
    {
      type: "Jun",
      sales: 38,
    },
    {
      type: "July",
      sales: 38,
    },
    {
      type: "Aug",
      sales: 38,
    },
    {
      type: "Sept",
      sales: 38,
    },
    {
      type: "Oct",
      sales: 38,
    },
    {
      type: "Nov",
      sales: 38,
    },
    {
      type: "Dec",
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    color: ({ type }) => {
      return "#005b96";
    },
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "Month",
      },
      sales: {
        alias: "Income",
      },
    },
  };
  return (
    <div>
      <h3 className=" mb-4 text-3xl font-bold title">Dashboard</h3>
      <div className="flex justify-between items-center gap-3">
        <div className="flex justify-between items-end flex-grow bg-white p-6 roudned-3">
          <div>
            <p className="desc mb-4">Total</p>
            <h4 className="mb-0 text-2xl font-bold sub-title">$1100</h4>
          </div>
          <div className="flex flex-col items-end">
            <h6 className=" flex gap-2 text-lg font-bold items-center">
              <BsArrowDownRight /> 32%
            </h6>
            <p className="mb-0  desc">Compared To April 2022</p>
          </div>
        </div>
        <div className="flex justify-between items-end flex-grow bg-white p-6 roudned-3">
          <div>
            <p className="desc mb-4">Total</p>
            <h4 className="mb-0 sub-title text-2xl font-bold">$1100</h4>
          </div>
          <div className="flex flex-col items-end">
            <h6 className=" flex gap-2 text-lg font-bold items-center text-red-600">
              <BsArrowDownRight /> 32%
            </h6>
            <p className="mb-0  desc">Compared To April 2022</p>
          </div>
        </div>
        <div className="flex justify-between items-end flex-grow bg-white p-6 roudned-3">
          <div>
            <p className="desc mb-4">Total</p>
            <h4 className="mb-0 sub-title text-2xl font-bold">$1100</h4>
          </div>
          <div className="flex flex-col items-end">
            <h6 className=" flex gap-2 text-lg font-bold items-center text-green-600">
              <BsArrowUpRight /> 32%
            </h6>
            <p className="mb-0 desc">Compared To April 2022</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-5 title">Income Statics</h3>
        <div>
          <Column {...config} />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-5 title text-3xl font-bold">Recent Orders</h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
