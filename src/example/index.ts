interface HandlerEvent {
	exampleUrl?: `https://${string}`;
}
interface ValidatedHandlerEvent {
	exampleUrl: `https://${string}`;
}

export function validateInput(event: HandlerEvent) {
	console.debug(`Validating payload...`);

	if (!event.exampleUrl) {
		return "Missing required parameter: exampleUrl";
	}

	try {
		new URL(event.exampleUrl);
	} catch (error) {
		return (
			"Invalid URL supplied for cachedSource: " +
			event.exampleUrl +
			"\n" +
			error?.toString()
		);
	}

	return null;
}

export const handler = async (event: ValidatedHandlerEvent) => {
	const validationErrorMessage = validateInput(event);

	if (validationErrorMessage) {
		return {
			statusCode: 422,
			success: false,
			errorMessage: validationErrorMessage,
		};
	}

	const url = new URL(event.exampleUrl).href;

	return {
		statusCode: 200,
		success: true,
		body: {
			url,
		},
	};
};
