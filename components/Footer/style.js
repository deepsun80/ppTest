import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    flexGrow: 1,
    padding: "2vh 0 0",
    background: "#fff"
  },
  logo: {
    [theme.breakpoints.up("md")]: {
      paddingTop: 15
    },
    maxWidth: 150
  },
  link: {
    textDecoration: "none"
  },
  footerLink: {
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.secondary.light,
      background: "transparent !important"
    },
    fontSize: "1rem !important",
    transition: "all 0.2s !important",
    marginTop: 20,
    cursor: "pointer"
  },
  footerMenuHeader: {
    color: theme.palette.primary.dark,
    fontSize: "1.1rem",
    fontWeight: 600
  },
  icon: {
    fontSize: "2rem",
    transition: "all 0.2s",
    margin: "0 16px",
    "&:hover": {
      color: theme.palette.secondary.light
    }
  },
  socialCol: {
    display: "flex",
    justifyContent: "space-around",
    [theme.breakpoints.up("md")]: {
      paddingTop: 15
    }
  }
}));

export default useStyles;
