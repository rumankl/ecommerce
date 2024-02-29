import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import ImageA from "./components/ImageA";
import ShopItem from "./components/ShopItem";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <Routes>
            <Route exact path="/" element={<ImageA />}></Route>
            <Route exact path="Shop" element={<ShopItem />}></Route>

            {/* <Route exact path="Contact" element={<Contact />}></Route>*/}
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
}
