import React,{useRef} from "react";
import Icon from "../../components/Icon";
import LayoutWrapLogin from "../../components/wrapLogin";
import "./index.scss";
import { QRCodeSVG } from 'qrcode.react';
import ButtonCopy from '../../components/CopyButton'
import Table from "../../components/Table";

const columns = [    {
  key: 'date',
  dataIndex: 'date',
  title: 'Ngày',
  fixed: true,
  width: '50%',
  textWrap: 'word-break',
},
{
  key: 'id',
  dataIndex: 'id',
  title: 'ID',
  className: 'text-center',
  width: '50%',
},

]

const columns2 = [   
  {
    key: 'amount',
    dataIndex: 'amount',
    title: 'Xu thưởng',
    className: 'text-center',
    width: '50%',
  }, {
  key: 'date',
  dataIndex: 'date',
  title: 'Ngày',
  fixed: true,
  width: '50%',
  textWrap: 'word-break',
},
{
  key: 'id',
  dataIndex: 'id',
  title: 'ID',
  className: 'text-center',
  width: '50%',
},

]




const dataSources = [
  {
    date: '10/06/2022',
    id: '12345678',

  },
  {
    date: '10/06/2022',
    id: '12345678',

  },
  {
    date: '10/06/2022',
    id: '12345678',

  },
]

const Dashboard = () => {
  const refCode= useRef(null)
  const linkCode= useRef(null)
  return (
    <div id="dashboard">
      <div className="banner">
        <div className="filter" />
        <div className="container">
          <div className="text-center main-logo">
            <img src="/img/main-logo.png" />
          </div>
          <div className="big-title01 text-center text-white mt-3 title-banner">
            Chương trình Giới thiệu bạn mới
          </div>
        </div>
        <div className="banner-bottom">
          <div className="bottom-item">
            <div className="icon">
              <Icon name="connect" />
            </div>
            <div className="head-line01 mbt-2">1. Ấn link giới thiệu</div>
            <div className="head-line03">
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit.{" "}
            </div>
          </div>
          <div className="bottom-item">
            <div className="icon">
              <Icon name="group-user" />
            </div>
            <div className="head-line01 mbt-2">1. Ấn link giới thiệu</div>
            <div className="head-line03">
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit.{" "}
            </div>
          </div>
          <div className="bottom-item">
            <div className="icon">
              <Icon name="icon-xu" />
            </div>
            <div className="head-line01 mbt-2">1. Ấn link giới thiệu</div>
            <div className="head-line03">
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit.{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="topten-wrap">
        <div className="top-ten-inner contabner">
          <div className="topten-item">
            <div className="mrt-2">
              <img src="/img/platinum.png" />
            </div>
            <div className="mrt-5">
              <div className="body-04">NO.1</div>
              <div className="heading-06">ng****@gmail.com</div>
            </div>
            <div className="line" />
            <div>
              <div className="body-04">Tổng người</div>
              <div className="d-flex align-items-center">
                <div className="heading-06">10.000.000</div>
                <div className="mlt-1 mbt-1">
                  <Icon name="group-user" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="topten-item">
            <div className="mrt-2">
              <img src="/img/platinum.png" />
            </div>
            <div className="mrt-5">
              <div className="body-04">NO.1</div>
              <div className="heading-06">ng****@gmail.com</div>
            </div>
            <div className="line" />
            <div>
              <div className="body-04">Tổng người</div>
              <div className="d-flex align-items-center">
                <div className="heading-06">10.000.000</div>
                <div className="mlt-1 mbt-1">
                  <Icon name="group-user" size={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="topten-item">
            <div className="mrt-2">
              <img src="/img/platinum.png" />
            </div>
            <div className="mrt-5">
              <div className="body-04">NO.1</div>
              <div className="heading-06">ng****@gmail.com</div>
            </div>
            <div className="line" />
            <div>
              <div className="body-04">Tổng người</div>
              <div className="d-flex align-items-center">
                <div className="heading-06">10.000.000</div>
                <div className="mlt-1 mbt-1">
                  <Icon name="group-user" size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="statistic">
      <div className="container">
<div className="statistic-inner">
<div className="statistic-item d-flex">
          
          <div className="item-first">
            <div className="head-line04">Số bạn bè giới thiệu bạn bè</div>
            <div className="heading-03 text-orange">10</div>
          </div>
          <div>
            <div className="head-line04">Ước tính giá trị thưởng</div>
            <div className="heading-03 text-orange">1.000.000<Icon name="icon-xu"/></div>
          </div>
        </div>
        <div className="statistic-item">
        <div className="qr-code">
        <QRCodeSVG value="hihihih" />
        </div>
        <div className="statistic-item-right">
          <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center">
          <div className="head-line04 mrt-4">ID giới thiệu:</div>
          <div className="heading-06 mrt-1" ref={refCode}>12345678</div><ButtonCopy element={refCode}/>
        </div>
<div>
<div className="head-line04 d-flex align-items-center">
          <div>% Hoa hồng F1:</div>
          <div className="text-green mlt-2">0.1%</div>
        </div>
        <div className="head-line04 d-flex align-items-center mtt-2">
          <div>% Hoa hồng F2:</div>
          <div className="text-green mlt-2">0.05%</div>
        </div>
</div>
          </div>
          <div className="d-flex align-items-center mtt-4">
          <div className="head-line04 mrt-4 flex-shrink-0">Link giới thiệu:</div>
          <div className="heading-06 mrt-1 input-ref " ref={linkCode}>https://www.shopdi.vn/ref?012345678</div><div className="click-copy"><ButtonCopy black element={linkCode}/></div>
        </div>
        </div>
        </div>
</div>
      </div>
      </div>
      <div className="data-tab">
      <div className="container">
        <div className="data-tab-inner">
        <div className="data-tab-item">
        <div className="data-tab-title">
          <div className="head-line04">Danh sách bạn bè</div>
          <div className="d-flex align-items-center cursor-pointer"><div className="head-line04">Export Excel</div><div className="mb-1 mlt-1"><Icon name="copy-paper"/></div></div>
        </div>
        <Table columns={columns} dataSources={dataSources} />
        </div>
        <div className="data-tab-item">
        <div className="data-tab-title">
          <div className="head-line04">Lịch sử thưởng</div>
          <div className="d-flex align-items-center cursor-pointer"><div className="head-line04">Export Excel</div><div className="mb-1 mlt-1"><Icon name="copy-paper"/></div></div>
        </div>
        <Table columns={columns2} dataSources={dataSources} />
        </div>
        </div>

      </div>

      </div>
    </div>
  );
};

export default Dashboard;
