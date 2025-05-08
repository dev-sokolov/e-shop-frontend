/** @jsxImportSource @emotion/react */

import Container from "../layouts/Container/Container";

import FooterContacts from "./FooterContacts/FooterContacts";
import FooterSocialLinks from "./FooterSocialLinks/FooterSocialLinks";
import FooterCopyright from "./FooterCopyright/FooterCopyright";

import { footerStyle, footerContentStyle } from "./styles";

const Footer = ()=> {
    return (
        <footer css={footerStyle}>
            <Container>
                <div css={footerContentStyle}>
                    <FooterContacts />
                    <FooterSocialLinks />
                </div>
                <FooterCopyright />
            </Container>
        </footer>
    )
}

export default Footer;