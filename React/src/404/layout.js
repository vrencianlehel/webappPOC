var React = require("react");
var Router =require('react-router');
var Link = Router.Link;

var NotFoundPage = React.createClass({
	render: function(){
		return(
			<div>
				<h1>Oups!: Page not found</h1>
				<Link to = "Login" > Go to Login page</Link>
			</div>
		)
	}
});

module.exports = NotFoundPage;
