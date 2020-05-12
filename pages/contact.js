import Head from "next/head";
import { Analytics, Footer, Contact, Navbar } from "../components";

const ContactPage = () => (
  <>
    <Head>
      <title>Contact Us | PayPossible</title>
    </Head>
    <Analytics page="contact">
      <Navbar />
      <Contact
        header="Contact Us"
        content="Have questions? Please fill out the form below or email to contact us directly. Our team will get back to you very shortly."
        errorMessage="There was an error submitting your message. Please try again."
        successMessage="Thank you for contacing us. A PayPossible team member will be in touch within 24-48 hours."
      />
      <Footer />
    </Analytics>
  </>
);

export default ContactPage;
