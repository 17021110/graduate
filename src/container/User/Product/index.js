import React from "react";
import { useCallback, useState, useEffect } from "react";
import LauoutDefault from "../../../components/User/LauoutDefault";
import { useDispatch, useSelector } from "react-redux";
import { Empty, Card } from "antd";
import productImage from "../../../assets/images/productImage.png"

const ProductUser = () => {
  const dispatch = useDispatch();

  const listProductUser = useSelector((state) => state.listProductUser);


  useEffect(() => {
    dispatch({ type: "GET_ALL_PRODUCT_USER" });
  }, [dispatch]);
  return (
    <LauoutDefault type={2}>
      <div className="tw-p-6 tw-px-[80px] 3xl:tw-px-[150px] 3xl:tw-my-0 3xl:tw-min-h-[calc(100vh_-_476px)]">
        {listProductUser?.length > 0 ? (
          <div className="tw-p-6 tw-flex tw-flex-wrap tw-w-full">
            <Card
              hoverable
              style={{
                width: "calc(25% - 24px)",
                maxWidth: "350px",
                minWidth: "200px",
                marginRight:'24px'
              }}
              cover={<img alt="example" src={productImage} />}
            >
              <div>Lorem Ipsum is simply dummy text of</div>
            </Card>
          </div>
        ) : (
          <Empty />
        )}
      </div>
    </LauoutDefault>
  );
};

export default ProductUser;
