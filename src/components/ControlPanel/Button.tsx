import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
}

export default function Button(props: ButtonProps) {
  const { active, ...restProps } = props;
  return <StyledButton $active={active} {...restProps} />;
}

const StyledButton = styled.button<{ $active: boolean }>`
  padding: 12px 32px;
  /* border: 1px solid ${(props) => props.theme.colors.darkblue70}; */
  border: none;
  border-radius: 8px;
  color: ${(props) => props.theme.colors.darkblue70};
  outline: none;
  font-size: 1rem;
  line-height: 1.2;
  &:hover {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  }
  &:hover,
  &:focus {
    /* padding: 11px 31px; */
    /* border: 1px solid ${(props) => props.theme.colors.blue40}; */
    color: ${(props) => props.theme.colors.blue40};
    font-weight: bold;
  }
  ${({ $active }) =>
    $active &&
    css`
      && {
        padding: 12px 32px;
        color: #fff;
        font-weight: bold;
        background: ${(props) => props.theme.colors.blue40};
        border: 1px solid ${(props) => props.theme.colors.blue40};
      }
    `}
  @media (max-width: 768px) {
    font-size: 0.875rem;
    padding: 8px 20px;
    :hover,
    :focus {
      padding: 7px 19px;
    }
    ${({ $active }) =>
      $active &&
      css`
        && {
          padding: 8px 20px;
        }
      `}
  }
`;
