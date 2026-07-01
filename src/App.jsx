import React from "react";
import Navbar from "./sections/navbar/nav";
import Hero from "./sections/hero/hero";
import Services from "./sections/services/services";
import Cases from "./sections/cases/cases";
import Features from "./sections/features/features";
import Testimonials from "./sections/testinomials/testinomial";
import Concepts from "./sections/concepts/concepts";
import Future from "./sections/future/future";
import ContactForm from "./sections/form/forms";
import InfoSection from "./sections/information/information";
import Footer from "./sections/footer/footer";
import "./index.css"
function App() {
  return (
    <>
    <Navbar />
    <Hero/>
    <Services/>
    <Cases/>
    <Features/>
    <Testimonials/>
    <Concepts/>
    <Future/>
    <ContactForm/>
    <InfoSection/>
    <Footer/>
  </>
  );
}

export default App;
