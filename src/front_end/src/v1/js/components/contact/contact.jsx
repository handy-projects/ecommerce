import React from 'react';

let Contact = React.createClass({

    getInitialState: function() {
      return {
        name: '',
        email: '',
        phone: '',
        message: ''
      };
    },

    handleNameChange: function(event) {
      this.setState({name: event.target.value});
    },

    handleEmailChange: function(event) {
      this.setState({email: event.target.value});
    },

    handlePhoneChange: function(event) {
      this.setState({phone: event.target.value});
    },

    handleMessageChange: function(event) {
      this.setState({message: event.target.value});
    },

    sendEmail: function() {
      var model = this.state;
      var url = 'https://node-emailer.herokuapp.com/wbserg@gmail.com';
      var jsonData = {
        to: 'wbserg@gmail.com',
        subject: 'Notification from Blog',
        message: model.name + '(' + model.email + ') says: ' + model.message + (!!model.phone ? '. His Phone #: ' + model.phone : '. Have not specified phone number.')};
      var jsonString = JSON.stringify(jsonData);
      $.ajax({
        url: url,
        method: 'PUT',
        contentType: 'application/json',
        crossDomain: true,
        processdata: true,
        data: jsonString,
        headers: {
          whereTheQuestionsWhereTheAnswers: 'WhoLetTheDogOUT!Raf!'
        },
        success: function(res) {
          console.log('Oh Yesss! Message sent successfully!');
        },
        error: function(err) {
          console.log('Crap! We have a problem!');
        }
      });
    },

    render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
            <p>Want to get in touch with me? Fill out the form below to send me a message and I will try to get back to you within 24 hours!</p>
            <form name="sentMessage" id="contactForm" noValidate>
              <div className="row control-group">
                <div className="form-group col-xs-12 floating-label-form-group controls">
                  <label>Name</label>
                  <input type="text" className="form-control" placeholder="Name" value={this.name} onChange={this.handleNameChange} required data-validation-required-message="Please enter your name." />
                  <p className="help-block text-danger" />
                </div>
              </div>
              <div className="row control-group">
                <div className="form-group col-xs-12 floating-label-form-group controls">
                  <label>Email Address</label>
                  <input type="email" className="form-control" placeholder="Email Address" id="email" value={this.email} onChange={this.handleEmailChange} required data-validation-required-message="Please enter your email address." />
                  <p className="help-block text-danger" />
                </div>
              </div>
              <div className="row control-group">
                <div className="form-group col-xs-12 floating-label-form-group controls">
                  <label>Phone Number</label>
                  <input type="tel" className="form-control" placeholder="Phone Number" value={this.phone} onChange={this.handlePhoneChange} required data-validation-required-message="Please enter your phone number." />
                  <p className="help-block text-danger" />
                </div>
              </div>
              <div className="row control-group">
                <div className="form-group col-xs-12 floating-label-form-group controls">
                  <label>Message</label>
                  <textarea rows={5} className="form-control" placeholder="Message" value={this.message} onChange={this.handleMessageChange} required data-validation-required-message="Please enter a message." />
                  <p className="help-block text-danger" />
                </div>
              </div>
              <br />
              <div id="success" />
              <div className="row">
                <div className="form-group col-xs-12">
                  <button type="button" className="btn btn-default" onClick={this.sendEmail}>Send</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>


    );
  }
});

export default Contact;
