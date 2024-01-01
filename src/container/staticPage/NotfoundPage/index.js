import React from "react";
import LauoutDefault from "../../../components/LauoutDefault";
import notfound from "../../../assets/images/404.svg";
const NotfoundPage = () => {
  return (
    <LauoutDefault>
      <div className="tw-h-[calc(100vh_-_476px)] tw-w-full">
        <div className="tw-flex tw-items-center tw-justify-center tw-flex-col tw-p-[80px] tw-bg-[#1C1B15] ">
          <img
            src={notfound}
            alt="not found"
            className="tw-w-[200px] tw-h-[200px]"
          ></img>
          <div className="tw-text-[20px] tw-text-white tw-font-[700] tw-mb-6">
            Không tìm thấy trang này!
          </div>
        </div>
      </div>
    </LauoutDefault>
  );
};

export default NotfoundPage;
