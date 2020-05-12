import Head from "next/head";
import { Analytics, Footer, Customer, Navbar } from "../components";

const Consumer = () => (
  <>
    <Head>
      <title>For Customers | PayPossible</title>
    </Head>
    <Analytics page="customer">
      <Navbar scroll />
      <Customer
        headerOneOne="More ways to buy now"
        headerOneTwo="Smarter way to pay later"
        rowOneText="If you have ever been shopping, you know &quot;one size doesn't fit all.&quot; It's the same with credit. PayPossible gives you access to a network of lenders to empower as many customers as possible with purchasing power."
        headerTwo="A smarter way to pay over time"
        rowTwoCardText={[
          {
            body: "Simple application",
            title: "One"
          },
          {
            body: "Your financing option",
            title: "Select"
          },
          {
            body: "Your purchase",
            title: "Complete"
          }
        ]}
      />
      <Footer />
    </Analytics>
  </>
);

export default Consumer;
