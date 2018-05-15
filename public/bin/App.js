/* import React, { Component } from 'react';
import './App.css';

const API   = 'temp1';
const QUERY = 'temp2';


class App extends Component {
  render() {
    const { data, isLoading, error } = this.setState; 
    return (
      //pass
    );
  }


  componentDidMount() {
    this.setState({ });
    fetch( API + query)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong with API..');
        }
      })
      .then(data => this.setState())
      .catch(error => this.setState());
  }

}

export default App;
 */