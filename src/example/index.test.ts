import { handler } from "./index";
import { jest } from "@jest/globals";

describe("lambda handler", () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});

	it("returns a response", async () => {
		const response = await handler({
			exampleUrl: "https://example.com",
		});
		expect(response).toEqual({
			statusCode: 200,
			success: true,
			body: {
				url: "https://example.com",
			},
		});
	});
});
