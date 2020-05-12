import PropTypes from "prop-types";
import MaskedInput from "react-text-mask";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import styles from "../style";

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "(",
        /[1-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ]}
      placeholderChar={"\u2000"}
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired
};

function Step1({
  currentStep,
  first_name,
  last_name,
  email,
  phone_number,
  handleChange,
  header
}) {
  if (currentStep !== 1) {
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
            id="first_name"
            name="first_name"
            type="text"
            variant="outlined"
            fullWidth
            label="First Name"
            value={first_name}
            onChange={handleChange}
            style={styles.gridField}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <TextField
            id="last_name"
            name="last_name"
            type="text"
            variant="outlined"
            fullWidth
            label="Last Name"
            value={last_name}
            onChange={handleChange}
            style={styles.gridField}
          />
        </Grid>
      </Grid>
      <TextField
        id="email"
        name="email"
        type="email"
        variant="outlined"
        fullWidth
        label="Email"
        value={email}
        onChange={handleChange}
        style={styles.field}
      />
      <FormControl fullWidth style={styles.longField}>
        <InputLabel htmlFor="phone_number" style={styles.input}>
          Phone Number
        </InputLabel>
        <OutlinedInput
          name="phone_number"
          value={phone_number}
          onChange={handleChange}
          id="phone_number"
          inputComponent={TextMaskCustom}
        />
      </FormControl>
    </div>
  );
}

Step1.defaultProps = {
  header: ""
};

Step1.propTypes = {
  currentStep: PropTypes.number.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone_number: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  header: PropTypes.string
};

export default Step1;
