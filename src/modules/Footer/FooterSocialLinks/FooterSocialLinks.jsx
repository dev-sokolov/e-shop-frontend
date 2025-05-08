/** @jsxImportSource @emotion/react */

import footerSocialLinksItems from "./footerSocialLinksItems";

import { footerSocialLinksListStyle } from "./styles";

const FooterSocialLinks = () => {
  const elements = footerSocialLinksItems.map(({ href, icon }) => (
    <li key={href}>
      <a href={href} target="_blank">
        {icon}
      </a>
    </li>
  ));

  return <ul css={footerSocialLinksListStyle}>{elements}</ul>;
};

export default FooterSocialLinks;
