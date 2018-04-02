import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Footer from './components/Footer';

const url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch=';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userQuery: ''
    }

    this.getUserQuery = this.getUserQuery.bind(this);
  }

  getUserQuery(e) {
    this.setState({
      userQuery: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Search userQuery={this.getUserQuery}/>
        <Footer />
      </div>
    );
  }
}

export default App;
