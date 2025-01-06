function argument_function() {
	console.log(
		"This function was passed as an argument before the message was printed."
	);
}

function invoke_function(argument_function) {
	argument_function();
}

invoke_function(argument_function);
