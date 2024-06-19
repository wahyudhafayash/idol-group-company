"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Hero from "../HomepageSection/hero";
import About from "../HomepageSection/about";
import Merch from "../HomepageSection/merch";
import Testimoni from "../HomepageSection/testimoni";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <main>
      {/* Hero Section */}
      <Hero />
      {/* Company Overview */}
      <About />
      {/* Products or services */}
      <Merch />
      {/* Testimonials */}
      <Testimoni />
    </main>
  );
};

export default Home;
