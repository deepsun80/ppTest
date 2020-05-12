import { Fragment } from "react";
import Head from "next/head";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { Analytics, Footer, Navbar } from "../components";
import eConsent from "../utils/eConsent";

const EConsent = () => (
  <>
    <Head>
      <title>Electronic Consent | PayPossible</title>
    </Head>
    <Analytics page="econsent">
      <Navbar />
      <Container style={{ paddingTop: "150px" }}>
        <Typography
          variant="h1"
          style={{ fontSize: "1.6rem", color: "#465155", marginBottom: 30 }}
        >
          Consent for Electronic Signatures, Records, and Disclosures
          (&quot;E-Consent&quot;) &amp; Telephone Communications
        </Typography>
        {eConsent.list.map((item, key) => (
          <Fragment key={key}>
            <Typography
              variant="body1"
              style={{ color: "#465155", margin: "10px auto" }}
            >
              {item.title}
            </Typography>
            <Typography variant="body2" color="primary">
              {item.content}
            </Typography>
          </Fragment>
        ))}
      </Container>

      <Footer />
    </Analytics>
  </>
);

export default EConsent;
