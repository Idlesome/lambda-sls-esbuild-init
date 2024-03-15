/**
 * Runs the handler with a local emulation for S3
 * to make local testing quick and easy
 */

import { handler } from "./index";

void (async () => {
	const result = await handler({
		exampleUrl: "https://example.com",
	});
	console.log(result);
})();
