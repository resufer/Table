import React from 'react';
import { Pagination, Form, Input } from 'antd';
import style from './table.module.css';
import { addNewElement, deleteTableData, getTableData, reverseTable } from './tableData';

let Table = () => {
  let [currentPage, setCurrentPage] = React.useState(1);
  let [rerender, setRerender] = React.useState(false);

  let changePage = (e) => {
    setCurrentPage(e);
  }

  let onFinish = (values) => {
    addNewElement(values.el);
    setRerender(!rerender);
  };

  let clearAll = () => {
    deleteTableData();
    setRerender(!rerender);
  };

  let reverseAll = () => {
    reverseTable();
    setRerender(!rerender);
  }

  let [tableData, totalPages] = getTableData();

  return (
    <>
      <Pagination simple defaultCurrent={currentPage} total={totalPages} onChange={changePage} className={style.pagination} />
      <div className={style.table}>
        {tableData[currentPage - 1].map((el, ind) => {
          return <div className={style.tr} key={ind}>
            <div className={style.ind}>
              <button onClick={reverseAll}>{ind + 1}</button>
            </div>
            <div className={style.el}>{el}</div>
          </div>
        })}
      </div>
      <div className={style.form}>
        <Form onFinish={onFinish}>
          <Form.Item name="el" rules={[{ required: true, message: 'Please input somethings!' }]}>
            <Input.TextArea allowClear maxLength='80' placeholder='New Element' />
          </Form.Item>
          <Form.Item>
            <button type="primary" htmltype="submit">Add</button>
          </Form.Item>
        </Form>
        <button className={style.delete} onClick={clearAll}>Clear All</button>
      </div>
    </>
  )
}

export default Table;