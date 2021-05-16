import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { SignUpContainer } from './styles';

const SignUp = () => {
  return (
    <SignUpContainer className="signup-container">
      <div className="signup">
        <div className="signup-logo">
          <Link href="/">
            <a>
              <Image src="/assets/image/logo.svg" alt="image" width={134} height={22} />
            </a>
          </Link>
        </div>
        <h1 className="signup-title">
          인생을 바꾸는 교육, <br />
          패스트캠퍼스
        </h1>

        <form>
          <div className="signup-form-container">
            <input type="text" placeholder="이름" className="signup-form-input" />
            <div className="signup-form-email-row">
              <input type="email" className="signup-form-input" placeholder="이메일" />
              <button className="signup-form-send-validation-email-button">인증메일 발송</button>
            </div>
            <input type="tel" className="signup-form-input" placeholder="휴대폰 번호(숫자만)" />
            <input type="password" className="signup-form-input" placeholder="비밀번호" />
            <input type="password" className="signup-form-input" placeholder="비밀번호 확인" />
          </div>

          <div className="signup-option-container">
            <div className="signup-option-row">
              <div className="signup-form-checkbox-container">
                <input type="checkbox" className="signup-form-checkbox" id="service-policy" />
                <label htmlFor="service-policy" className="signup-form-checkbox-label">
                  서비스 이용약관 동의 (필수)
                </label>
              </div>
              <a href="#" className="signup-option-policy-link">
                보기
              </a>
            </div>

            <div className="signup-option-row">
              <div className="signup-form-checkbox-container">
                <input type="checkbox" className="signup-form-checkbox" id="service-policy" />
                <label htmlFor="service-policy" className="signup-form-checkbox-label">
                  개인정보 처리방침 동의 (필수)
                </label>
              </div>
              <a href="#" className="signup-option-policy-link">
                보기
              </a>
            </div>

            <div className="signup-option-row">
              <div className="signup-form-checkbox-container">
                <input type="checkbox" className="signup-form-checkbox" id="service-policy" />
                <label htmlFor="service-policy" className="signup-form-checkbox-label">
                  소식과 다양한 안내(필수)
                </label>
              </div>
              <a href="#" className="signup-option-policy-link">
                보기
              </a>
            </div>
          </div>
        </form>

        <div className="signup-button-container">
          <button className="signup-button">회원가입</button>
        </div>
      </div>
    </SignUpContainer>
  );
};

export default SignUp;
