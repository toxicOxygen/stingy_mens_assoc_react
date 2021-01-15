import React from 'react';
import RegistrationForm from "./components/RegistrationForm";
import StingyCard from "./components/StingyCard";

class App extends React.Component{
  constructor(props)
  {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      position:'',
      country:'',
      photoUrl: ''
    }

    this.submit = this.submit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  submit(e)
  {
    e.preventDefault();
    //to do save image
  }

  handleChange(e)
  {

  }


  render(){
    return (
      <div className="container py-5">
        <h1 className="text-center">Welcome to Stingy Men's Association</h1>
  
        <div className="row d-flex justify-content-center mb-4">
          <div className="col-md-8">
           
            <RegistrationForm onSubmit={this.submit} handleChange={this.handleChange}/>
            
          </div>
        </div>
  
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
           
            <StingyCard country="INC."/>
            
          </div>
        </div>
      </div>
    );
  }
}


export default App;
