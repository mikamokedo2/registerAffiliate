import React from "react";
import classNames from "classnames";
import { Table as AntdTable } from "antd";
import "./index.scss";
import ReactPaginate from "react-paginate";

export type TTableColumn = {
  title: string;
  key: string | number;
  dataIndex: string;
  className?: string;
  fixed?: any;
  ellipsis?: boolean;
  width?: string | number;
  sorter?: ((a: any, b: any) => number) | boolean;
  render?: (
    text: string,
    record: any,
    index: number
  ) => React.ReactElement | string;
};
export type TTableProps = {
  className?: string;
  columns: TTableColumn[];
  dataSources: Array<any>;
  rowKey?: string;
  loading?: boolean;
  title?: () => React.ReactElement;
  onSearch?: (keyword: string) => void;
  pageIndex?: number;
  handleChangePage: (index: number) => void;
  pageCount: number;
};

const Table: React.FC<TTableProps> = ({
  className,
  columns,
  dataSources,
  loading,
  rowKey = "id",
  title,
  pageIndex = 1,
  handleChangePage,
  pageCount,
}) => {
  return (
    <div className={classNames("Table", className)}>
      <div className="Table-body">
        <AntdTable
          pagination={false}
          columns={columns}
          dataSource={dataSources}
          loading={loading}
          rowKey={rowKey}
          title={title}
        />
      </div>
      {pageCount > 1 && (
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={(e) => handleChangePage(e.selected + 1)}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={() => null}
          forcePage={pageIndex - 1}
          className="pagination"
        />
      )}
    </div>
  );
};

export default Table;
