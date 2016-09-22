var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var AppBaseView = React.createClass({
	render: function(){
		return (
		<div class="base-container">
			<RouteHandler/>
		</div>
		);
	}
});

module.exports = AppBaseView;