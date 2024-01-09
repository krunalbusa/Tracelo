import React from "react";
import Country from "../component/country.js";
import Banner from "../component/banner.js";
import WrokingProcess from "../component/workingprocess.js";
import WhyTracelo from "../component/whytracelo.js";
import FAQ from "../component/faq.js";
import Footer from "../component/footer.js";
import Padding from "../component/padding.js";
import AfterloginNavbar from "../component/afterloginheader.js";
import Aftersubscribe from "../component/aftersubscribe.js";


import { useState } from "react";


const Afterlogin = () => {
  const [selected, setSelected] = useState("");
    
  return (
    <div>
      <AfterloginNavbar selected={selected} setSelected={setSelected} />
      <Banner />
      <Country />
      <Aftersubscribe />
      <WrokingProcess />
      <WhyTracelo />
      <FAQ />
      <Footer />
      <Padding />
    </div>
  );
};

export default Afterlogin;
