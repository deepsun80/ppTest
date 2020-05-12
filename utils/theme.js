import { createMuiTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

function pxToRem(value) {
  return `${value / 16}rem`;
}

const breakpoints = createBreakpoints({
  values: {
    xs: 375,
    sm: 410,
    md: 765,
    lg: 1025,
    xl: 1370
  }
});

const theme = createMuiTheme({
  breakpoints,
  typography: {
    useNextVariants: true,
    fontFamily: "Lato, sans-serif",
    fontSize: 14,
    fontWeight: 300,
    fontWeightBold: 600
  },
  palette: {
    primary: {
      light: "#718792",
      main: "#495f69",
      dark: "#2b383e",
      contrastText: "#fff"
    },
    secondary: {
      light: "#19C27F",
      main: "#19C27F",
      dark: "#009052",
      contrastText: "#fff"
    },
    info: {
      main: "#5351FB"
    },
    background: {
      default: "#f5f6fa",
      paper: "#fff"
    }
  },
  overrides: {
    MuiPaper: {
      elevation4: {
        boxShadow: "0px 0px 20px #d0d0d0"
      },
      elevation8: {
        boxShadow: "0px 0px 20px #d0d0d0"
      },
      rounded: {
        borderRadius: 8
      }
    },
    MuiFab: {
      root: {
        boxShadow: "0px 8px 10px #d9e0e3",
        "&:disabled": {
          backgroundColor: "#19C27F",
          opacity: 0.36,
          color: "#fff"
        }
      },
      extended: {
        padding: "0 55px"
      }
    },
    MuiInputBase: {
      input: {
        borderRadius: "30px"
      }
    },
    MuiOutlinedInput: {
      input: {
        backgroundColor: "transparent"
      },
      notchedOutline: {
        borderRadius: "30px"
      },
      root: {
        "&:hover:not($disabled):not($error) $notchedOutline": {
          borderColor: "#19C27F"
        }
      }
    },
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: "#19C27F"
        }
      }
    },
    MuiInputLabel: {
      outlined: {
        backgroundColor: "#ffffff"
      }
    },
    MuiSelect: {
      select: {
        "&:focus": {
          backgroundColor: "transparent"
        }
      }
    },
    MuiTypography: {
      h1: {
        fontSize: pxToRem(23)
      },
      h2: {
        fontSize: pxToRem(20)
      },
      h3: {
        fontSize: pxToRem(18)
      },
      h4: {
        fontSize: pxToRem(16)
      },
      h5: {
        fontSize: pxToRem(14)
      },
      h6: {
        fontSize: pxToRem(14)
      }
    },
    MuiStepIcon: {
      root: {
        color: "#7697A0",
        "&$active": {
          color: "#19C27F"
        },
        "&$completed": {
          color: "#19C27F"
        }
      }
    },
    MuiStep: {
      root: {
        "&$vertical": {
          marginBottom: "10px"
        }
      }
    },
    MuiStepper: {
      root: {
        padding: 0,
        "&$vertical": {
          background: "transparent"
        }
      }
    },
    MuiTableRow: {
      root: {
        "&:nth-of-type(even)": {
          backgroundColor: "#f9f9f9"
        }
      }
    },
    MuiTableHead: {
      root: {
        backgroundColor: "#7697A0"
      }
    },
    MuiTableCell: {
      head: {
        color: "#fff"
      }
    },
    MuiListItem: {
      root: {
        "&$selected": {
          backgroundColor: "#19C27F",
          color: "#fff",
          boxShadow:
            "0 12px 20px -10px rgba(0, 172, 193, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 172, 193, 0.2)",
          "&:hover": {
            backgroundColor: "#19C27F",
            color: "#fff",
            boxShadow:
              "0 12px 20px -10px rgba(0, 172, 193, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 172, 193, 0.2)"
          }
        }
      },
      button: {
        transition: "all 0.3s",
        "&:hover": {
          backgroundColor: "#19C27F",
          color: "#fff",
          boxShadow:
            "0 12px 20px -10px rgba(0, 172, 193, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(0, 172, 193, 0.2)"
        }
      }
    },
    MuiExpansionPanel: {
      root: {
        "&:before": {
          display: "none"
        }
      }
    }
  }
});

export default theme;
