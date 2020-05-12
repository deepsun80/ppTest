import Head from "next/head";
import { Analytics, Footer, Partners, Navbar } from "../components";

const PartnerPage = () => (
  <>
    <Head>
      <title>Partners | PayPossible</title>
    </Head>
    <Analytics page="partners">
      <Navbar />
      <Partners
        header="Referral Partner Application"
        subHeader="Referral Partners"
        contentOne="Are you a broker, sales organization, or professional services firm who wants to offer PayPossible’s POS financing platform to your customer base of small business owners?"
        contentTwo="PayPossible offers flexible integration, sales and marketing solutions that allow partners to leverage our platform to help their customers grow."
        list={{
          businesses: [
            "Home Improvement",
            "Medical",
            "Auto Sales (New/Used)",
            "Auto Service",
            "Consumer Goods",
            "Professional Services",
            "Vocational/Training Programs",
            "Jewelry",
            "Tax Resolution",
            "Legal Services",
            "Travel",
            "Funeral",
            "Other"
          ]
        }}
        form1Header="Contact Information"
        form2Header="Company Details"
        form3Header="Additional Company Info"
        successMessage="Thank you for signing up! Your application is now in review. 
        A PayPossible team member will be in touch within 24-48 hours with the next steps."
        errorMessage="There was an error submitting your message. Please try again or contact us using the"
      />
      <Footer />
    </Analytics>
  </>
);

export default PartnerPage;
