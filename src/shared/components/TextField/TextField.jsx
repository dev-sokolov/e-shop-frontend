/** @jsxImportSource @emotion/react */
import { useId } from "react";
import { useTheme } from "@emotion/react";

import {
  textFieldWrapperStyle,
  textFieldLabelStyle,
  textFieldStyle,
  textFieldErrorStyle,
} from "./styles";

const TextField = ({
  label,
  name,
  register,
  rules,
  error,
  as = "input",
  ...props
}) => {
  const { colors } = useTheme();

  const id = useId();

  return (
    <div css={textFieldWrapperStyle}>
      {label && (
        <label htmlFor={id} css={textFieldLabelStyle}>
          {label}
        </label>
      )}
      {as === "input" && (
        <input
          {...register(name, rules)}
          {...props}
          id={id}
          css={textFieldStyle(colors.lightBg)}
        />
      )}
      {as === "textarea" && (
        <textarea
          {...register(name, rules)}
          {...props}
          id={id}
          css={textFieldStyle(colors.lightBg)}
        ></textarea>
      )}
      {error && <p css={textFieldErrorStyle}>{error.message}</p>}
    </div>
  );
};

export default TextField;
