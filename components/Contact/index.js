import { useState } from "react";
import PropTypes from "prop-types";
import MaskedInput from "react-text-mask";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import OutlinedInput from "@material-ui/core/OutlinedInput";

import useStyles from "./style";

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

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

const Contact = ({ header, content, errorMessage, successMessage }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    website: "",
    message: ""
  });
  const [formSubmitSuccess, setFormSubmitSuccess] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const result = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "paypossible-contact-form",
        ...values
      })
    });
    if (result.status === 200) {
      setFormSubmitSuccess(true);
      setValues({
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        website: "",
        message: ""
      });
    } else setFormSubmitSuccess(false);
  };

  return (
    <Container className={classes.root}>
      <Typography variant="h1" align="center" className={classes.headerText}>
        {header}
      </Typography>
      <Typography variant="body1" className={classes.text}>
        {content}
      </Typography>

      <form onSubmit={handleSubmit} className={classes.form}>
        <Grid container spacing={1}>
          <Grid item md={6} xs={12}>
            <TextField
              id="first_name"
              name="first_name"
              type="text"
              variant="outlined"
              fullWidth
              label="First Name"
              value={values.first_name}
              onChange={handleChange}
              className={classes.field}
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
              value={values.last_name}
              onChange={handleChange}
              className={classes.field}
            />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item md={6} xs={12}>
            <FormControl fullWidth className={classes.field}>
              <InputLabel htmlFor="phone_number" className={classes.input}>
                Phone Number
              </InputLabel>
              <OutlinedInput
                name="phone_number"
                value={values.phone_number}
                onChange={handleChange}
                id="phone_number"
                inputComponent={TextMaskCustom}
              />
            </FormControl>
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              id="email"
              name="email"
              type="text"
              variant="outlined"
              fullWidth
              label="Email"
              value={values.email}
              onChange={handleChange}
              className={classes.field}
            />
          </Grid>
        </Grid>
        <TextField
          id="website"
          name="website"
          type="text"
          variant="outlined"
          fullWidth
          label="Website URL (if applicable)"
          value={values.website}
          onChange={handleChange}
          className={classes.field}
        />
        <TextField
          id="standard-multiline-static"
          name="message"
          label="Your question or message"
          type="text"
          multiline
          rows="4"
          variant="outlined"
          fullWidth
          value={values.message}
          onChange={handleChange}
          className={classes.field}
        />
        {formSubmitSuccess === false && (
          <Typography
            variant="caption"
            color="error"
            align="center"
            display="block"
            style={{ marginBottom: 30 }}
          >
            {errorMessage}
          </Typography>
        )}
        {formSubmitSuccess === true && (
          <Typography
            color="secondary"
            variant="caption"
            align="center"
            display="block"
            style={{ marginBottom: 30 }}
          >
            {successMessage}
          </Typography>
        )}
        <div className={classes.buttonRow}>
          <Fab
            variant="extended"
            aria-label="Submit"
            type="submit"
            color="secondary"
            className={classes.button}
          >
            Submit
          </Fab>
        </div>
      </form>
      <style global jsx>
        {`
          #standard-multiline-static {
            padding: 10px;
          }
        `}
      </style>
    </Container>
  );
};

Contact.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  successMessage: PropTypes.string.isRequired
};

export default Contact;
