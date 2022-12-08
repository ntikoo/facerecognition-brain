import './App.css';
import { Component } from "react";  
import Particlesbg from 'particles-bg';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'; 
import Rank from './components/Rank/Rank'; 
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
// import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
  
// const app = new Clarifai.App({
//  apiKey: 'b563fb815e1e45aaa34b8aecef48ba22'
// });
 
class App extends Component{
  constructor(){
    super();
    this.state = {
      input :'',
      route : 'signin',
      isSignedIn : false
    }
  }
  onInputChange = (event)=>{
    console.log(event.target.value);
   }

  onRouteChange=(route)=>{
    if (route === 'signout'){
      this.setState({isSignedIn: false});}
      else{
      this.setState({isSignedIn: true});
      }
    
    this.setState({route:route});
  }
  
  //  onButtonSubmit=()=>{
  //     console.log('click');
  //     app.models.predict(Clarifai.GENERAL_MODELs, 'https://samples.clarifai.com/face-det.jpg')
  //     .then(function(response){
  //       console.log(response)
  //       },
  //       function(error){

  //       }
  //       ) 
  //    }   
  
  render(){
    return (
      <div className='App'>  
           <Particlesbg type="balls"  bg= {true}/>   
           <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
           {this.state.route==='home'?
           <div>            
           <Logo />
           <Rank />        
           <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
           <FaceRecognition />  
           </div>                       
           : (this.state.route ==='signin' ? 
              <SignIn onRouteChange={this.onRouteChange}/>          
             :<Register onRouteChange={this.onRouteChange}/>)
           
           };
          
                
      </div>
      )}
          }
   
     
   
export default App;
