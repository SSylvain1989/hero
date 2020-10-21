import React from 'react';
import axios from 'axios';

import './contact.scss';

// const Contact = () => (
//   <div className="contact">
//     <h1>Nous contacter</h1>
//     <input type="text" placeholder="Votre email" />
//     <textarea placeholder="Votre message" />
//     <button type="button">Envoyer</button>
//   </div>
// );

//export default Contact;


class Contact extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://localhost:3000/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent."); 
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      message: ""
    }),
  }
  
  render() {
    return(
      <div className="contact">
        <h1>Nous contacter</h1>
        <form id="contact_form" onSubmit={this.handleSubmit.bind(this)} method="POST">
          <div className="contact_form-group">
              <label htmlFor="name">Votre nom</label>
              <input type="text" className="contact_form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
          </div>
          <div className="contact_form-group">
              <label htmlFor="exampleInputEmail1">Votre adresse email</label>
              <input type="email" className="contact_form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
          </div>
          <div className="contact_form-group">
              <label htmlFor="message">Votre message</label>
              <textarea className="contact_form-control" rows="5" className="contact_message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
          </div>
          <button type="submit" className="contact_btn-submit">Envoyer</button>
        </form>
      </div>
    );
  }

  onNameChange(event) {
	this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	this.setState({email: event.target.value})
  }

  onMessageChange(event) {
	this.setState({message: event.target.value})
  }
}

export default Contact;
