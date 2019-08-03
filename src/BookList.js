import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import Book from './Book';


class BookList extends React.Component {

createBook(item)
{ 
console.log("item is " +item);
  return  <Book volumeInfo={item.volumeInfo}/>
}

    render()
    {
        const books = this.props.books;
        console.log("books is " +this.props.books);
        return(
            
            <div className="App">
                {books.map(this.createBook)}
             
            </div>
          );
    }
}

export default BookList;