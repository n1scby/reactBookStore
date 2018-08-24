import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

import '../components/book-list.css';
import '../components/text-box.css';

import initialBooks from '../data/books';
import TextBox from '../components/text-box';
import BookList from '../components/book-list';

class App extends Component {
  
  // set initial state 
  state = {
    newISBN: "",
    newTitle: "",
    newAuthor: "",
    books: initialBooks,
  };

  handleChangeNewBookISBN = e =>{
    this.setState({newISBN: e.target.value});
  }

  handleChangeNewBookTitle = e =>{
    this.setState({newTitle: e.target.value});
  }

  handleChangeNewBookAuthor = e =>{
    this.setState({newAuthor: e.target.value});
  }


  addBook = () => {
    const newBook = {
      isbn: this.state.newISBN,
      title: this.state.newTitle,
      author: this.state.newAuthor
    };

    const books = [...this.state.books, newBook];

    this.setState({
      books,
      newTitle: "",
      newAuthor: "",
      newISBN: ""
    });

  }

  

  render() {
    return (
        <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Book Store</h1>
        </header>
        <div className="App">
          <h2>Add New Book</h2>
          <div className="new-book-form">
            <label>ISBN: </label><TextBox value={this.state.newISBN} change={this.handleChangeNewBookISBN} />
            <label>Title: </label><TextBox value={this.state.newTitle} change={this.handleChangeNewBookTitle} />
            <label>Author: </label><TextBox value={this.state.newAuthor} change={this.handleChangeNewBookAuthor} />
          </div>
          <div>
            <button onClick={this.addBook}>Add Book</button>
          </div>
        
        <div>
            <h2>Book List</h2>
            <BookList books={this.state.books} />
        </div>
        </div>
        </div>
     
    );
  }
}

export default App;
