import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { MdLooksOne, MdLooksTwo, MdLooks3 } from "react-icons/md";
import useStyles from "./style";

const Steps = ({ index, step }) => {
  const classes = useStyles();
  return (
    <div className={classes.step}>
      {index === 0 && <MdLooksOne className={classes.stepIcon} />}
      {index === 1 && <MdLooksTwo className={classes.stepIcon} />}
      {index === 2 && <MdLooks3 className={classes.stepIcon} />}
      <Typography variant="body1" className={classes.stepHeader}>
        {step.title}
      </Typography>
      <Typography variant="body2" color="primary">
        {step.content}
      </Typography>
    </div>
  );
};

Steps.propTypes = {
  index: PropTypes.number.isRequired,
  step: PropTypes.object.isRequired
};

export default Steps;
