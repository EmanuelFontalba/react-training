import React from 'react';
import Product from './Product';

class ProductList extends React.Component{
  render(){
    const productsOrder = this.props.dataProducts.sort((a, b) =>
      b.votes - a.votes
    );
    const productsComponents = productsOrder.map((data) => (
      <Product
        key={'product-' + data.id}
        id={data.id}
        title={data.title}
        description={data.description}
        url={data.url}
        votes={data.votes}
        submitterAvatarUrl={data.submitterAvatarUrl}
        productImageUrl={data.productImageUrl}
      />
    ));
    return (
      <div className="ui ustackable items">
        <p>Hola! Soy un componente básico de React.</p>
        {productsComponents}
      </div>
    );
  }
}

export default ProductList;
