import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import TestimonialCard from "./TestimonialCard";
import useStyles from "./style";

const Home = ({
  headerOne,
  subheaderOne,
  textOneParagraphOne,
  textOneParagraphTwo,
  headerTwo,
  subheaderTwo,
  textTwoParagraphOne,
  textTwoParagraphTwo,
  headerThree,
  subheaderThree,
  textThree,
  cardOneHeader,
  cardOneText,
  cardTwoText,
  testimonialsHeader,
  testimonialsHeaderSpan,
  testimonialsSubheader,
  testimonials
}) => {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="xl">
        <section>
          <Grid container className={classes.topRow}>
            <Grid item md={6}>
              <Typography
                color="primary"
                variant="h1"
                className={classes.header}
              >
                {headerOne}
              </Typography>
              <Typography variant="body1" className={classes.subHeader}>
                {subheaderOne}
              </Typography>
              <Typography variant="body1" className={classes.text}>
                {textOneParagraphOne}
                <br />
                <span style={{ fontWeight: 600 }}>{textOneParagraphTwo}</span>
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

            <Grid item md={6}>
              <Fade right distance="100px" duration={1200} ssrFadeout>
                <img
                  alt="Paypossible cards"
                  title="Paypossible cards"
                  src="/homeCardOne.png"
                  className={classes.homeCardOne}
                />
              </Fade>
            </Grid>
          </Grid>
        </section>
        <section>
          <Grid container className={classes.gridContainter}>
            <Grid item md={6}>
              <Fade left distance="100px" duration={1600} ssrFadeout>
                <img
                  alt="Paypossible card"
                  title="Paypossible card"
                  src="/homeCardTwo.png"
                  className={classes.homeCardTwo}
                />
              </Fade>
            </Grid>

            <Grid item md={6}>
              <Typography
                color="primary"
                variant="h2"
                className={classes.header}
              >
                {headerTwo}
              </Typography>
              <Typography variant="body1" className={classes.subHeader}>
                {subheaderTwo}
              </Typography>
              <Typography variant="body1" className={classes.text}>
                {textTwoParagraphOne}
                <br />
                {textTwoParagraphTwo}
              </Typography>
            </Grid>
          </Grid>
        </section>
      </Container>

      <section
        style={{
          background: `linear-gradient(rgba(58, 58, 58, 0.95), rgba(58, 58, 58, 0.85)), url(/homeBg.jpg) bottom left/ cover no-repeat`,
          minHeight: "30vh",
          width: "100%",
          padding: "50px 0"
        }}
      >
        <Container>
          <Typography variant="h2" className={classes.whiteHeader}>
            {headerThree}
          </Typography>
          <Typography variant="body1" className={classes.subHeader}>
            {subheaderThree}
          </Typography>
          <Typography variant="body1" className={classes.whiteText}>
            {textThree}
          </Typography>

          <Grid spacing={1} container className={classes.cardsGrid}>
            <Grid item md={6} xs={12}>
              <Fade up distance="100px" duration={1200} ssrFadeout>
                <Card className={classes.rowThreeCard}>
                  <CardContent>
                    <Typography
                      variant="body1"
                      color="primary"
                      className={classes.cardHeader}
                    >
                      {cardOneHeader}
                    </Typography>
                    {cardOneText.map((line, index) => (
                      <ul key={index} className={classes.cardList}>
                        <li style={{ display: "flex" }}>
                          <CancelIcon color="error" />
                          <Typography
                            variant="body2"
                            color="primary"
                            style={{ marginLeft: 10, lineHeight: "1.5rem" }}
                          >
                            {line}
                          </Typography>
                        </li>
                      </ul>
                    ))}
                  </CardContent>
                </Card>
              </Fade>
            </Grid>

            <Grid item md={6} xs={12}>
              <Fade up distance="100px" duration={1600} ssrFadeout>
                <Card className={classes.rowThreeCard}>
                  <CardContent>
                    <img
                      alt="Paypossible Logo"
                      title="Paypossible Logo"
                      src="/payPossibleLogo.png"
                      className={classes.cardLogo}
                    />
                    {cardTwoText.map((line, index) => (
                      <ul key={index} className={classes.cardList}>
                        <li style={{ display: "flex" }}>
                          <CheckCircleIcon color="secondary" />
                          <Typography
                            variant="body2"
                            color="primary"
                            style={{ marginLeft: 10, lineHeight: "1.5rem" }}
                          >
                            {line}
                          </Typography>
                        </li>
                      </ul>
                    ))}
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </section>
      <section>
        <Container className={classes.testimonialRow}>
          <Typography
            color="primary"
            variant="h2"
            align="center"
            className={classes.header}
          >
            {testimonialsHeader}{" "}
            <span className={classes.subHeader}>{testimonialsHeaderSpan}</span>
          </Typography>
          <Typography variant="body1" align="center" className={classes.text}>
            {testimonialsSubheader}
          </Typography>
          <Grid spacing={2} container className={classes.testimonialContainer}>
            <Grid item md={4} xs={12}>
              <Fade up distance="100px" duration={1200} ssrFadeout>
                <TestimonialCard
                  image="/client1.jpg"
                  text={testimonials[0].text}
                  author={testimonials[0].author}
                />
              </Fade>
            </Grid>
            <Grid item md={4} xs={12} className={classes.midGrid}>
              <Fade up distance="100px" duration={1600} ssrFadeout>
                <TestimonialCard
                  image="/client2.jpg"
                  text={testimonials[1].text}
                  author={testimonials[1].author}
                />
              </Fade>
            </Grid>
            <Grid item md={4} xs={12}>
              <Fade up distance="100px" duration={2000} ssrFadeout>
                <TestimonialCard
                  image="/client3.jpg"
                  text={testimonials[2].text}
                  author={testimonials[2].author}
                />
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

Home.propTypes = {
  headerOne: PropTypes.string.isRequired,
  subheaderOne: PropTypes.string.isRequired,
  textOneParagraphOne: PropTypes.string.isRequired,
  textOneParagraphTwo: PropTypes.string.isRequired,
  headerTwo: PropTypes.string.isRequired,
  subheaderTwo: PropTypes.string.isRequired,
  textTwoParagraphOne: PropTypes.string.isRequired,
  textTwoParagraphTwo: PropTypes.string.isRequired,
  headerThree: PropTypes.string.isRequired,
  subheaderThree: PropTypes.string.isRequired,
  textThree: PropTypes.string.isRequired,
  cardOneHeader: PropTypes.string.isRequired,
  cardOneText: PropTypes.array.isRequired,
  cardTwoText: PropTypes.array.isRequired,
  testimonialsHeader: PropTypes.string.isRequired,
  testimonialsHeaderSpan: PropTypes.string.isRequired,
  testimonialsSubheader: PropTypes.string.isRequired,
  testimonials: PropTypes.array.isRequired
};

export default Home;
