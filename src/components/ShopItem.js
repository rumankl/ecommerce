import React, { Component } from "react";
import Card from "./Card";
export class ShopItem extends Component {
  Item = [
    {
      id: "1",
      imageUrl:
        "https://www.99acres.com/microsite/wp-content/blogs.dir/6161/files/2023/09/Garden-wall-lamp-2.jpg",
      Product: "light",
      BrandName: "Avatar",
      price: "$4",
    },
    {
      id: "2",
      imageUrl:
        "https://www.99acres.com/microsite/wp-content/blogs.dir/6161/files/2023/09/Garden-wall-lamp-2.jpg",
      Product: "light",
      BrandName: "Avatar",
      price: "$4",
    },
    {
      id: "3",
      imageUrl:
        "https://www.99acres.com/microsite/wp-content/blogs.dir/6161/files/2023/09/Garden-wall-lamp-2.jpg",
      Product: "light",
      BrandName: "Avatar",
      price: "$4",
    },
    {
      id: "4",
      imageUrl:
        "https://www.99acres.com/microsite/wp-content/blogs.dir/6161/files/2023/09/Garden-wall-lamp-2.jpg",
      Product: "light",
      BrandName: "Avatar",
      price: "$4",
    },
    {
      id: "5",
      imageUrl:
        "https://www.99acres.com/microsite/wp-content/blogs.dir/6161/files/2023/09/Garden-wall-lamp-2.jpg",
      Product: "light",
      BrandName: "Avatar",
      price: "$4",
    },
    {
      id: "6",
      imageUrl:
        "https://www.99acres.com/microsite/wp-content/blogs.dir/6161/files/2023/09/Garden-wall-lamp-2.jpg",
      Product: "light",
      BrandName: "Avatar",
      price: "$4",
    },
    {
      id: "6",
      imageUrl:
        "https://www.99acres.com/microsite/wp-content/blogs.dir/6161/files/2023/09/Garden-wall-lamp-2.jpg",
      Product: "light",
      BrandName: "Avatar",
      price: "$4",
    },
    {
      id: "6",
      imageUrl:
        "https://www.99acres.com/microsite/wp-content/blogs.dir/6161/files/2023/09/Garden-wall-lamp-2.jpg",
      Product: "light",
      BrandName: "Avatar",
      price: "$4",
    },
    {
      id: "6",
      imageUrl:
        "https://www.99acres.com/microsite/wp-content/blogs.dir/6161/files/2023/09/Garden-wall-lamp-2.jpg",
      Product: "light",
      BrandName: "Avatar",
      price: "$4",
    },
  ];
  constructor(props) {
    super(props);
    this.state = { Item: this.Item, loading: false };
  }
  render() {
    return (
      <div>
        <h2>Trace- online shop</h2>
        <div className="row">
          {this.state.Item.map((element) => {
            return (
              <div className="col-md-4 " key={element.imageUrl}>
                <Card
                  id={element.id}
                  imageUrl={element.imageUrl}
                  Product={element.Product}
                  BrandName={element.BrandName}
                  Price={element.price}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ShopItem;
