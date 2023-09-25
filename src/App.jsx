import React from "react";
import styles from "./style";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { Contact } from "./components/Contact";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="flex flex-col  justify-between  bg-gray-100 min-w-full  ">
      <div className={`${styles.paddingX} ${styles.flexCenter} bg-white`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* <Hero />
      <Contact /> */}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
