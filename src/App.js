import React, { Component } from 'react'
import './App.css';
import Clarifai from 'clarifai';
import Navigation from './components/navigation/navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Faceerecognition from './components/Faceerecognition/Faceerecognition';

const app = new Clarifai.App({
  apiKey: 'API Key'
})


class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }
  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }
  onButtonSubmite = () => {
    this.setState({imageUrl: this.state.input})
    console.log('click')
    App.models.predict(
       Clarifai.FACE_DETECT_MODEL,
       this.state.input)
      .then(
      function(response) {

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
      <Faceerecognition imageUrl={this.state.imageUrl} />
    </div>
    );
  }
  
}

export default App;
