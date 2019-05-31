import React, { Component } from 'react';
import { manager } from '../service-manager/RequestManager';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';


class Solutions extends Component {

	constructor(props){
		super(props)
		this.getSolutions()
	}

	getSolutions = async() => {
		try{
			let ans = await manager.getSolves()
			console.log(ans)
			this.props.updateResults(ans.data.data)
			console.log(this.props)
		} catch(err) {
			console.log(err)
		}
	}

	render() { 
		return ( 
			<div>
				<div className="fz36">
					Solutions
				</div>
				<div className="custom-table">

				{
					this.props.results &&
					<Table>
						<thead>
							<tr>
								<th>Limit</th>
								<th>Sum</th>
							</tr>
						</thead>
						<tbody>
							{this.props.results.map((value, index) => 
								<tr key={index}>
									<td>{value.limit}</td>
									<td>{value.sum}</td>
								</tr>
							)}
						</tbody>
					</Table>
				}
				</div>
			</div>
		 );
	}
}

const mapStateToProps = (state) => {
	return {
		resultSelected : state.app.ansSelected,
		results : state.app.results
	}
}

const mapDispatchToProps = dispatch => {
	return {
		updateResults : (results) => {
			dispatch({type : "UPDATE_RESULTS", data : {results}})
		},
		updateSelected : (ansSelected) => {
			dispatch({ type : "UPDATE_ANS_SELECTED", data: {ansSelected}})
		}
	}
}

 
export default connect(mapStateToProps, mapDispatchToProps)(Solutions);