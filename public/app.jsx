var GreeterMessage = React.createClass({
    render: function(){
        var name = this.props.name;
        var lastName = this.props.lastName;
        var email = this.props.email;
        var message = this.props.message;
        
        
        return(
            <div>
              <h1>Hello {name}</h1>
              <p>{lastName}</p>
              <p>{email}</p>
              <p>{message}</p>
            </div>
            );
    }
});

var GreeterForm = React.createClass({
    
    onFormSubmit: function(e) {
      e.preventDefault();
      
      var updates  = {};
      var name     = this.refs.name.value;
      var lastName = this.refs.lastName.value;
      var email    = this.refs.email.value;
      var message = this.refs.message.value;
      
      if (name.length > 0) {
          this.refs.name.value = '';
          updates.name = name;
      }
      
      if(message.length > 0) {
         this.refs.message.value = ''; 
         updates.message = message;
      }
      
      if(lastName.length > 0){
          this.refs.lastName.value = '';
          updates.lastName = lastName;
      }
      
      if(lastName.length > 0){
          this.refs.email.value = '';
          updates.email = email;
      }
      
      this.props.onNewData(updates);
    }, 
    
    render: function(){
        return(
            
              <form onSubmit = {this.onFormSubmit} >
              <div><input type="text" ref="name" placeholder="Enter name"/></div>
              <div><input type="text" ref="lastName" placeholder="Enter last name"/></div>
              <div><input type="email" required ref="email" placeholder="Enter email"/></div>
              <div><textarea ref="message" placeholder="Enter message"></textarea></div>
              <div><button>Submit</button></div>
                
                
                
              </form>
             
            );
    }
});

var Greeter = React.createClass({
    
    getDefaultProps: function(){
        return {
          name: 'React',
          message: 'This is the default message!'
        };
    },
    
    getInitialState: function(){
      return {
          name: this.props.name,
          message: this.props.message
      };  
    },
    
    handleNewData: function(updates){
        this.setState(updates);
    },
    
    render: function() {
        var name     = this.state.name;
        var lastName = this.state.lastName;
        var email    = this.state.email;
        var message  = this.state.message;
         
        return(
            <div>

              <GreeterMessage name = {name} lastName = {lastName} email={email} message = {message}/>
              <GreeterForm onNewData = {this.handleNewData}/>
            </div> 
            );
    } 
});

let firstName = 'Kemal';
let myMessage = "I'm so happy to learn React.js so fast!";

ReactDOM.render(
             <Greeter name={firstName} message =  {myMessage} />,
             document.getElementById('app')
             );