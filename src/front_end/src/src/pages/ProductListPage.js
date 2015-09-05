import React, { PropTypes } from "react";
import { connectToStores } from "fluxible-addons-react";

//import Thumbnail from "../components/Thumbnail";

if (process.env.BROWSER) {
  //require("../style/ThumbnailCollection.scss");
}

@connectToStores(["ProductStore"], (context) => {
  const products = context.getStore("ProductStore").getProducts();
  return {
    products: products
  };
})
class ProductListPage extends React.Component {

  static propTypes = {
    products: PropTypes.array.isRequired
  }

  render() {
    const { products } = this.props;
    return (
      <div>
        <ul>
          {
            products.map(prod =>
              <li>{prod.name}</li>
            )
          }
        </ul>
      </div>
    );
  }

}

export default ProductListPage;
