import styled from 'styled-components';

const ToastContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 1000;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  .toast {
    background: #495057;
    padding: 8px 16px;
    border-radius: 4px;
    color: #fff;
    line-height: 20px;
    width: 100%;
    max-width: 400px;
    word-wrap: break-word;

    animation: slideDown 0.8s;
    animation-delay: 3s;
    animation-fill-mode: forwards;

    @keyframes slideDown {
      from {
        opacity: 1;
        transform: translateY(0);
      }

      to {
        opacity: 0;
        transform: translateY(30px);
      }
    }

    .toast-content {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clmap: 1;
      -webkit-box-orient: vertical;
    }
  }

  @media screen and (max-width: 769px) {
    .toast-container {
      justify-content: flex-end;
      padding: 40px 24px;
    }
  }
`;

const Toast = () => {
  return (
    <ToastContainer>
      <div className="toast">
        <div className="toast-content">123123123123123123123213124214151515151515151515151515151</div>
      </div>
    </ToastContainer>
  );
};

export default Toast;
