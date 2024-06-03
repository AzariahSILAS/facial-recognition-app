import React, { Component } from 'react'
import './App.css';
import Clarifai from 'clarifai';
import Navigation from './components/navigation/navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

const app = new Clarifai.App({
  apiKey: 'API Key'
})


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
    App.models.predict("Api Key", "HTTP:link").then(
      function(rsponse) {

      },
      function(errr) {
        
      }
    );
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
