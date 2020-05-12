/* eslint-disable react/destructuring-assignment */
import Link from "next/link";
import MenuList from "@material-ui/core/MenuList";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import footerIndex from "../../utils/footerIndex";
import useStyles from "./style";

const Footer = () => {
  const classes = useStyles();

  const renderMenu = (link, key) => {
    if (link.external) {
      return (
        <div key={key}>
          <a
            href={link.path}
            className={classes.link}
            id="link"
            style={{ textDecoration: "none" }}
          >
            <Typography
              color="inherit"
              className={classes.footerLink}
              id="footerLink"
            >
              {link.name}
            </Typography>
          </a>
        </div>
      );
    }
    return (
      <div key={key}>
        <Link href={link.path}>
          <Typography
            color="inherit"
            className={classes.footerLink}
            id="footerLink"
          >
            {link.name}
          </Typography>
        </Link>
      </div>
    );
  };

  return (
    <footer className={classes.footer}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item md={3} xs={12}>
            <img
              alt="Paypossible Logo"
              title="Paypossible Logo"
              src="/payPossibleFooterLogo.png"
              className={classes.logo}
            />
          </Grid>
          <Grid item md={2} xs={12}>
            <MenuList>
              <label className={classes.footerMenuHeader}>
                {footerIndex.headers.header1}
              </label>
              <a href="/sign-in" className={classes.link}>
                <Typography
                  color="inherit"
                  className={classes.footerLink}
                  id="footerLink"
                >
                  Sign In
                </Typography>
              </a>
              {footerIndex.row1.map((link, col1Key) =>
                renderMenu(link, col1Key, "customerLinks")
              )}
              <a href="https://help.paypossible.com" className={classes.link}>
                <Typography
                  color="inherit"
                  className={classes.footerLink}
                  id="footerLink"
                >
                  FAQs
                </Typography>
              </a>
            </MenuList>
          </Grid>
          <Grid item md={2} xs={12}>
            <MenuList>
              <label className={classes.footerMenuHeader}>
                {footerIndex.headers.header2}
              </label>
              {footerIndex.row2.map((link, col2Key) =>
                renderMenu(link, col2Key, "merchantLinks")
              )}
              <a href="https://help.paypossible.com" className={classes.link}>
                <Typography
                  color="inherit"
                  className={classes.footerLink}
                  id="footerLink"
                >
                  FAQs
                </Typography>
              </a>
            </MenuList>
          </Grid>
          <Grid item md={2} xs={12}>
            <MenuList>
              <label className={classes.footerMenuHeader}>
                {footerIndex.headers.header3}
              </label>
              {footerIndex.row3.map((link, col3Key) =>
                renderMenu(link, col3Key, "links")
              )}
            </MenuList>
          </Grid>
          <Grid item md={3} xs={12} className={classes.socialCol}>
            <a
              href="https://www.facebook.com/paypossible"
              title="Paypossible Facebook"
              alt="Paypossible Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              <FacebookIcon color="primary" className={classes.icon} />
            </a>
            <a
              href="https://www.instagram.com/paypossible/"
              title="Paypossible Instagram"
              alt="Paypossible Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              <InstagramIcon color="primary" className={classes.icon} />
            </a>
            <a
              href="https://twitter.com/paypossible"
              title="Paypossible Twitter"
              alt="Paypossible Twitter"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.link}
            >
              <TwitterIcon color="primary" className={classes.icon} />
            </a>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
