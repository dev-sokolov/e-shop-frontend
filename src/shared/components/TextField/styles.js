import { css } from "@emotion/react";

export const textFieldWrapperStyle = css`
    margin-bottom: 39px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 10px;
`;

export const textFieldLabelStyle = css`
    font-size: 18px;
    font-weight: 500;
    width: 100px;
`;

export const textFieldStyle = bgColor => css`
    background-color: ${bgColor};
    padding: 25px 21px;
    border: none;
    outline: none;
    border-radius: 10px;
    font-size: 18px;
    margin-bottom: 5px;

    ::placeholder: {
        color: #000000B2;
    }
`;

export const textFieldErrorStyle = css`
    width: 100%;
    color: red;
    font-size: 16px;
`;