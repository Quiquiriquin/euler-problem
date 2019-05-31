import React from 'react';
import { Row, Col } from 'react-bootstrap';

const DisplayInfo = props => {
	return(
		<div className="mt-5">
			<Row className="d-flex justify-content-center">
				<Col lg={6} md={6} sm={12} className="fz24">
					<div className="fz24">
						Limit: {props.data.limit}	
					</div>
				</Col>
				<Col lg={6} md={6} sm={12} className="fz24">
					<div className="fz24">
						Sum: {props.data.sum}
					</div>
				</Col>
				<Col className="fz24 mt-4">
					<div className="fz24">
						Numbers
					</div>
					{props.data.numbers.sort().map((value) => `${value}   `)}
				</Col>
			</Row>
		</div>
	)
}

export default DisplayInfo