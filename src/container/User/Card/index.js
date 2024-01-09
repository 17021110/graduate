import React from "react";
import { useState, useEffect } from "react";
import LauoutDefault from "../../../components/User/LauoutDefault";
import { useDispatch, useSelector } from "react-redux";
import { Table, Empty, Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import productImage from "../../../assets/images/productImage.png"
const Card = () => {
  const dispatch = useDispatch();
  const listCard = useSelector((state) => state.listCard);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const columns = [
    {
      title: "Ảnh",
      dataIndex: "image",
      render: () => (
        <img
          className="tw-w-[100px] tw-h-[100px]"
          alt="product"
          src={productImage}
        />
      ),
    },
    {
      title: "Tên sanr phẩm",
      dataIndex: "name",
    },
    {
      title: "Loại",
      dataIndex: "type",
    },
    {
      title: "số lượng",
      dataIndex: "quantity",
    },
    {
      title: "Kích thước",
      dataIndex: "size",
    },
    {
      title: "Giá (VND)",
      dataIndex: "price_each",
    },
    {
      title: "Thành tiền (VND)",
      dataIndex: "money",
      render: (value, item) => (
        <div>{Number(item?.quantity) * Number(item?.price_each)} </div>
      ),
    },
    {
      title: "",
      dataIndex: "action",
      render: (value, item) => (
        <div>
          <EyeOutlined />
        </div>
      ),
    },
  ];
  const onSelectChange = (newSelectedRowKeys) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  useEffect(() => {
    dispatch({ type: "FETCH_CARD" });
  }, [dispatch]);

  return (
    <LauoutDefault type={2}>
      <div className="tw-bg-white tw-p-6 container 3xl:tw-my-0 3xl:tw-min-h-[calc(100vh_-_476px)]">
        <div className="tw-flex tw-items-center tw-justify-between tw-my-6">
          <div className="tw-text-[20px] tw-font-[700]">Giỏ hàng</div>
          <div className="tw-flex tw-items-center tw-justify-end">
            <Button>Xoá đơn</Button>
          </div>
        </div>
        {listCard?.length > 0 ? (
          <div>
            <Table
              rowSelection={rowSelection}
              rowKey={(record) =>
                record.id ? record.id : new Date().getTime()
              }
              columns={columns}
              dataSource={listCard}
              pagination={false}
            />
            <div className="tw-p-6 tw-bg-[#33322C] tw-rounded-[16px] tw-mt-10">
              <div className="tw-text-white tw-text-center tw-text-[24px] tw-font-[700]">Thông tin người nhận</div>
              <div>
                
              </div>
            </div>
          </div>
        ) : (
          <Empty />
        )}
      </div>
    </LauoutDefault>
  );
};

export default Card;
