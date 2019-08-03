import React, { Component } from  'react';
//import './addBookmark.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      /*
      title: "",
      url: "",
      description: "",
      rating: 1*/
    };
  }
  handleSubmit(e) {
    e.preventDefault();

    //https://www.googleapis.com/books/v1/volumes?q=time&printType=magazines&key=AIzaSyChQCwLNv3ZWkHi8OG5_UUszmgr9iguzHw`
    //https://www.googleapis.com/books/v1/volumes?q=${this.props.term}=free-ebooks&key=AIzaSyChQCwLNv3ZWkHi8OG5_UUszmgr9iguzHw

    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.props.term}&printType=${this.props.printtype}&key=AIzaSyChQCwLNv3ZWkHi8OG5_UUszmgr9iguzHw`;
    console.log("url is " + url);
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.props.term}&printType=${this.props.printtype}&key=AIzaSyChQCwLNv3ZWkHi8OG5_UUszmgr9iguzHw`, {
      method: 'GET',
      headers: {
        "Accept": "application/json",
      }
    }).then((res)=>res.json())
    .then((json)=>{
      console.log("json is "+json);
      this.props.setbooks(json.items);
    })
  }

  changeSelection(value) {
   
      this.props.setTerm(value);
    }

    changePrint(value) {
      console.log("printtype is" + value);
      this.props.setprintType(value);
    }
    changeBook(value) {
      this.props.setbookType(value);
    }

    render() {
      
       return(
         <div className="addbookmark">
           <h2>Add Bookmark</h2>
           <form className="addbookmark__form" onSubmit={e => this.handleSubmit(e)}>
             <label htmlFor="title">Title:</label>
             <input 
               type="text" 
               name="title" 
               id="title" 
               placeholder="Title"
               value={this.props.term}
               onChange={e => this.changeSelection(e.target.value)}/>
           <label htmlFor="printType">Print Type</label>
             <select
               id="printType"
               name="printType"
               onChange={e => this.changePrint(e.target.value)}>
               <option value="all">All</option>
               <option value="books">Books</option>
               <option selected value="magazines">Magazines</option>
             </select>
             <label htmlFor="bookType">Book Type</label>
             <select
               id="bookType"
               name="bookType"
               onChange={e => this.changeBook(e.target.value)}>
               <option value="partial">partial</option>
               <option value="full">full</option>
               <option value="free-ebooks">free-ebooks</option>
               <option value="paid-ebooks">paid-ebooks</option>
               <option value="ebooks">ebooks</option>
             </select>
             <div className="addbookmark__buttons">
               <button onClick={e => this.props.showForm(false)}>Cancel</button>
               <button type="submit" >Save</button>
             </div>  
           </form>
         </div>
       );
     }


  }

  

  /*
  titleChanged(title) {
    this.setState({
      title
    });
  }

  urlChanged(url) {
    this.setState({
      url
    });
  }

  descriptionChanged(description) {
    this.setState({
      description
    });
  }

  ratingChanged(rating) {
    this.setState({
      rating
    });
  }*/
/*
  handleSubmit(e) {
    e.preventDefault();
    const bookmark = (({title, url, description, rating}) => ({title, url, description, rating}))(this.state);
    const url ='https://tf-ed-bookmarks-api.herokuapp.com/v3/bookmarks';
    const options = {
      method: 'POST',
      body: JSON.stringify(bookmark),
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer $2a$10$IcHIjHNXPYmFCPdWOjRWGefs/54EFAZwZcW7H5MEZHK1HhGSWT.Ti"
      }
    };

    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })
      .then(data => {
        this.setState({
          title: "",
          url: "",
          description: "",
          rating: 1
        });
        this.props.handleAdd(bookmark);
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }
*/
 


export default Search;
