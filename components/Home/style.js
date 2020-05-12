/* eslint-disable no-unused-vars */
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logo: {
    maxHeight: 30,
    marginBottom: -5,
    paddingLeft: 40,
    marginTop: 10
  },
  cardLogo: {
    maxHeight: 30,
    marginTop: 10,
    paddingLeft: 5
  },
  topRow: {
    marginTop: "15vh",
    [theme.breakpoints.up("sm")]: {
      marginTop: "30vh"
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "15vh"
    },
    [theme.breakpoints.up("xl")]: {
      marginTop: "30vh"
    },
    minHeight: "80vh"
  },
  gridContainter: {
    margin: "0 auto 10vh"
  },
  header: {
    color: theme.palette.primary.dark,
    fontWeight: 600,
    fontSize: "1.5rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2.3rem"
    }
  },
  whiteHeader: {
    color: "#fff",
    fontWeight: 600,
    fontSize: "1.5rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2.3rem"
    }
  },
  subHeader: {
    color: theme.palette.secondary.light,
    fontSize: "1.5rem",
    fontWeight: 600,
    [theme.breakpoints.up("md")]: {
      fontSize: "2.3rem",
      lineHeight: "2.5rem"
    }
  },
  text: {
    color: theme.palette.primary.dark,
    margin: "30px auto"
  },
  whiteText: {
    color: "#fff",
    margin: "30px auto"
  },
  button: {
    minWidth: 200
  },
  homeCardOne: {
    maxWidth: "100%",
    [theme.breakpoints.down("md")]: {
      marginTop: 30
    }
  },
  homeCardTwo: {
    maxWidth: "80%"
  },
  rowThreeCard: {
    minHeight: 330,
    paddingTop: "5%"
  },
  card: {
    paddingTop: 10
  },
  cardsGrid: {
    [theme.breakpoints.up("md")]: {
      margin: "50px auto -100px"
    }
  },
  cardHeader: {
    fontWeight: 600,
    marginTop: 10,
    marginLeft: 5
  },
  cardList: {
    listStyle: "none",
    paddingLeft: 0
  },
  testimonialRow: {
    paddingTop: "15vh",
    paddingBottom: "15vh"
  },
  testimonialContainer: {
    marginTop: "10vh"
  },
  cardImage: {
    width: 150,
    height: 150,
    margin: "auto"
  },
  testimonialText: {
    margin: "30px auto"
  },
  author: {
    fontWeight: 600,
    color: theme.palette.primary.dark,
    fontStyle: "italic"
  },
  midGrid: {
    [theme.breakpoints.up("md")]: {
      marginTop: "-30px"
    }
  }
}));

export default useStyles;
