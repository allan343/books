import React from 'react';
//import logo from './logo.svg';
//import './App.css';

class Book extends React.Component {

    constructor(props) {
        super(props);
       
      }


    render()
    {
        return(
            <div className="App">
                {this.props.volumeInfo.title}{this.props.volumeInfo.authors?this.props.volumeInfo.authors[0]:""}
            </div>
          );
    }
}

export default Book;