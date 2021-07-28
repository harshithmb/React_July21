import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { getProducts, addProductToCart } from "../../redux/actions/action";
import Card from "../Card";

export class index extends Component {
  componentDidMount() {
    axios("https://5d76bf96515d1a0014085cf9.mockapi.io/product").then(
      ({ data }) => {
        this.props.getProducts(data);
      }
    );
  }

  addProduct = (item) => {
    this.props.addProductToCart(item);
  };
  render() {
    const { user, products = [] } = this.props;
    const { name = "", age = "", address = "" } = user;

    return (
      <div>
        Home - {name} {age} {address}{" "}
        <div className="d-flex flex-wrap">
          {products.length &&
            products.map((item) => (
              <Card item={item} addProduct={this.addProduct} />
            ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
  products: state.productsReducer.products,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: (payload) => dispatch(getProducts(payload)),
  addProductToCart: (payload) => dispatch(addProductToCart(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(index);
