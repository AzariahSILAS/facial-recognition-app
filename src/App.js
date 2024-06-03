import React, { Component } from 'react'
import './App.css';
import Navigation from './components/navigation/navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';




    const PAT = '7734c39d98144ad9a42d07993498c3e1';
    // Specify the correct user_id/app_id pairings
    // Since you're making inferences outside your app's scope
    const USER_ID = 'azariahsilas';       
    const APP_ID = 'facial-recognition';
    // Change these to whatever model and image URL you want to use
    const MODEL_ID = 'face-detection';   
    const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg';

    ///////////////////////////////////////////////////////////////////////////////////
    // YOU DO NOT NEED TO CHANGE ANYTHING BELOW THIS LINE TO RUN THIS EXAMPLE
    ///////////////////////////////////////////////////////////////////////////////////

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

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    };

    // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
    // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
    // this will default to the latest version_id

    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));




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
