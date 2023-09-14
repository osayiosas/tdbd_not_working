import { createTheme } from "@mui/material/styles";

import {  colors } from "@mui/material";

export const themeMode = {
  dark: "dark",
  light: "light",
};

const themeConfing = {
  custom: ({ mode }) => {
    const customPallete =
      mode === themeMode.dark
        ? {
            primary: {
              main: "#ff0000",
              contrastText: "#ffffff",
            },
            background: {
              default: "#000000",
              papper: "#131313",
            },
          }
        : {
            primary: {
              main: "#ff0000",
            },
            secondary: {
              main: "#f44336",
            },
            background: {
              default: colors.grey["100"],
            },
          };

    return createTheme({
      palette: {
        mode,
        ...customPallete,
      },

      components: {
        MuiButton: {
          defaultProps: { disableElevation: true },
        },
      },
    });
  },
};
export default themeConfing;