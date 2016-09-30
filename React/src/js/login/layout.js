var React = require('react');

var LoginPage = React.createClass({
	render: function() {
		return (
			<div className="login-form">

				<form>
						<div>
						<li>
						<input type="text" name="login" value="" placeholder="Username or Email"/>
						</li>
						<li>
						<input type="password" name="password" value="" placeholder="Password"/>
						</li>
						<li>
						<input type="submit" onclick="myFunction()" value="Sign in" />
						</li>
						</div>
					</form>

			</div>
		);
	}
});

module.exports = LoginPage;
