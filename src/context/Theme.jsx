import { ThemeProvider } from "@emotion/react";

const theme = {
    colors: {
        lightDark: "#FFFFFF80",
        darkLight: "rgba(0, 0, 0, 0.5)",
        lightBg: "rgba(250, 250, 250, 1)",
    }
};

const Theme = ({children})=> {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

export default Theme;