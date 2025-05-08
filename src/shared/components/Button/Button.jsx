/** @jsxImportSource @emotion/react */

import { btnStyle } from "./styles";

const Button = ({ children, type = "submit", ...props }) => {
  return (
    <button type={type} {...props} css={btnStyle}>
      {children}
    </button>
  );
};

export default Button;
