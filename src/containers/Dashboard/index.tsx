import React, { useEffect, useRef, useState } from "react";
import Icon from "../../components/Icon";
import "./index.scss";
import { QRCodeSVG } from "qrcode.react";
import ButtonCopy from "../../components/CopyButton";
import Table from "../../components/Table";
import {
  getMyAffiliateInfoService,
  getAffiliateTransactionService,
  getAffiliateReferralHistoryService,
} from "../../services/affiliate";
import {
  AffiliateReferralHistoryEntity,
  AffiliateTransactionEntity,
  MyAffiliateInfo,
} from "../../interfaces/affiliate";
import { exportToCSV } from "../../utils/constant";
import TopUser from "../../components/TopUser";
import DownloadApp from "../../components/downloadApp";
import { useMediaQuery } from "react-responsive";
import { Tabs } from "antd";

const columns = [
  {
    key: "date",
    dataIndex: "date",
    title: "Ngày",
    width: "50%",
    textWrap: "word-break",
  },
  {
    key: "id",
    dataIndex: "id",
    title: "ID",
    className: "text-center",
    width: "50%",
  },
];

const columns2 = [
  {
    key: "amount",
    dataIndex: "amount",
    title: "Xu thưởng",
    className: "text-center",
  },
  {
    key: "date",
    dataIndex: "date",
    title: "Ngày",

    textWrap: "word-break",
  },
  {
    key: "id",
    dataIndex: "id",
    title: "ID",
    className: "text-center",
  },
];

const Dashboard = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 991px)",
  });

  const refCode = useRef(null);
  const linkCode = useRef(null);
  const [myAffiliate, setMyAffiliate] = useState<MyAffiliateInfo | null>(null);
  const [transactions, setTransaction] = useState<AffiliateTransactionEntity[]>(
    []
  );
  const [referrals, setReferrals] = useState<AffiliateReferralHistoryEntity[]>(
    []
  );
  const [pageIndexTransaction, setPageIndexTransaction] = useState(1);
  const [pageIndexReferral, setPageIndexReferral] = useState(1);
  const [totalTransaction, setTotalTransaction] = useState(0);
  const [totalReferral, setTotalReferral] = useState(0);
  const [totalTransactionPage, setTotalTransactionPage] = useState(0);
  const [totalReferralPage, setTotalReferralPage] = useState(0);

  const fetchMyAffiliate = async () => {
    try {
      const result = await getMyAffiliateInfoService();
      if (result.data.status) {
        setMyAffiliate(result.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchTransactions = async () => {
    try {
      const result = await getAffiliateTransactionService({
        pageIndex: pageIndexTransaction,
        pageSize: 20,
      });
     
      if (result.data.status) {
        setTransaction(result.data.data);
        setTotalTransaction(result.data.totalRecord ?? 1);
        setTotalTransactionPage(result.data.totalPaging ?? 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchReferral = async () => {
    try {
      const result = await getAffiliateReferralHistoryService({
        pageIndex: pageIndexReferral,
        pageSize: 20,
      });
      if (result.data.status) {
        setReferrals(result.data.data);
        setTotalReferral(result.data.totalRecord ?? 1);
        setTotalReferralPage(result.data.totalPaging ?? 1);
        console.log(result.data.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMyAffiliate();
  }, []);
  useEffect(() => {
    fetchTransactions();
  }, [pageIndexTransaction]);

  useEffect(() => {
    fetchReferral();
  }, [pageIndexReferral]);

  const handleExportTransaction = async () => {
    try {
      const { data } = await getAffiliateTransactionService({
        pageIndex: 1,
        pageSize: totalTransaction,
      });
      exportToCSV(data.data,'transaction');
    } catch (error) {
      console.log(error);
    }
  };

  const handleExportRefferal = async () => {
    try {
      const { data } = await getAffiliateReferralHistoryService({
        pageIndex: 1,
        pageSize: totalReferral,
      });
      exportToCSV(data.data,'referral');
    } catch (error) {
      console.log(error);
    }
  };

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
      <div className="statistic">
        <div className="container">
          <div className="statistic-inner">
            <div className="statistic-item statistic-item-first">
              <div className="item-first">
                <div className="head-line04">Tổng số F1:</div>
                <div className="heading-03 text-orange">
                  {myAffiliate?.totalRefernalF1 ?? 0}
                </div>
                <div className="head-line04 mtt-3">Tổng số F2:</div>
                <div className="heading-03 text-orange">
                  {myAffiliate?.totalRefernalF2 ?? 0}
                </div>
              </div>
              <div className="item-second">
                <DownloadApp title="" />
              </div>
            </div>
            <div className="statistic-item statistic-item-second">
              <div className="qr-code">
                <QRCodeSVG value={myAffiliate?.linkRef ?? ""} />
              </div>
              <div className="statistic-item-right">
                <div className="d-flex justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="head-line04 mrt-4">ID giới thiệu:</div>
                    <div className="heading-06 mrt-1" ref={refCode}>
                      {myAffiliate?.affCode}
                    </div>
                    <ButtonCopy element={refCode} />
                  </div>
                  <div>
                    <div className="head-line04 d-flex align-items-center">
                      <div>% Hoa hồng F1:</div>
                      <div className="text-green mlt-2">
                        {myAffiliate?.profitF1}%
                      </div>
                    </div>
                    <div className="head-line04 d-flex align-items-center mtt-2">
                      <div>% Hoa hồng F2:</div>
                      <div className="text-green mlt-2">
                        {myAffiliate?.profitF2}%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex align-items-center mtt-4">
                  <div className="head-line04 mrt-4 flex-shrink-0">
                    Link giới thiệu:
                  </div>
                  <div className="heading-06 mrt-1 input-ref " ref={linkCode}>
                    {myAffiliate?.linkRef}
                  </div>
                  <div className="click-copy flex-shrink-0">
                    <ButtonCopy black element={linkCode} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="topten-wrap">
        <div className="top-ten-inner container">
          {myAffiliate?.topRefernal?.map((item, index) => (
            <TopUser
              key={item.walletCode}
              amount={item.total}
              index={index + 1}
              icon={index === 0 ? "platinum" : index === 1 ? "gold" : "sliver"}
              wallet={item.walletCode}
            />
          ))}
        </div>
      </div>
      <div className="data-tab">
        <div className="container">
          {!isMobile ? (
            <div className="data-tab-inner">
              <div className="data-tab-item">
                <div className="data-tab-title">
                  <div className="head-line04">Danh sách bạn bè</div>
                  <div
                    className="d-flex align-items-center cursor-pointer"
                    onClick={handleExportRefferal}
                  >
                    <div className="head-line04">Export Excel</div>
                    <div className="mb-1 mlt-1">
                      <Icon name="copy-paper" />
                    </div>
                  </div>
                </div>
                <Table
                  columns={columns}
                  dataSources={referrals.map((item) => {
                    return { date: item.createDate, id: item.phoneNumber };
                  })}
                  handleChangePage={(e) => setPageIndexReferral(e)}
                  pageCount={totalReferralPage}
                />
              </div>
              <div className="data-tab-item">
                <div className="data-tab-title">
                  <div className="head-line04">Lịch sử thưởng</div>
                  <div
                    className="d-flex align-items-center cursor-pointer"
                    onClick={handleExportTransaction}
                  >
                    <div className="head-line04">Export Excel</div>
                    <div className="mb-1 mlt-1">
                      <Icon name="copy-paper" />
                    </div>
                  </div>
                </div>
                <Table
                  columns={columns2}
                  dataSources={transactions.map((item) => {
                    return {
                      date: item.createDate,
                      id: item.phoneNumber,
                      amount: item.profit,
                    };
                  })}
                  handleChangePage={(e) => setPageIndexTransaction(e)}
                  pageCount={totalTransactionPage}
                />
              </div>
            </div>
          ) : (
            <div className="tab">
              <Tabs defaultActiveKey="1" centered>
                <Tabs.TabPane tab="Danh sách bạn bè" key="1">
                  <Table
                    columns={columns}
                    dataSources={referrals.map((item) => {
                      return { date: item.createDate, id: item.phoneNumber };
                    })}
                    handleChangePage={(e) => setPageIndexReferral(e)}
                    pageCount={totalReferralPage}
                  />
                </Tabs.TabPane>
                <Tabs.TabPane tab="Lịch sử thưởng" key="2">
                  <Table
                    columns={columns2}
                    dataSources={transactions.map((item) => {
                      return {
                        date: item.createDate,
                        id: item.phoneNumber,
                        amount: item.profit,
                      };
                    })}
                    handleChangePage={(e) => setPageIndexTransaction(e)}
                    pageCount={totalTransactionPage}
                  />
                </Tabs.TabPane>
              </Tabs>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
