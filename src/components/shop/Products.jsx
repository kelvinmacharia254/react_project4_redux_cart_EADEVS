import classes from "./Products.module.css"
import {testData} from "../../testData.js"
import ProductItem from "./ProductItem.jsx";
const Products = () => {

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {testData.map((product) => (
          <ProductItem
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;