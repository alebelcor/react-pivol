import { css } from '@emotion/core';

export const headerStyle = css`
  margin: 20px auto;
  text-align: center;
`;

export const headingStyle = css`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.23;
  color: rgba(0, 0, 0, 0.85);
`;

export const mainStyle = css`
  margin: 20px auto;
  padding: 0 20px;
`;

export const formStyle = css`
  border: 1px solid #ebedf0;
  background-color: #fff;

  @media only screen and (min-device-width: 480px) {
    margin: 0 auto;
    width: 350px;
  }
`;

export const fieldsetContainerStyle = css`
  display: grid;
  grid-gap: 20px 5px;
  grid-template-columns: auto 1fr;
  grid-template-areas:
    '. volume'
    'label input'
    '. error';
  align-items: center;
  padding: 30px 20px;
`;

export const fieldsetStyle = css`
  display: contents;
`;

export const legendDefaultStyle = css`
  grid-area: volume;
  border: 1px solid #ffe58f;
  padding: 10px 18px;
  background-color: #fffbe6;
  border-radius: 4px;
`;

export const legendSuccessStyle = css`
  ${legendDefaultStyle};

  border-color: #b7eb8f;
  background-color: #f6ffed;
`;

export const legendFailStyle = css`
  ${legendDefaultStyle};

  border-color: #ffa39e;
  background-color: #fff1f0;
`;

export const labelStyle = css`
  grid-area: label;
  text-align: right;
`;

export const inputDefaultStyle = css`
  grid-area: input;
  border: 1px solid #d9d9d9;
  padding: 8px 12px;
  font-size: inherit;
  border-radius: 4px;
  outline: none;

  &::-webkit-input-placeholder {
    color: #bfbfbf;
  }

  &::-moz-placeholder {
    color: #bfbfbf;
  }

  &:-ms-input-placeholder {
    color: #bfbfbf;
  }

  &:focus {
    border-color: #40a9ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
`;

export const inputFailStyle = css`
  ${inputDefaultStyle};

  border-color: #f5222d;
  outline: none;

  &:focus {
    border-color: #f5222d;
    box-shadow: 0 0 0 2px rgba(245, 34, 45, 0.2);
  }
`;

export const errorStyle = css`
  grid-area: error;
  color: #f5222d;
`;
