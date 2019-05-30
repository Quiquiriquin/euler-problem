class ControllerUtils {
	static respond(response, responseCode, responseData) {
	  response.status(responseCode).send(responseData);
	}
  
	static success(response, responseCode, responseData) {
	  this.respond(response, responseCode, {
		success: true,
		...responseData
	  });
	}
  
	static error(response, responseCode, responseData) {
	  this.respond(response, responseCode, {
		success: false,
		...responseData
	  });
	}
  
	static successfulOperation(response, responseData) {
	  this.success(response, 200, responseData);
	}
  
	static successfulInsertion(response, responseData) {
	  this.success(response, 201, responseData);
	}
  
	static buildError(error) {
	  console.error(error);
	  let errors;
	  let message = 'Cannot get the answer';
	  let responseCode = 400;
  
	  switch (error.message) {
		case "Cannot read property 'getAnswer' of undefined":
		  errors = 'The limit cannot be null. Specify number between 1 and 1000000'
		  break;
		case 'SequelizeValidationError':
		  errors = error.errors.map(e => e.message);
		  break;
  
		default:
		  responseCode = 500;
		  message = 'No se puede ';
		  errors = [error.message];
		  break;
	  }
  
	  return {
		responseCode,
		message,
		errors
	  };
	}
  
	static handleError(response, error, defaultData) {
	  const { responseCode, message, errors } = this.buildError(error);
  
	  this.error(response, responseCode, {
		message,
		errors,
		...defaultData
	  });
	}
  
	static notFoundError(response, responseData) {
	  this.error(response, 404, {
		...responseData
	  });
	}
  }
  
  export default ControllerUtils;
  