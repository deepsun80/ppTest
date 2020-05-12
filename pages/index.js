import Head from "next/head";
import { Analytics, Navbar, Home, Footer } from "../components";

const Index = () => (
  <>
    <Head>
      <title>Making your next purchase possible | PayPossible</title>
    </Head>
    <Analytics page="home">
      <Navbar scroll />
      <Home
        headerOne="Consumer financing"
        subheaderOne="made delightfully easy"
        textOneParagraphOne="Start offering your customers financing for projects and purchases up to $50,000. PayPossible is the flexible, mobile-friendly way to boost your sales."
        textOneParagraphTwo="Not just for one type of customer but everyone!"
        headerTwo="A lender for"
        subheaderTwo="every customer"
        textTwoParagraphOne="If you've ever been shopping, you know that &quot;one size doesn't fit all&quot;. It's the same with credit."
        textTwoParagraphTwo="PayPossible gives you access to a network of lenders to empower as many customers as possible with purchasing power."
        headerThree="Seamless"
        subheaderThree="customer checkout"
        textThree="With our easy, one application process across all lending products, you will provide a best in-class customer experience that eliminates friction at checkout. More credit approvals, more happy customers at your fingertips."
        cardOneHeader="The Old Way"
        cardOneText={[
          "An application for every credit option",
          "Long and confusing process",
          "Restrictions on how to apply and use credit"
        ]}
        cardTwoText={[
          "One application for all credit options",
          "Short, concise process with few steps",
          "Multiple ways to apply and use credit"
        ]}
        testimonialsHeader="Grow"
        testimonialsHeaderSpan="with PayPossible"
        testimonialsSubheader="Our end-to-end platform and dedicated team of advisors saves you valuable time, money, and resources so you can do more with less."
        testimonials={[
          {
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            author: "Author One"
          },
          {
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            author: "Author Two"
          },
          {
            text:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            author: "Author Three"
          }
        ]}
      />
      <Footer />
    </Analytics>
  </>
);

export default Index;
