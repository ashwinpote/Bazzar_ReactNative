import React from "react";
import { Component } from "react";

export default class DashboardBase extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
        this.handleClick = this.handleClick.bind(this);
      }

      componentDidMount () {
        var self = this;
        var data = [{
          "itemname": "Nokia 6",
          "category": "Mobile",
          "price": "₹ 10000"
          },
          {
              "itemname": "Logitech Wireless Mouse",
              "category": "Computer Accessories",
              "price": "₹ 500"
          },
          {
              "itemname": "Honda Activa",
              "category": "Bike",
              "price": "₹ 40000"
          }
          ];
          self.setState({ list: data });
      };

      handleClick() {
        this.setState({list: [...this.state.list, {"itemname":"Table","category":"Furniture", "price":"₹ 5000"}]});
      }
}