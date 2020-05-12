/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import IconCard from "./IconCard";
// import Steps from "./Steps";
// import ExPanel from "./ExPanel";
import useStyles from "./style";

const Customer = ({
  headerOneOne,
  headerOneTwo,
  rowOneText,
  rowOneCard,
  headerTwo,
  rowTwoCardText,
  rowTwoIconOne,
  rowTwoIconTwo,
  rowTwoIconThree
}) => {
  const classes = useStyles();

  return (
    <>
      <section>
        <Container maxWidth="xl">
          <Grid container maxWidth="xl" className={classes.topRow}>
            <Grid item md={6}>
              <Typography
                color="primary"
                variant="h1"
                className={classes.header}
              >
                {headerOneOne}
                <br />
                <span className={classes.headerSpan}>{headerOneTwo}</span>
              </Typography>
              <Link href="/app">
                <Fab
                  variant="extended"
                  aria-label="start"
                  color="secondary"
                  className={classes.button}
                >
                  Apply Now
                </Fab>
              </Link>
            </Grid>

            <Grid item md={6}>
              <Fade right distance="100px" duration={1200} ssrFadeout>
                <img
                  alt="Paypossible cards"
                  title="Paypossible cards"
                  src={rowOneCard}
                  className={classes.rowOneCard}
                />
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className={classes.rowTwo}>
        <Container maxWidth="lg">
          <Typography
            color="primary"
            align="center"
            variant="h2"
            className={classes.header}
          >
            {headerTwo}
          </Typography>
          <Grid spacing={6} container className={classes.cardContainer}>
            <Grid item md={4} xs={12}>
              <Fade up distance="100px" duration={1200} ssrFadeout>
                <IconCard icon={rowTwoIconOne} text={rowTwoCardText[0]} />
              </Fade>
            </Grid>
            <Grid item md={4} xs={12} className={classes.midGrid}>
              <Fade up distance="100px" duration={1600} ssrFadeout>
                <IconCard icon={rowTwoIconTwo} text={rowTwoCardText[1]} />
              </Fade>
            </Grid>
            <Grid item md={4} xs={12}>
              <Fade up distance="100px" duration={2000} ssrFadeout>
                <IconCard icon={rowTwoIconThree} text={rowTwoCardText[2]} />
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

Customer.propTypes = {
  headerOneOne: PropTypes.string.isRequired,
  headerOneTwo: PropTypes.string.isRequired,
  rowOneText: PropTypes.string.isRequired,
  rowOneCard: PropTypes.string.isRequired,
  headerTwo: PropTypes.string.isRequired,
  rowTwoCardText: PropTypes.array.isRequired,
  rowTwoIconOne: PropTypes.string.isRequired,
  rowTwoIconTwo: PropTypes.string.isRequired,
  rowTwoIconThree: PropTypes.string.isRequired
};

export default Customer;
