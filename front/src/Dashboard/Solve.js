import React from 'react';
import { connect } from 'react-redux';
import SolveForm from '../forms/SolveForm';
import { manager } from '../service-manager/RequestManager';
import DisplayInfo from './DisplayInfo';




const Solve = props => {

	let onFormSubmit = async(data) => {
		console.log(data)
		try{
			let ans = await manager.postSolve(data)
			console.log(ans)
			props.updateResult(ans.data.data)
		} catch(err) {
			console.log(err)
		} 
	}

	return (
		<div>
			<SolveForm onSubmit={onFormSubmit} />
			{ props.result && <DisplayInfo data={props.result}/> }	
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		result : state.app.result
	}
}

const mapDispatchToProps = dispatch => {
	return {
		updateResult : (result) => {
			dispatch({type : "UPDATE_RESULT", data : {result}})
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Solve)