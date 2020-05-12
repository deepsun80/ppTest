import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import styles from "../style";

function Step3({
  currentStep,
  number_business,
  primary_industries,
  handleChange,
  header,
  businesses
}) {
  if (currentStep !== 3) {
    return null;
  }
  return (
    <div className="form-group">
      <Typography variant="h5" style={styles.formHeader}>
        {header}
      </Typography>
      <TextField
        id="number_business"
        name="number_business"
        type="number"
        variant="outlined"
        fullWidth
        label={
          <span className="longFormLabel">
            How many businesses do you currently work with?
          </span>
        }
        value={number_business}
        onChange={handleChange}
      />

      <FormControl
        variant="outlined"
        fullWidth
        style={styles.longField}
        className="selectForm"
      >
        <InputLabel htmlFor="primary_industries">
          What are the primary industries you work with
          <br />
          (select all that apply)?
        </InputLabel>
        <Select
          multiple
          value={primary_industries}
          onChange={handleChange}
          labelWidth={100}
          inputProps={{
            name: "primary_industries",
            id: "primary_industries"
          }}
          style={{ minHeight: 80 }}
        >
          {businesses.map((business) => (
            <MenuItem key={business} value={business}>
              {business}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

Step3.defaultProps = {
  header: ""
};

Step3.propTypes = {
  currentStep: PropTypes.number.isRequired,
  number_business: PropTypes.string.isRequired,
  primary_industries: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  header: PropTypes.string,
  businesses: PropTypes.array.isRequired
};

export default Step3;
