/* eslint-disable no-unused-vars */
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  topRow: {
    marginTop: "20vh",
    [theme.breakpoints.up("xl")]: {
      marginTop: "30vh"
    }
  },
  header: {
    color: theme.palette.primary.dark,
    fontWeight: 600,
    fontSize: "1rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem"
    },
    marginBottom: 30
  },
  headerSmall: {
    color: theme.palette.primary.dark,
    fontWeight: 600,
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5rem"
    },
    margin: "80px auto"
  },
  headerSpan: {
    color: theme.palette.secondary.main
  },
  text: {
    color: theme.palette.primary.dark
  },
  button: {
    minWidth: 200
  },
  rowOneCard: {
    maxWidth: "100%",
    [theme.breakpoints.down("md")]: {
      marginTop: 30
    }
  },
  rowTwo: {
    margin: "20vh auto"
  },
  cardContainer: {
    marginTop: "5vh"
  },
  cardText: {
    fontSize: "0.9rem",
    fontWeight: 600
  },
  cardIcon: {
    width: "35%",
    margin: "100px auto 50px"
  },
  midGrid: {
    [theme.breakpoints.up("md")]: {
      transform: "translateY(30px)"
    }
  },
  rowThreeCard: {
    maxHeight: 650
  },
  step: {
    margin: "30px auto 50px"
  },
  stepHeader: {
    fontSize: "1.5rem",
    color: theme.palette.primary.dark
  },
  stepIcon: {
    color: theme.palette.info.main,
    fontSize: "2rem"
  },
  rowFour: {
    margin: "50px auto"
  },
  expPanel: {
    background: "transparent"
  },
  expHeader: {
    color: theme.palette.primary.dark,
    fontWeight: 600
  }
}));

export default useStyles;
