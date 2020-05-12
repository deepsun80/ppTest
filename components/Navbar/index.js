import PropTypes from "prop-types";
import classNames from "classnames";
import { useState, useEffect } from "react";
import Link from "next/link";
import AppBar from "@material-ui/core/AppBar";
import Fab from "@material-ui/core/Fab";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import headerIndex from "../../utils/headerIndex";
import useStyles from "./style";

const Navbar = ({ scroll }) => {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [navColor, setNavColor] = useState(scroll ? "transparent" : "#fff");
  const [menuColor, setMenuColor] = useState(!!scroll);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const headerColorChange = () => {
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > 200) {
      setNavColor("#fff");
      setMenuColor(false);
    } else {
      setNavColor("transparent");
      setMenuColor(true);
    }
  };

  useEffect(() => {
    if (scroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (scroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const renderMenu = (link, linkTitle, linkId, key) => (
    <div key={key}>
      <Link href={link}>
        <MenuItem
          title={`Paypossible ${link}`}
          alt={`Paypossible ${link}`}
          className={classNames(
            classes.navLink,
            menuColor
              ? classes.navLinkPrimaryColor
              : classes.navLinkSecondaryColor
          )}
          id={linkId}
        >
          {linkTitle}
        </MenuItem>
      </Link>
    </div>
  );

  const mobileMenuId = "menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {headerIndex.mobile.map((link, key) =>
        renderMenu(link.path, link.name, link.id, key, "nav-mobile-link")
      )}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        position="fixed"
        className={classNames(
          classes.appPadding,
          menuColor ? classes.appShadowNone : classes.appShadowInitial
        )}
        style={{ background: navColor }}
      >
        <Toolbar>
          <Link href="/">
            <img
              alt="Paypossible Logo"
              title="Paypossible Logo"
              src="/payPossibleLogo.png"
              className={classes.logo}
            />
          </Link>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {headerIndex.desktop.map((link, key) =>
              renderMenu(link.path, link.name, link.id, key, "nav-desktop-link")
            )}
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link href="/business-signup">
              <Fab
                variant="extended"
                aria-label="Apply"
                color="secondary"
                className={classes.navButton}
              >
                Sign up
              </Fab>
            </Link>
          </div>
          <div className={classes.sectionDesktop}>
            {renderMenu(
              "/sign-in",
              "Sign In",
              "signin",
              "sign-in-link",
              "nav-desktop-link"
            )}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="Show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="primary"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
};

Navbar.propTypes = {
  scroll: PropTypes.bool.isRequired
};

export default Navbar;
