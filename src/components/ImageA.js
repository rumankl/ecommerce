import React, { Component } from "react";

export default class ImageA extends Component {
  render() {
    const mystyle = {
      backgroundImage:
        "url('https://woovina.com/images/2020/07/25/best-ecommerce-website-templates.jpg')",
      height: "100vh",
      marginTop: "-85px",
      fontSize: "50px",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    };

    return (
      <div style={mystyle}>
        <p
          style={{
            color: "yellow",
            paddingTop: "280px",
            fontFamily: "cursive",
            textAlign: "right",
            paddingRight: "347px",
            fontSize: "57px",
          }}
        >
          {" "}
          Hello BUyEr!
        </p>
        <p
          style={{
            textAlign: "right",
            paddingRight: "300px",
            fontSize: "30px",
            marginTop: "-40px",
            color: "white",
          }}
        >
          This is the online selling shop{" "}
        </p>
      </div>
    );
  }
}
