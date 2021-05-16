import styled from 'styled-components';

export const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .signup {
    width: 100%;
    max-width: 500px;
    border: 1px solid grey;
    border-radius: 8px;
    padding: 60px 50px;
  }

  .signup-title {
    font-size: 30px;
    color: black;
    line-height: 2.4rem;
    margin: 16px 0 56px 0;
  }

  .signup-form-container {
    display: flex;
    flex-direction: column;
    .signup-form-input {
      border: 1px solid gray;
      border-radius: 4px;
      padding: 16px;
      width: 100%;

      &::placeholder {
        color: black;
      }

      &:not(:last-child) {
        margin-bottom: 12px;
      }
    }

    .signup-form-email-row {
      display: flex;
    }
    .signup-form-send-validation-email-button {
      padding: 16px;
      background: grey;
      border-radius: 4px;
      color: #fff;
      margin-left: 8px;
      height: 48px;
      min-width: max-content;
    }
  }

  .signup-option-container {
    margin: 18px 0 42px 0;
    .signup-option-row {
      display: flex;
      justify-content: space-between;

      &:not(:last-child) {
        margin-bottom: 12px;
      }

      .signup-option-policy-link {
        font-size: 0.8rem;
      }
    }
  }

  .signup-button-container {
    .signup-button {
      width: 100%;
      height: 48px;
      line-height: 48px;
      color: #fff;
      font-size: 1rem;
      background: gray;
      font-weight: bold;
      border-radius: 4px;
    }
  }

  @media screen and (max-width: 769px) {
    align-items: flex-start;
    .signup {
      border: none;

      .signup-title {
        font-size: 24px;
        line-height: 35px;
        margin: 16px;
      }
    }
  }
`;
