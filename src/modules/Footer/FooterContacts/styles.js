import { css } from "@emotion/react";

export const footerContactsTitleStyle = css`
    font-size: 24px;
    color: #fff;
    margin-bottom: 39px;
`;

export const footerContactsItemStyle = css`
    margin-bottom: 13px;
`;

export const footerContactsLinkStyle = color =>  css`
text-decoration: none;
font-size: 18px;
color: ${color};

:hover {
    color: #fff;
}
`;