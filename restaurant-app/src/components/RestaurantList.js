import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class RestaurantList extends Component {
	constructor() {
		super();
		this.state = {
			list: null,
		}
	}
	componentDidMount() {
		fetch("http://localhost:4000/restaurant").then((response) => {
			response.json().then((result) => {
				this.setState({ list: result })
			})

		})
	}
	render() {
		return (
			<div>
				<h1>Restaurant List</h1>
				{
					this.state.list ?
						<div>
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>#</th>
										<th>Name</th>
										<th>Rating</th>
										<th>Address</th>
									</tr>
								</thead>
								<tbody>
									{
										this.state.list.map((item, i) =>
											// <div className="list-wrapper">
											// 	<span>{item.name}</span>
											// 	<span>{item.email}</span>
											// 	<span>{item.rating}</span>
											// 	<span>{item.address}</span>

											// </div>)
											<tr>
												<td>{item.id}</td>
												<td>{item.name}</td>
												<td>{item.rating}</td>
												<td>{item.address}</td>
											</tr>
										)
									}
								</tbody>
							</Table>
						</div>
						: <p>Please wait...</p>
				}
			</div>
		);
	}
}

export default RestaurantList;