import React from 'react';

class Product extends React.Component{

  constructor(props){
    super(props);

    /*
    * IMPORTANTE que para cada uno de nuestros métodos, los tenemos que
    * vincular manualmente :)
    */
    //this.handleUpVote = this.handleUpVote.bind(this);
  }

  /*
  * Con esta nomenclatura, gracias a babel no hace falta vincular manualmente
  * el método en el constructor.
  */
  handleUpVote = () => {
    this.props.onVote(this.props.id);
  }

  render(){
    return(
      <div className="item">
        <div className="image">
          <img src={this.props.productImageUrl} />
        </div>
        <div className="middle aligned content" >
          <div className="header">
            <a onClick={this.handleUpVote}>
              <i className="fa fa-thumbs-up" aria-hidden="true"></i>
            </a>
            <p>Votes: {this.props.votes}</p>
          </div>
          <div className="description">
            <a>{this.props.title}</a>
            <p>{this.props.description}</p>
          </div>
          <div className="extra">
            <span>Submitted by:</span>
            <img className="ui avatar image" src={this.props.submitterAvatarUrl} />
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
