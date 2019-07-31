import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Search from './Search';

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
    <Search  setTerm ={term => this.setTerm(term)} setprintType ={printtype => this.setprintType(printtype)}  setbookType ={booktype => this.setbookType(booktype)} setbooks ={books => this.setBooks(books)} />
    
    /* this.state.showAddForm
          ? <AddBookmark 
                 showForm={show => this.setShowAddForm(show)} 
                 handleAdd={bookmark => this.addBookmark(bookmark)}/>
          : <BookmarkApp bookmarks={this.state.bookmarks} showForm={show => this.setShowAddForm(show)}/>; */

    return (
      <div className="App">
        { page }
      </div>
    );
  }
}

export default App;

