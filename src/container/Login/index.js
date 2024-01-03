import React from "react";
import {Link} from "react-router-dom";
import LauoutDefault from "../../components/LauoutDefault";
import { Input, Button } from "antd";
const Login = () => {
  return (
    <LauoutDefault>
      <div className="tw-bg-[#1C1B15] tw-flex tw-items-center tw-justify-center tw-h-[calc(100vh_-_476px)]">
        <div className="tw-bg-white tw-w-[500px] tw-rounded-[10px] tw-shadow-2xl tw-px-6 tw-py-12 tw-flex tw-items-center  tw-flex-col">
          <div className="tw-text-center tw-text-[24px] tw-font-[700] tw-mb-10">
            Đăng nhập
          </div>
          <div className="tw-flex tw-items-center tw-justify-start tw-w-full tw-mb-4">
            <div className="tw-w-full">
              <div className="tw-mb-2">Tên đăng nhập</div>
              <Input placeholder="Nhập tên đăng nhập" />
            </div>
          </div>
          <div className="tw-flex tw-items-center tw-justify-start tw-w-full tw-mb-8">
            <div className="tw-w-full">
              <div className="tw-mb-2">Mật khẩu</div>
              <Input placeholder="Nhập mật khẩu" />
            </div>
          </div>
          <div className="tw-flex tw-items-center tw-justify-start tw-w-full tw-mb-4">
            <Button className="tw-w-full" type="primary">
              Đăng nhập
            </Button>
          </div>
          <div className="tw-flex tw-items-center tw-justify-center tw-w-full">
            <div className="tw-mr-2">Bạn mới biết đến SoViet Models ?</div>
            <Link to="/register">Đăng kí</Link>
          </div>
        </div>
      </div>
    </LauoutDefault>
  );
};

export default Login;
