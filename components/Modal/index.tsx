import styled from 'styled-components';
import Image from 'next/image';

const ModalWrapper = styled.div`
  z-index: 1000;
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .modal {
    background-color: #fff;
    padding: 24px 24px 32px 24px;
    width: 100%;
    max-width: 480px;
    margin: 0 24px;
    border-radius: 8px;
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-weight: bold;
      font-size: 16px;

      .modal-image-container {
        width: 20px;
        height: 20px;
        > img {
          width: 100%;
          object-fit: cover;
        }
      }
      .modal-content {
        margin: 32px 0;
      }
    }
    .modal-footer {
      display: flex;
      margin-top: 24px;
      .modal-footer-button {
        flex: 1;
        border-radius: 4px;
        padding: 12px;
        color: #fff;
        font-weight: bold;
        border: none;

        &:not(:last-child) {
          margin-right: 8px;
        }

        &.cancel {
          background: gray;
        }

        &.confirm {
          background: #d6336c;
        }
      }
    }
  }
`;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #e9ecef;
  z-index: 999;
`;

const Modal = () => {
  return (
    <>
      <Overlay />
      <ModalWrapper>
        <div className="modal">
          <div className="modal-header">
            <h1 className="modal-title">모달 제목</h1>
            <div className="modal-image-container">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzLd91hh-pMSlqSnq6UPloOmzvhblCMjzVgg&usqp=CAU"
                alt="img close btn"
              />
            </div>
          </div>
          <div className="modal-content">
            모달 내용 모달 내용 모달 내용 모달 내용 모달 내용 모달 내용 모달 내용 모달 내용 모달 내용 모달 내용 모달
            내용 모달 내용 모달 내용
          </div>
          <div className="modal-footer">
            <button className="modal-footer-button cancel">취소</button>
            <button className="modal-footer-button confirm">확인</button>
          </div>
        </div>
      </ModalWrapper>
    </>
  );
};

export default Modal;
