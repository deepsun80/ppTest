import { useEffect } from "react";
import PropTypes from "prop-types";
import ReactGA from "react-ga";

const Analytics = ({ children, page }) => {
  useEffect(() => {
    ReactGA.initialize("UA-131525007-1");
    ReactGA.pageview(`/${page}`);
  }, []);

  return <section>{children}</section>;
};

Analytics.propTypes = {
  page: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};

export default Analytics;
