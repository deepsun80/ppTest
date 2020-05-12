import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "80px 0"
  },
  text: {
    marginBottom: "30px",
    color: theme.palette.primary.light
  }
}));

export default useStyles;
