import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import IconCard from "./IconCard";
import Steps from "./Steps";
import ExPanel from "./ExPanel";
import useStyles from "./style";

const Business = ({
  headerOneOne,
  headerOneTwo,
  headerOneThree,
  headerTwo,
  subHeaderTwo,
  rowTwoCardText,
  headerThree,
  rowThreeContent,
  headerFour
}) => {
  const classes = useStyles();

  return (
    <>
      <section>
        <Container maxWidth="xl">
          <Grid container maxWidth="xl" className={classes.topRow}>
            <Grid item md={6} xs={12}>
              <Typography
                color="primary"
                variant="h1"
                className={classes.header}
              >
                {headerOneOne}
                <br />
                <span className={classes.headerSpan}>{headerOneTwo}</span>
                <br />
                {headerOneThree}
              </Typography>
              <Link href="/business-signup">
                <Fab
                  variant="extended"
                  aria-label="start"
                  color="secondary"
                  className={classes.button}
                >
                  Sign Up
                </Fab>
              </Link>
            </Grid>

            <Grid item md={6} xs={12}>
              <Fade right distance="100px" duration={1200} ssrFadeout>
                <img
                  alt="Paypossible cards"
                  title="Paypossible cards"
                  src={null}
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
          <Typography variant="body1" align="center" className={classes.text}>
            {subHeaderTwo}
          </Typography>
          <Grid spacing={6} container className={classes.cardContainer}>
            <Grid item md={4} xs={12}>
              <Fade up distance="100px" duration={1200} ssrFadeout>
                <IconCard icon="/growthIcon.png" header={rowTwoCardText[0]} />
              </Fade>
            </Grid>
            <Grid item md={4} xs={12} className={classes.midGrid}>
              <Fade up distance="100px" duration={1600} ssrFadeout>
                <IconCard
                  icon="/clipboardIcon.png"
                  header={rowTwoCardText[1]}
                />
              </Fade>
            </Grid>
            <Grid item md={4} xs={12}>
              <Fade up distance="100px" duration={2000} ssrFadeout>
                <IconCard icon="/tagIcon.png" header={rowTwoCardText[2]} />
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section>
        <Container maxWidth="xl">
          <Typography
            color="primary"
            align="center"
            variant="h2"
            className={classes.header}
          >
            {headerThree}
          </Typography>
          <Grid container>
            <Grid item md={6} xs={12}>
              {rowThreeContent.map((step, index) => (
                <Steps index={index} step={step} />
              ))}
            </Grid>
            <Grid item md={6}>
              <Fade right distance="100px" duration={1200} ssrFadeout>
                <img
                  alt="Paypossible cards"
                  title="Paypossible cards"
                  src="/businessCard.png"
                  className={classes.rowThreeCard}
                />
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </section>

      <section className={classes.rowFour}>
        <Container maxWidth="lg">
          <Typography
            color="primary"
            align="center"
            variant="h3"
            className={classes.headerSmall}
          >
            {headerFour}
          </Typography>
          <ExPanel
            header="FAQ 1"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget."
          />
          <ExPanel
            header="FAQ 2"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget."
          />
          <ExPanel
            header="FAQ 3"
            body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget."
          />
        </Container>
      </section>
    </>
  );
};

Business.propTypes = {
  headerOneOne: PropTypes.string.isRequired,
  headerOneTwo: PropTypes.string.isRequired,
  headerOneThree: PropTypes.string.isRequired,
  headerTwo: PropTypes.string.isRequired,
  subHeaderTwo: PropTypes.string.isRequired,
  rowTwoCardText: PropTypes.array.isRequired,
  headerThree: PropTypes.string.isRequired,
  rowThreeContent: PropTypes.array.isRequired,
  headerFour: PropTypes.string.isRequired
};

export default Business;
