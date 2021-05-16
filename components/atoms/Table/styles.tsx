import styled from 'styled-components';

export const TableWrapper = styled.div`
  padding: 20px 20px;

  .order-lists {
    color: black;
    @media (min-width: 768px) {
      border-top: 1px solid gray;
      overflow-x: auto;
    }

    .order-item {
      @media (min-width: 768px) {
        display: flex;
        border-bottom: 1px solid darkgrey;
        min-width: 1000px;
        &.order-head {
          background-color: grey;
        }
      }

      @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        &.order-head {
          display: none;
        }
        &.order-body {
          padding: 24px;
          border-radius: 8px;
          background-color: #fff;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
          margin-bottom: 30px;
        }
      }
    }

    .cell {
      @media (min-width: 768px) {
        display: flex;
        align-items: center;
        padding: 0 8px;
        height: 32px;
        &.name {
          width: 15%;
        }
        &.phone {
          width: 15%;
        }
        &.address {
          width: 40%;
        }
        &.item {
          width: 20%;
        }
        &.payment {
          width: 10%;
        }
      }
      @media (max-width: 768px) {
        &.payment {
          order: -2;
        }
        &.item {
          order: -1;
          margin: 8px 0;
          font-size: 20px;
          font-weight: 700;
        }
        &.name,
        &.phone,
        &.address {
          display: flex;
          margin-top: 4px;
          &::before {
            color: #ced4da;
            content: attr(data-label);
            width: 60px;
            flex-shrink: 0;
            font-weight: 700;
          }
        }
      }
    }
  }
`;
