import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useStyles from "./style";

const TestimonialCard = ({ image, text, author }) => {
  const classes = useStyles();
  return (
    <Card raised className={classes.card}>
      <CardContent>
        <Avatar alt="Remy Sharp" src={image} className={classes.cardImage} />
        <Typography
          variant="body2"
          color="primary"
          className={classes.testimonialText}
        >
          {text}
        </Typography>
        <div style={{ width: "100%", textAlign: "right" }}>
          <Typography component="body2" className={classes.author}>
            {author}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

TestimonialCard.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default TestimonialCard;
