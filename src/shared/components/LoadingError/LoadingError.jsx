/** @jsxImportSource @emotion/react */

import { loadingErrorStyle } from "./styles";

const LoadingError = ({children})=> {
    return <p css={loadingErrorStyle}>{children}</p>
}

export default LoadingError;