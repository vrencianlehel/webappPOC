var React = require("react")

var HomePage = React.createClass({
	render: function(){
		return(
			<table className="table">
				<thead>
				<tr>
					<th>#</th>
					<th>First Name</th>
					<th>Last Name</th>
					<th>Username</th>
				</tr>
				</thead>
			<tbody id= "user-data-container">
			
			</tbody>
		</table>
		);
	}
});

module.exports = HomePage;