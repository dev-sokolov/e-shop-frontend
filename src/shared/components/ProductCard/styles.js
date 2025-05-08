import { css } from "@emotion/react";

import { imgResponsiveStyle } from "../../styles/mixins";

export const productCardWrapperStyle = css`
    max-width: 386px;
    padding: 45px 42px;
    border: 2px solid #00000026;
    border-radius: 42px;
`;

export const productCardImageWrapperStyle = css`
    text-align: center;
    margin-bottom: 32px;
`;

export const productCardImageStyle = css`
    ${imgResponsiveStyle}
    max-width: 278px;
`
export const productCardTitleStyle = css`
    font-size: 24px;
    line-height: 1.5;
    margin-bottom: 42px;
`;

export const productCardPriceNameStyle = css`
    font-size: 14px;
    font-weight: 500;
    color: #666666;
    text-transform: uppercase;
    display: block;
    margin-bottom: 5px;
`;

export const productCardPriceStyle = css`
    font-size: 24px;
    font-weight: 700;
    color: #000;
`;

export const productCardActionsStyle = css`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;

export const productCardAddToCartIconStyle = css`
    cursor: pointer;
`;