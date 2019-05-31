import React from 'react';
import { connect } from 'react-redux';
import SolveForm from '../forms/SolveForm';
import { manager } from '../service-manager/RequestManager';
import DisplayInfo from './DisplayInfo';




const Solve = props => {

	let onFormSubmit = async(data) => {
		props.updateLoader(true)
		try{
			let ans = await manager.postSolve(data)
			setTimeout(() => {props.updateLoader(false); props.updateResult(ans.data.data)}, 700)
		} catch(err) {
			console.log(err)
			props.updateLoader(false)
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
		result : state.app.result,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		updateResult : (result) => {
			dispatch({type : "UPDATE_RESULT", data : {result}})
		},
		updateLoader : (isLoading) => {
			dispatch({ type :"UPDATE_LOADER", data : {isLoading}})
		}
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Solve)