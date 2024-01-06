import React from "react";
import { useCallback, useState, useEffect } from "react";
import LauoutDefault from "../../../components/User/LauoutDefault";
import { useDispatch, useSelector } from "react-redux";
import { Empty, Card, Skeleton, Select } from "antd";
import Wrapper from "./ProductDetail.styles";
const ProductDetail = () => {
  const dispatch = useDispatch();
  // const Loading = useSelector((state) => state.Loading);
  // const listProductUser = useSelector((state) => state.listProductUser);
  // const [sort, setSort] = useState("1");

  useEffect(() => {
    dispatch({ type: "GET_ALL_PRODUCT_USER" });
  }, [dispatch]);
  return (
    <LauoutDefault>
      <Wrapper>
        <div className="list-header">
          <div className="tw-text-white tw-text-[36px] tw-font-[700] tw-mb-4 tw-text-center">
            Thông tin sản phẩm
          </div>
          <div className="tw-text-white tw-text-[16px] tw-font-[600] tw-text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
          </div>
        </div>
      </Wrapper>
    </LauoutDefault>
  );
};

export default ProductDetail;
