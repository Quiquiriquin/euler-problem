import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { renderField } from '../Generic/RenderField';
import { Button } from 'react-bootstrap'

const validate = values => {
	let errors = {}

	if(!values.limit) errors.limit = "Insert a number"
	if(!/^[0-9]+$/i.test(values.limit)) errors.limit = "Type a valid number"
}

let SolveForm = props => {
	
	const { handleSubmit } = props
	
	return(
		<div>
			<form onSubmit = {handleSubmit}>
				<div className="text-center mt-5">
					<Field component={renderField} name="limit" type="number" label="Insert a number"/>
					<Button className="custom-button" type="submit">GET RESULT</Button>
				</div>
				
			</form>
		</div>
	)
}

SolveForm = reduxForm({
	form: 'solicitudForm', // a unique identifier for this form
	validate, // <--- validation function given to redux-form
  })(SolveForm)

export default SolveForm