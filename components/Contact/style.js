import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: "150px"
  },
  headerText: {
    color: theme.palette.primary.dark,
    marginBottom: 20
  },
  text: {
    color: theme.palette.primary.light,
    maxWidth: 500,
    margin: "auto"
  },
  form: {
    width: 650,
    maxWidth: "100%",
    margin: "50px auto"
  },
  field: {
    marginBottom: 50
  },
  input: {
    marginLeft: 20,
    marginTop: "-5px",
    backgroundColor: "#fafafa",
    zIndex: 1
  },
  button: {
    minWidth: 142
  },
  buttonRow: {
    width: "100%",
    textAlign: "center"
  }
}));

export default useStyles;
