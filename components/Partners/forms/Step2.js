/* eslint-disable react/jsx-wrap-multilines */
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import styles from "../style";

function Step2({
  currentStep,
  company_name,
  company_website,
  business_length_years,
  company_activity,
  handleChange,
  header
}) {
  if (currentStep !== 2) {
    return null;
  }
  return (
    <div className="form-group">
      <Typography variant="h5" style={styles.formHeader}>
        {header}
      </Typography>
      <Grid container spacing={1}>
        <Grid item md={6} xs={12}>
          <TextField
            id="company_name"
            name="company_name"
            type="text"
            variant="outlined"
            fullWidth
            label="Company Name"
            value={company_name}
            onChange={handleChange}
            style={styles.gridField}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField
            id="company_website"
            name="company_website"
            type="text"
            variant="outlined"
            fullWidth
            label="Company Website"
            value={company_website}
            onChange={handleChange}
            style={styles.gridField}
          />
        </Grid>
      </Grid>

      <TextField
        id="business_length_years"
        name="business_length_years"
        type="number"
        variant="outlined"
        fullWidth
        label={
          <span className="longFormLabel">
            How long have you been in business (number of years)?
          </span>
        }
        value={business_length_years}
        onChange={handleChange}
        style={styles.field}
      />
      <TextField
        id="standard-multiline-static"
        name="company_activity"
        label={
          <span className="longFormLabel">Please Describe your Business</span>
        }
        type="text"
        multiline
        rows="4"
        variant="outlined"
        fullWidth
        value={company_activity}
        onChange={handleChange}
        style={styles.longField}
      />
    </div>
  );
}

Step2.defaultProps = {
  header: ""
};

Step2.propTypes = {
  currentStep: PropTypes.number.isRequired,
  company_name: PropTypes.string.isRequired,
  company_website: PropTypes.string.isRequired,
  business_length_years: PropTypes.string.isRequired,
  company_activity: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  header: PropTypes.string
};

export default Step2;
