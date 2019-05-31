import React from 'react'

export const renderField = ({name, input, type, label, meta:{error, warning, touched}}) => (
	<div>
		<div className="input-container">
			<input className="form-control custom-input ml-auto mr-auto" {...input} placeholder={label} type={type} />
		</div>
		{touched &&
			((error && <span><small className="error">{error}</small></span>) ||
				(warning && <span>{warning}</span>))}
	</div>
)