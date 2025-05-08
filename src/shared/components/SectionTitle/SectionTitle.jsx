/** @jsxImportSource @emotion/react */

import { sectionTitleWrapperStyle, sectionTitleHeadingStyle } from "./styles";

const SectionTitle = ({ title }) => {
  return (
    <div css={sectionTitleWrapperStyle}>
      <h2 css={sectionTitleHeadingStyle}>{title}</h2>
      <hr color="#EAEAEA" />
    </div>
  );
};

export default SectionTitle;
