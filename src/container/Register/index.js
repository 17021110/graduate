import React from "react";
import LauoutDefault from "../../components/LauoutDefault";
import { Input, Button } from "antd";
const Register = ({ type =1}) => {
  return (
    <LauoutDefault type={type}>
      <div className="tw-bg-[#1C1B15] tw-flex tw-items-center tw-justify-center">
        <div className="tw-bg-white tw-w-[500px] tw-rounded-[10px] tw-shadow-2xl tw-px-6 tw-py-12 tw-flex tw-items-center  tw-flex-col">
          <div className="tw-text-center tw-text-[24px] tw-font-[700] tw-mb-10">
            Đăng Ký
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
          {/* <div className="tw-flex tw-items-center tw-justify-start tw-w-full tw-mb-8">
            <div className="tw-w-full">
              <div className="tw-mb-2">Nhập lại mật khẩu</div>
              <Input placeholder="Nhập lại mật khẩu" />
            </div>
          </div> */}
          <div className="tw-flex tw-items-center tw-justify-start tw-w-full tw-mb-4">
            <Button className="tw-w-full" type="primary">
              Đăng Ký
            </Button>
          </div>
        </div>
      </div>
    </LauoutDefault>
  );
};

export default Register;
