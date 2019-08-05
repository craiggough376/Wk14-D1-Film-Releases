import React, {Component} from 'react';
import Film from './Film'

class FilmList extends Component {

  render(){

    const filmNodes = this.props.data.map(film => {
      return (
        <Film name={ film.name } url={ film.url }/>
      )
    })

    return(
      <>
      { filmNodes }
      </>
    )
  }
}
export default FilmList;
