// Write your tests here!
const expect = require("chai").expect;
const {substitution} = require("../src/substitution");

describe("substitution", () => {
	it("should return false if the substitution alphabet is missing", () => {
		const expected = false;
		const actual = substitution("thinkful", null, (encode = true));
		expect(actual).to.equal(expected);
	});

	it("should return false if the given alphabet is not exactly 26 characters long.", () => {
		const expected = false;
		const actual = substitution("thinkful", "abcd", (encode = true));
		expect(actual).to.equal(expected);
	});

	it("should correctly decode the given phrase, based on the alphabet given to the function.", () => {
		const expected = "you are an excellent spy";
		const actual = substitution(
			"elp xhm xf mbymwwmfj dne",
			"xoyqmcgrukswaflnthdjpzibev",
			(encode = false)
		);
		expect(actual).to.equal(expected);
	});

	it("should correctly encode the given phrase, based on the alphabet given to the function.", () => {
		const expected = "elp xhm xf mbymwwmfj dne";
		const actual = substitution(
			"you are an excellent spy",
			"xoyqmcgrukswaflnthdjpzibev"
		);
		expect(actual).to.equal(expected);
	});

	it("should return false if the given alphabet has dublicate characters", () => {
		const expected = false;
		const actual = substitution("thinkful", "xxxxvvvvvyyy");
		expect(actual).to.equal(expected);
	});

	it("should maintain spaces before and after encoding.", () => {
		const expected = "elp xhm xf mbymwwmfj dne";
		const actual = substitution(
			"you are an excellent spy",
			"xoyqmcgrukswaflnthdjpzibev"
		);
		expect(actual).to.equal(expected);
	});

	it("should maintain spaces throughout.", () => {
		const expected = "you are an excellent spy";
		const actual = substitution(
			"elp xhm xf mbymwwmfj dne",
			"xoyqmcgrukswaflnthdjpzibev",
			(encode = false)
		);
		expect(actual).to.equal(expected);
	});

	it("should ignore capital letters.", () => {
		const expected = substitution("A Message", "xoyqmcgrukswaflnthdjpzibev");
		const actual = substitution("a message", "xoyqmcgrukswaflnthdjpzibev");
		expect(actual).to.equal(expected);
	});
});