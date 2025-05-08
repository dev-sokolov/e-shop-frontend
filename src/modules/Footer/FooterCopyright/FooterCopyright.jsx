/** @jsxImportSource @emotion/react */
import { useTheme } from "@emotion/react";

import { footerCopyrightStyle } from "./styles";

const FooterCopyright = () => {
  const { colors } = useTheme();

  return (
    <p css={footerCopyrightStyle(colors.lightDark)}>
      2024 Сникер-магазин. Все права защищены
    </p>
  );
};

export default FooterCopyright;
