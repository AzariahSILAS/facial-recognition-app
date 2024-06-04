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

const returnClearifiaiJSONRequestOptions = (imageUrl) => {
  const PAT = '7734c39d98144ad9a42d07993498c3e1';
// Specify the correct user_id/app_id pairings
// Since you're making inferences outside your app's scope
const USER_ID = 'azariahsilas';       
const APP_ID = 'facial-recognition';
// Change these to whatever model and image URL you want to use
const MODEL_ID = 'face-detection';   
const IMAGE_URL = imageUrl;

const raw = JSON.stringify({
    "user_app_id": {
        "user_id": USER_ID,
        "app_id": APP_ID
    },
    "inputs": [
        {
            "data": {
                "image": {
                    "url": IMAGE_URL
                }
            }
        }
    ]
});
requestOptions = {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Authorization': 'Key ' + PAT
    },
    body: raw
};
return requestOptions



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
    // App.models.predict(
    //    Clarifai.FACE_DETECT_MODEL,
    //    this.state.input)
     fetch("https://api.clarifai.com/v2/models/" + FACE_DETECT_MODEL + "/outputs", returnClearifiaiJSONRequestOptions(this.state.input))
    .then(response => response.json())
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
