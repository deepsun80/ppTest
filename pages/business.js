import Head from "next/head";
import { Analytics, Footer, Business, Navbar } from "../components";

const Merchant = () => (
  <>
    <Head>
      <title>For Business | Paypossible</title>
    </Head>
    <Analytics page="business">
      <Navbar scroll />
      <Business
        headerOneOne="Boost your sales"
        headerOneTwo="anytime, anywhere"
        headerOneThree="with financing options your customers will love."
        headerTwo="Regardless of your industry.."
        subHeaderTwo="We have a customizable solution to help your business grow."
        rowTwoCardText={[
          "Increase your sales",
          "Financing options for every credit type",
          "Increase the average ticket size"
        ]}
        headerThree="Here's how it works"
        rowThreeContent={[
          {
            title: "Simple application",
            content:
              "Your customer completes one simple application to check ALL of their financing options.",
            contentBold: " (Applying does NOT affect their credit score)"
          },
          {
            title: "Choose a financing option",
            content:
              "Customer selects the financing option that works best for lifestyle, with options ranging from 3-60 months."
          },
          {
            title: "Complete purchase",
            content:
              "In one seamless transaction, funds are deposited directly into your PayPossible Business account."
          }
        ]}
        headerFour="What PayPossible can do for your business"
      />
      <Footer />
    </Analytics>
  </>
);

export default Merchant;
