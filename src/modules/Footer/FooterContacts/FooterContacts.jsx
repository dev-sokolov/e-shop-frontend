/** @jsxImportSource @emotion/react */
import { useTheme } from "@emotion/react";

import footerContactsItems from "./footerContactsItems";

import {
  footerContactsTitleStyle,
  footerContactsItemStyle,
  footerContactsLinkStyle,
} from "./styles";

const FooterContacts = () => {
  const { colors } = useTheme();

  const elements = footerContactsItems.map(({ href, text }) => (
    <li key={text} css={footerContactsItemStyle}>
      <a href={href} css={footerContactsLinkStyle(colors.lightDark)}>
        {text}
      </a>
    </li>
  ));

  return (
    <div>
      <p css={footerContactsTitleStyle}>Контакты</p>
      <ul>{elements}</ul>
    </div>
  );
};

export default FooterContacts;
