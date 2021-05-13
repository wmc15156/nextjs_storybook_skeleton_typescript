import React, { FC, memo } from "react";
import styled from "styled-components";
//
const BasicButton = styled.button`
  width: 50px;
  height: 50px;
  color: #000;
  font-weight: bold;
`;

// export type ButtonProps = JSX.IntrinsicElements["button"] & {
//   // onClick?: (e: any) => void;
// };

const Button: FC = ({ children, ...props }) => {
  return <BasicButton>{children}</BasicButton>;
};

export default memo(Button);
