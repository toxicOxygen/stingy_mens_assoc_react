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
      branch:'',
      photoUrl: ''
    }

    this.submit = this.submit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  submit(event)
  {
    event.preventDefault();
    console.log("data collect", this.state)
    //to do save image
  }

  handleChange(event)
  {
    const fieldName = event.target.name
    if (fieldName === "photoUrl")
    {
      this.setState({
        [event.target.name]: URL.createObjectURL(event.target.files[0])
      })
      console.log(this.state.photoUrl)
    }
    else
      this.setState({
        [event.target.name]: event.target.value
      })
  }


  render(){
    return (
      <div className="container py-5">
        <h1 className="text-center">Welcome to Stingy Men's Association</h1>
  
        <div className="row d-flex justify-content-center mb-4">
          <div className="col-md-8">
           
            <RegistrationForm onSubmit={this.submit} handleChange={this.handleChange} data={this.state}/>
            
          </div>
        </div>
  
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
           
            <StingyCard data={this.state}/>
            
          </div>
        </div>
      </div>
    );
  }
}


export default App;
