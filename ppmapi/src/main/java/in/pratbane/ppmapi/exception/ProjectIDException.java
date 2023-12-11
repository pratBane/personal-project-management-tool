package in.pratbane.ppmapi.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.BAD_REQUEST)
public class ProjectIDException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	/**
	 * This will create ProjectIDException object without error message
	 */
	public ProjectIDException() {
		super();
	}

	/**
	 * This will create ProjectIDException object with error message
	 */
	public ProjectIDException(String msg) {
		super(msg);
	}

	
	
}
