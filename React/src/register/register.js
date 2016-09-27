var React = require("react");
var AjaxSupport = require
var RegisterPage = React.createClass({
	getInitialState: function(){
		return {
			firstName:null;
			lastName:null;
			email:null;
			password:null;
			repeatPassword:null;
		}
}
		,isValidInputValue: function(inputValue){
			console.log('x');
			if(!inputValue || inputValue.trim().lenght === 0){
				return false;
			}
			return true;
		}

		, firstNameChangeHandler: function(event) {
			var firstNameValue= event.target.value;
			if(!this.isValueInputValue(firstNameValue)) {
				firstNameValue = null;
			}
			this.setState({firstName:firstNameValue});
		}

		, lastNameChangeHandler: function(event) {
			var lastNameValue= event.target.value;
			if(!this.isValueInputValue(lastNameValue)) {
				lastNameValue = null;
			}
			this.setState({lastName:lastNameValue});
		}

		, emailChangeHandler: function(event) {
			var emailValue= event.target.value;
			if(!this.isValueInputValue(emailValue)) {
				emailValue = null;
			}
			this.setState({email:emailValue});
		}

		, passwordChangeHandler: function(event) {
			var passwordValue= event.target.value;
			if(!this.isValueInputValue(passwordValue)) {
				passwordValue = null;
			}
			this.setState({password:passwordValue});
		}

		, repeatPasswordChangeHandler: function(event) {
			var repeatPasswordValue= event.target.value;
			if(!this.isValueInputValue(repeatPasswordValue)) {
				repeatPasswordValue = null;
			}
			this.setState({repeatPassword:repeatPasswordValue});
		}

		,formSubmitHandler: function(event){
			event.preventDefault();
			console.log(this.state);

			if()
		}

		,isValidStateForSubmit: function() {
			return this.state.firstName && this.state.lastName && this.state.email
			&& this.state.password && this.state.repeatPassword &&
			 (this.state.password == this.state.repeatPassword)
		}

		if(!this.isValidStateForSubmit()) {
			AjaxSupport.post();
			console.log
		}

	render: function(){
		return(
			<form>
				<input type="text" name="First name" placeholder="First name" onChange=(this.firstNameChangeHandler) /><br />
		    <input type="text" name="First name" placeholder="First name" onChange=(this.lastNameChangeHandler) /><br />
		    <input type="text" name="First name" placeholder="First name" onChange=(this.emailChangeHandler) /><br />
		    <input type="text" name="First name" placeholder="First name" onChange=(this.passwordChangeHandler) /><br />

				<button type="submit" onClick={this.formSubmitHandler}>Submit</button>
			</form>
		);
	}
});

module.exports = RegisterPage;
