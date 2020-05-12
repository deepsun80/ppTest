import Head from "next/head";
import { Analytics, Footer, About, Navbar } from "../components";

const AboutPage = () => (
  <>
    <Head>
      <title>About | PayPossible</title>
    </Head>
    <Analytics page="about">
      <Navbar scroll />
      <About content="PayPossible was built to give ANY small to medium-sized business the ability to offer their customers financing options at the point-of-sale. Our multi-lender financing platform covers the entire spectrum of credit, providing all customers with the ability to quickly check and find all of their available financing options to complete their purchase. Our mission is to give all business owners the tools and advice they need to build and grow their businesses - businesses that create more jobs, grow the economy, and keep alive the thriving, vibrant local communities we all call home." />
      <Footer />
    </Analytics>
  </>
);

export default AboutPage;
