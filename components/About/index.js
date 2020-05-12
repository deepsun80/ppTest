import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import useStyles from "./style";

const About = ({ content }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Typography variant="body1" className={classes.text}>
          {content}
        </Typography>
      </Container>
    </div>
  );
};

About.propTypes = {
  content: PropTypes.string.isRequired
};

export default About;
