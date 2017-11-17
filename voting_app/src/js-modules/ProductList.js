import React from 'react';
import Product from './Product';

class ProductList extends React.Component{

  state = {
    dataProducts: [],
  };

  constructor(props){
    super(props);

    /*
    * A partir de ahora, con babel, los estados los podemos definir fuera
    * del constructor
    */
    /*this.state = {
      dataProducts: [],
    };*/

    //this.handleProductUpVote = this.handleProductUpVote.bind(this);
  }

  componentDidMount(){
    this.setState({dataProducts: this.props.dataProducts});
  }

  /*
  * IMPORTANTE
  * nuestro metodos siempre fuera del render
  */
  handleProductUpVote = (productId) => {
    console.log(productId + ' was upvoted.');
    const nextProducts = this.state.dataProducts.map((product) => {
      if(product.id === productId){
        //vamos creando nuevos objetos para no modificar los del estado
        return Object.assign({}, product, {
          votes: product.votes + 1,
        })
      }else{
        return product;
      }
    });

    this.setState({
      dataProducts: nextProducts,
    });

    /*
    * Esto nos lleva a error, ya que los estados son inmutables y aqui estamos
    * sobreescribiendo el valor del estado.
    */
    /*const products = this.state.dataProducts;

    products.forEach((product) => {
      if(product.id === productId){
        product.votes = product.votes + 1;
      }
    });

    this.setState({
      dataProducts: products,
    });*/
  }

  render(){
    const productsOrder = this.state.dataProducts.sort((a, b) =>
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
        onVote={this.handleProductUpVote}
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
