import PropTypes from "prop-types";
import { Component } from "react";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import Typography from "@material-ui/core/Typography";
import { Step1, Step2, Step3 } from "./forms";
import styles from "./style";

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

class PartnerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 0,
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      company_name: "",
      company_website: "",
      business_length_years: "",
      company_activity: "",
      number_business: "",
      primary_industries: [],
      formSubmitSuccess: null
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const {
      first_name,
      last_name,
      email,
      phone_number,
      company_name,
      company_website,
      company_type,
      business_length_years,
      company_activity,
      number_business,
      primary_industries
    } = this.state;

    const values = {
      first_name,
      last_name,
      phone_number,
      email,
      company_name,
      company_website,
      company_type,
      business_length_years,
      company_activity,
      number_business,
      primary_industries
    };
    const result = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "paypossible-partner-form",
        ...values
      })
    });
    if (result.status === 200) {
      this.setState({
        currentStep: 0,
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        company_name: "",
        company_website: "",
        business_length_years: "",
        company_activity: "",
        number_business: "",
        primary_industries: [],
        formSubmitSuccess: true
      });
    } else {
      this.setState({
        formSubmitSuccess: false
      });
    }
  };

  _next = () => {
    let { currentStep } = this.state;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep,
      formSubmitSuccess: null
    });
  };

  _prev = () => {
    let { currentStep } = this.state;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep,
      formSubmitSuccess: null
    });
  };

  startButton() {
    const { currentStep } = this.state;
    if (currentStep === 0) {
      return (
        <div
          style={{ width: "100%", margin: "10vh auto", textAlign: "center" }}
        >
          <Fab
            variant="extended"
            aria-label="Apply"
            color="secondary"
            data-test="desktopButton"
            onClick={this._next}
            style={(styles.button, { padding: "0 50px" })}
            id="partners-start-button"
          >
            Get Started
          </Fab>
        </div>
      );
    }
    return null;
  }

  previousButton() {
    const { currentStep } = this.state;
    if (currentStep > 0 && currentStep !== 1) {
      return (
        <Fab
          variant="extended"
          aria-label="Apply"
          color="secondary"
          data-test="desktopButton"
          onClick={this._prev}
          className="backButton"
          id="partners-start-button"
        >
          Previous
        </Fab>
      );
    }
    return null;
  }

  nextButton() {
    const { currentStep } = this.state;
    if (currentStep > 0 && currentStep < 3) {
      return (
        <Fab
          variant="extended"
          aria-label="Apply"
          color="secondary"
          data-test="desktopButton"
          onClick={this._next}
          style={styles.button}
          id="partners-next-button"
        >
          Next
        </Fab>
      );
    }
    return null;
  }

  submitButton() {
    const { currentStep } = this.state;
    if (currentStep === 3) {
      return (
        <Fab
          variant="extended"
          aria-label="Apply"
          color="secondary"
          data-test="desktopButton"
          type="submit"
          id="partners-submit-button"
        >
          Submit
        </Fab>
      );
    }
    return null;
  }

  render() {
    const {
      currentStep,
      first_name,
      last_name,
      email,
      phone_number,
      company_name,
      company_website,
      business_length_years,
      company_activity,
      number_business,
      primary_industries,
      formSubmitSuccess
    } = this.state;

    const {
      header,
      contentOne,
      contentTwo,
      list,
      form1Header,
      form2Header,
      form3Header,
      successMessage,
      errorMessage
    } = this.props;

    return (
      <Container style={styles.root}>
        <Typography variant="h1" align="center" style={styles.headerText}>
          {header}
        </Typography>
        <Typography variant="body1" style={styles.text}>
          {contentOne}
        </Typography>
        <Typography variant="body1" style={styles.text}>
          {contentTwo}
        </Typography>

        <form onSubmit={this.handleSubmit} style={styles.form}>
          <Step1
            header={form1Header}
            currentStep={currentStep}
            handleChange={this.handleChange}
            first_name={first_name}
            last_name={last_name}
            email={email}
            phone_number={phone_number}
          />
          <Step2
            header={form2Header}
            currentStep={currentStep}
            handleChange={this.handleChange}
            company_name={company_name}
            company_website={company_website}
            business_length_years={business_length_years}
            company_activity={company_activity}
          />
          <Step3
            header={form3Header}
            currentStep={currentStep}
            handleChange={this.handleChange}
            number_business={number_business}
            primary_industries={primary_industries}
            businesses={list.businesses}
          />

          {formSubmitSuccess === false && (
            <Typography
              variant="caption"
              color="error"
              align="center"
              display="block"
              style={{ margin: "30px auto" }}
            >
              {errorMessage}{" "}
              <a href="/contact" style={styles.link}>
                contact page.
              </a>
            </Typography>
          )}
          {formSubmitSuccess === true && (
            <Typography
              variant="caption"
              color="secondary"
              align="center"
              display="block"
              style={{ margin: "30px auto" }}
            >
              {successMessage}
            </Typography>
          )}

          <div style={styles.buttonRow}>
            {this.startButton()}
            {this.previousButton()}
            {this.nextButton()}
            {this.submitButton()}
          </div>
        </form>
        <style global jsx>
          {`
            .backButton {
              text-transform: uppercase;
              background-color: transparent;
              padding: 0 25px;
              outline: none;
              color: #06d438;
              border: 2px solid #06d438;
              transition: all 0.3s;
              min-width: 142px;
              border-radius: 30px;
              font-size: 0.875rem;
              box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
              cursor: pointer;
            }

            .backButton:hover {
              color: #fff;
              background-color: #06d438;
            }

            .MuiSelect-select:focus {
              background-color: #fafafa;
            }

            .MuiInputBase-input {
              border-radius: 30px;
            }

            #standard-multiline-static {
              padding: 10px;
            }

            @media screen and (max-width: 823px) {
              .longFormLabel,
              .selectForm .MuiInputLabel-outlined {
                font-size: 0.6rem;
              }
            }
          `}
        </style>
      </Container>
    );
  }
}

PartnerForm.propTypes = {
  header: PropTypes.string.isRequired,
  contentOne: PropTypes.string.isRequired,
  contentTwo: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  form1Header: PropTypes.string.isRequired,
  form2Header: PropTypes.string.isRequired,
  form3Header: PropTypes.string.isRequired,
  successMessage: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired
};

export default PartnerForm;
