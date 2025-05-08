/** @jsxImportSource @emotion/react */

import { containerStyle } from "./styles";

const Container = ({children})=> {
    return <div css={containerStyle}>{children}</div>
}

export default Container;