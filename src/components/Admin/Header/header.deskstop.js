import React from "react";
import HeaderWrapper from "./header.styles";
import logo from "../../../assets/images/sovietmodel.svg";
import giohang from "../../../assets/images/giohang.svg";
import message from "../../../assets/images/message.svg";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="tw-flex tw-items-center tw-justify-between tw-bg-[#1C1B15] tw-px-[80px] 3xl:tw-px-[150px] tw-py-4">
        <div className="tw-flex tw-items-center">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
        </div>
        <div className="tw-flex tw-items-center tw-justify-end">
          <img src={message} alt="logo" className="tw-mr-[12px]" />
          <img src={giohang} alt="logo" className="tw-mr-[12px]" />
          <div className="tw-mr-[12px]">
            <Link to="/login" className="tw-text-white tw-text-[16px]">
              Đăng nhập
            </Link>
          </div>
        </div>
      </div>
      <ul className="tw-bg-[#DC1814] tw-flex tw-items-center tw-justify-center !tw-m-0 tw-py-4 !tw-px-0">
        <li className="tw-flex tw-items-center tw-justify-center tw-px-4 2xl:tw-px-[36px] tw-border-0 tw-border-r-[1px] tw-border-solid tw-border-[#fff] tw-py-1 tw-text-[#fff] tw-cursor-pointer">
          <Link to="/admin" className="tw-text-white tw-text-[16px]">
            Trang chủ
          </Link>
        </li>
        <li className="tw-flex tw-items-center tw-justify-center tw-px-4 2xl:tw-px-[36px] tw-border-0 tw-border-r-[1px] tw-border-solid tw-border-[#fff] tw-py-1 tw-text-[#fff] tw-cursor-pointer">
          Sản phẩm
        </li>
        <li className="tw-flex tw-items-center tw-justify-center tw-px-4 2xl:tw-px-[36px] tw-border-0 tw-border-r-[1px] tw-border-solid tw-border-[#fff] tw-py-1 tw-text-[#fff] tw-cursor-pointer">
          Đơn hàng
        </li>
      </ul>
    </HeaderWrapper>
  );
};

export default Header;
