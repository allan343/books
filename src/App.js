import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Search from './Search';
import BookList from './BookList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      term: "",
      printtype: "",
      booktype: ""

    };
  }
 
  setBooks(books){
    this.setState({
      books
    });
  }

  setTerm(term) {
    this.setState({
      term
    });
  }

  setprintType(printtype) {
    this.setState({
      printtype
    });
  }

  setbookType(booktype) {
    this.setState({
      booktype
    });
  }



  render() {
    console.log(this.state.books);
    const page = 
    <Search term = {this.state.term} setTerm ={term => this.setTerm(term)} setprintType ={printtype => this.setprintType(printtype)}  setbookType ={booktype => this.setbookType(booktype)} setbooks ={books => this.setBooks(books)} />

    return (
      <div className="App">
        { page }
        <BookList books = {this.state.books} />
      </div>
    );
  }
}

export default App;

