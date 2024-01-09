import React from "react";
import Offers from "../component/offers.js";
import Country from "../component/country.js";
import Banner from "../component/banner.js";
import WrokingProcess from "../component/workingprocess.js";
import WhyTracelo from "../component/whytracelo.js";
import FAQ from "../component/faq.js";
import Footer from "../component/footer.js";
import Padding from "../component/padding.js";
import Navbar from "../component/header.js";
import { useState } from "react";

const Home = () => {
  const [selected, setSelected] = useState("");

  return (
    <div>
      <Banner />
      <Navbar selected={selected} setSelected={setSelected} />
      <Country />
      <Offers />
      <WrokingProcess />
      <WhyTracelo />
      <FAQ />
      <Footer />
      <Padding />
    </div>
  );
};

export default Home;
