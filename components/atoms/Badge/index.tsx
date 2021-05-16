import styled from 'styled-components';
import { FC } from 'react';
import classNames from 'classnames';

const BadgeWrapper = styled.span<{ done: boolean }>`
  @media (min-width: 768px) {
    color: ${p => (p.done ? 'red' : 'gray')};
  }

  @media (max-width: 768px) {
    max-width: 57px;
    padding: 2px 8px;
    border-radius: 4px;
    background-color: ${p => (p.done ? 'red' : 'gray')};
  }
`;

type Props = {
  done: boolean;
  className?: string;
};

const Badge: FC<Props> = ({ children, done, className }) => {
  console.log(className);
  return (
    <BadgeWrapper done={done} className={classNames(className)}>
      {children}
    </BadgeWrapper>
  );
};

export default Badge;
