import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import useStyles from "./style";

const TestimonialCard = ({ icon, text }) => {
  const classes = useStyles();
  return (
    <Card raised>
      <CardActions>
        <img
          alt="Paypossible card icon"
          title="Paypossible card icon"
          src={icon}
          className={classes.cardIcon}
        />
      </CardActions>
      <CardContent>
        <Typography
          variant="body2"
          color="secondary"
          align="center"
          className={classes.cardText}
        >
          <span style={{ color: "#000" }}>{text.title}</span>
          <br />
          {text.body}
        </Typography>
      </CardContent>
    </Card>
  );
};

TestimonialCard.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.object.isRequired
};

export default TestimonialCard;
