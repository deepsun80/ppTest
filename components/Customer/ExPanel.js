import { useState } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import Divider from "@material-ui/core/Divider";
import useStyles from "./style";

const ExPanel = ({ header, body }) => {
  const classes = useStyles();

  const [exp, setExp] = useState(true);

  function handleExpOn() {
    setExp(false);
  }

  function handleExpOff() {
    setExp(true);
  }
  return (
    <>
      <ExpansionPanel elevation={0} className={classes.expPanel}>
        <ExpansionPanelSummary aria-controls="exp-content" id="exp-header">
          {exp ? (
            <Typography variant="body1" className={classes.expHeader}>
              <IconButton color="secondary" onClick={handleExpOn}>
                <AddCircleOutlineIcon />
              </IconButton>{" "}
              {header}
            </Typography>
          ) : (
            <Typography variant="body1" className={classes.expHeader}>
              <IconButton color="secondary" onClick={handleExpOff}>
                <RemoveCircleOutlineIcon />
              </IconButton>{" "}
              {header}
            </Typography>
          )}
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>{body}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <Divider />
    </>
  );
};

ExPanel.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
};

export default ExPanel;
