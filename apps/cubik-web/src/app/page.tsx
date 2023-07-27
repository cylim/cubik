import type { NextPage } from "next";
import LandingPage from "@/app/components/landing-page/landingPage";
import SEO from "@/app/components/SEO";

const Home: NextPage = () => {
  return (
    <>
      {/* <SEO
        title={`Cubik`}
        description={`Fund Public Goods Through Community Voting On Solana `}
        image={`https://res.cloudinary.com/demonicirfan/image/upload/v1684179451/cubik%20og.png`}
      /> */}
      <LandingPage />
    </>
  );
};

export default Home;
