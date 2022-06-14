import React, { Component } from 'react';

class AddContact extends Component {
  state = {
    name:"",
    email:"",
  };
  add =(event)=>{
    event.preventDefault();
    if(this.state.name === "" || this.state.email === ""){
      alert("All the fields are mendatory!");
      return;
    }
    
    this.props.addContactHandler(this.state);
    this.setState({name:"",email:""});
  }
  render() {
    return (
      <div className='ui main'>
        <h2>Add Contact</h2>
        <form className='ui form' onSubmit={this.add}>
            <div className='field'>
                <label>Name</label>
                <input type='text' name='name' placeholder='name' onChange={(event)=>this.setState({name:event.target.value})} />
            </div>
            <div className='field'>
                <label>Email</label>
                <input type='text' name='email' placeholder='email'  onChange={(event)=>this.setState({email:event.target.value})}/>
            </div>
            <button className='ui button blue'>Add</button>

        </form>
        
      </div>
    );
  }
}

export default AddContact;


