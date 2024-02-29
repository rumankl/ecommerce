import React, { Component } from "react";

export default class Card extends Component {
  render() {
    let { imageUrl, Product, BrandName, Price } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span
            className="position-absolute top-0  translate-middle badge rounded-pill bg-danger"
            style={{ zIndex: "1", left: "90%" }}
          ></span>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span className="badge bg-secondary">New</span>
          </div>
          <img
            src={
              !imageUrl
                ? "https://www.hindustantimes.com/ht-img/img/2024/01/15/1600x900/Arun_Yogiraj_1705317943399_1705317943661.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{Product}</h5>
            <p className="card-text">{BrandName}</p>
            <p className="card-text">{Price}</p>
            <div className="card-footer"></div>
            {/* <a href={newsUrl} target="blank" className="btn btn-sm btn-primary">
              Read More
            </a>*/}
          </div>
        </div>
      </div>
    );
  }
}
