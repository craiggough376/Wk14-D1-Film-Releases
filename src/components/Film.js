import React, {Component} from 'react';

class Film extends Component {

  render(){
    return(
      <div className="film">
        <p>{ this.props.name }</p>
        <a href="{ this.props.url }">IMDB Link</a>
      </div>
    )
  }
}

export default Film;
