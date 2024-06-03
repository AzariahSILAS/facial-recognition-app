import React, { Component } from 'react'
import './App.css';
import Navigation from './components/navigation/navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
class App extends Component {

  constructor() {
    super();
    this.state = {
      input: '',

    }
  }
  onInputChange = (event) => {
    console.log(event.target.value);
  }
  onButtonSubmite = () => {
    console.log('click')
  }
  render() {
    return (
    <div className="App">
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm
       onInputChange={this.onInputChange} 
       onButtonSubmite={this.onButtonSubmite} 
       />
      {/* 
      <Faceerecognition /> */}
    </div>
    );
  }
  
}

export default App;
