import React, { useEffect, useMemo } from "react";

import LauoutDefault from "../../../components/User/LauoutDefault";
import { useDispatch, useSelector } from "react-redux";
import { Carousel, Skeleton, Card } from "antd";
import { useNavigate } from "react-router-dom";
import slider1 from "../../../assets/images/silder/silder1.png"
import slider2 from "../../../assets/images/silder/slider2.png";
import slider3 from "../../../assets/images/silder/silde4.png";
import list1 from "../../../assets/images/list1.svg"
import list2 from "../../../assets/images/list2.svg";
import list3 from "../../../assets/images/list3.svg";
import list4 from "../../../assets/images/list4.svg"
import list5 from "../../../assets/images/list5.svg";
import list6 from "../../../assets/images/list6.svg";
import list7 from "../../../assets/images/list7.svg"
import list8 from "../../../assets/images/list8.svg";
import list9 from "../../../assets/images/list9.svg";
import productImage from "../../../assets/images/productImage.png";

const HomePage = ({type=1}) => {
  const dispatch = useDispatch();
      const navigate = useNavigate();
  const Loading = useSelector((state) => state.Loading);
  const listProductUser = useSelector((state) => state.listProductUser);

  const listBuyMuch = useMemo(() => {
    return listProductUser.slice(0, 4);
  }, [listProductUser]);


  const viewDetail = (id) => {
    navigate(`/product/${id}`);
  };
  useEffect(() => {
    dispatch({ type: "GET_ALL_PRODUCT_USER" });
  }, [dispatch]);
  return (
    <LauoutDefault type={type}>
      <Carousel autoplay autoplaySpeed={5000} speed={1000}>
        <div>
          <img
            className="tw-w-full !tw-h-[calc(100vh_-_146px)]"
            alt="silder1"
            src={slider1}
          />
        </div>
        <div>
          <img
            className="tw-w-full !tw-h-[calc(100vh_-_146px)]"
            alt="silder2"
            src={slider2}
          />
        </div>
        <div>
          <img
            className="tw-w-full !tw-h-[calc(100vh_-_146px)]"
            alt="silder4"
            src={slider3}
          />
        </div>
      </Carousel>
      <div className="tw-bg-white tw-w-full tw-flex tw-items-center tw-justify-center tw-py-4">
        <img src={list1} alt="1" className="tw-mr-10"></img>
        <img src={list2} alt="1" className="tw-mr-10"></img>
        <img src={list3} alt="1" className="tw-mr-10"></img>
        <img src={list4} alt="1" className="tw-mr-10"></img>
        <img src={list5} alt="1" className="tw-mr-10"></img>
        <img src={list6} alt="1" className="tw-mr-10"></img>
        <img src={list7} alt="1" className="tw-mr-10"></img>
        <img src={list8} alt="1" className="tw-mr-10"></img>
        <img src={list9} alt="1" className="tw-mr-10"></img>
      </div>
      {Loading ? (
        <Skeleton />
      ) : (
        <div>
          <div className="tw-text-center tw-mb-4 tw-text-[36px] tw-font-[700] tw-text-white tw-mt-10">
            Sản phẩm bán chạy
          </div>
          <div className="tw-text-center tw-mb-8 tw-text-[16px] tw-font-[400] tw-text-white">
            Nhanh tay rinh ngay khuyến mại - Deal Shock được đề xuất hằng ngày
            của chúng tôi chỉ còn
          </div>
          <div className="tw-p-6 tw-px-[80px] 3xl:tw-px-[150px] tw-flex tw-flex-wrap tw-w-full">
            {listBuyMuch.map((i) => (
              <Card
                key={i.id}
                hoverable={true}
                style={{
                  width: "calc(25% - 24px)",
                  maxWidth: "350px",
                  minWidth: "200px",
                  marginRight: "24px",
                  padding: "8px",
                }}
                className="hoverable-card"
                cover={<img alt="example" src={productImage} />}
                onClick={() => viewDetail(i.id)}
              >
                <div>
                  <div className="tw-text-white tw-font-[700] tw-mb-4">
                    {i?.name}
                  </div>
                  <div className="tw-flex tw-items-center tw-justify-between">
                    <div className="tw-text-[#FFC43F] tw-text-[18px] tw-font-[700] tw-leading-[36px]">
                      {i.price_each}VND
                    </div>
                    <div className="tw-text-white ">
                      SL:<span>{i.product_quantity}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </LauoutDefault>
  );
};

export default HomePage;
