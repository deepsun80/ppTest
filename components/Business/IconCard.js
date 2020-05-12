import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import useStyles from "./style";

const TestimonialCard = ({ icon, header }) => {
  const classes = useStyles();
  return (
    <Card raised>
      <CardContent>
        <Typography
          variant="body2"
          color="secondary"
          align="center"
          className={classes.cardText}
        >
          {header}
        </Typography>
      </CardContent>
      <CardActions>
        <img
          alt="Paypossible card icon"
          title="Paypossible card icon"
          src={icon}
          className={classes.cardIcon}
        />
      </CardActions>
    </Card>
  );
};

TestimonialCard.propTypes = {
  icon: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired
};

export default TestimonialCard;
