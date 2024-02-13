import React from "react";
import Character from "./components/Character";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Favourites from "./components/Favourites";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Nav from "./components/Nav";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Nav />
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<Character />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="contact/:country" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;
