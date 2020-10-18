import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header'; //import  
import { Footer } from './components/footer'; //all
import { Content } from './components/content';//components
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

class App extends Component { //Changed function to classes 
  render() {
    return (
      <div className="App">

        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link> 
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
        </Navbar>

      
        <Header></Header>
        <h1>Hello World!</h1>
        <Content></Content>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
