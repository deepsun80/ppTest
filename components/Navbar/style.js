import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1
  },
  appPadding: {
    paddingLeft: "3vw",
    paddingTop: "1vh",
    paddingBottom: "2vh",
    [theme.breakpoints.up("xl")]: {
      paddingLeft: "10vw",
      paddingRight: "10vw",
      paddingTop: "1vh",
      paddingBottom: "1vh"
    },
    transition: "all 0.5s"
  },
  appShadowNone: {
    boxShadow: "none"
  },
  appShadowInitial: {
    boxShadow:
      " 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)"
  },
  link: {
    textDecoration: "none"
  },
  inputRoot: {
    color: "inherit"
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("lg")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("lg")]: {
      display: "none"
    }
  },
  logo: {
    cursor: "pointer",
    maxWidth: 180,
    [theme.breakpoints.up("xl")]: {
      maxWidth: 220
    }
  },
  navLinkPrimaryColor: {
    color: theme.palette.primary.light,
    [theme.breakpoints.up("md")]: {
      color: theme.palette.secondary.main
    },
    "&:hover": {
      color: theme.palette.secondary.dark
    }
  },
  navLinkSecondaryColor: {
    color: theme.palette.primary.light,
    "&:hover": {
      color: theme.palette.secondary.dark
    }
  },
  navLink: {
    padding: 0,
    margin: "10px 15px",
    fontSize: "1rem",
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.1rem"
    },
    transition: "all 0.2s",
    borderBottom: `2px solid transparent`,
    "&:hover": {
      opacity: 0.8,
      borderBottom: `2px solid ${theme.palette.secondary.light}`,
      background: "transparent",
      boxShadow: "none !important"
    }
  }
}));

export default useStyles;
