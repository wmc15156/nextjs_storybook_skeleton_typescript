import { VFC } from 'react';
import Badge from '@components/atoms/Badge';
import { TableWrapper } from '@components/atoms/Table/styles';

const dummy = [
  {
    name: '고길동',
    phone: '010-0000-0000',
    address: '서울시 강남구 강남대로 123-456',
    item: '불고기 피자L',
    payment: '결제완료',
  },
  {
    name: '고길동',
    phone: '010-0000-0000',
    address: '서울시 강남구 강남대로 123-456',
    item: '불고기 피자L',
    payment: '현장결제',
  },
  {
    name: '고길동',
    phone: '010-0000-0000',
    address: '서울시 강남구 강남대로 123-456',
    item: '불고기 피자L',
    payment: '결제완료',
  },
];

const Table: VFC = () => {
  return (
    <TableWrapper>
      <div>
        <h1>주문내역</h1>
      </div>
      <div className="order-lists">
        <div className="order-item order-head">
          <span className="name cell">주문자</span>
          <span className="phone cell">연락처</span>
          <span className="address cell">주소</span>
          <span className="item cell">주문 내역</span>
          <span className="payment cell ">결제</span>
        </div>
        {dummy.map((list, i) => (
          <div key={i} className="order-item order-body">
            <span className="cell name" data-label="주문자">
              {list.name}
            </span>
            <span className="cell phone" data-label="연락처">
              {list.phone}
            </span>
            <span className="cell address" data-label="주소">
              {list.address}
            </span>
            <span className="cell item">{list.item}</span>
            <Badge className="cell payment" done={list.payment === '결제완료'}>
              {list.payment}
            </Badge>
          </div>
        ))}
      </div>
    </TableWrapper>
  );
};

export default Table;
