// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
	// you can add any code you want within this function scope

	function substitution(input, alphabet, encode = true) {
		// your solution code here
		if (!alphabet || alphabet.length !== 26){
          return false
        }

		input = input.toLowerCase();
		let answer = "";
		const alphabetString = "abcdefghijklmnopqrstuvwxyz";
		const alphabetArr = alphabet.split("");
		let dub = alphabetArr.some(
			(curr, newIndex) =>
				alphabetArr.indexOf(curr) !== newIndex
		);
		if (dub){
          return false
        }

		for (let i = 0; i < input.length; i++) {
			if (input[i] === " ") answer += " "
			if (encode) {
				let index = alphabetString.indexOf(input.charAt(i))
				answer += alphabet.charAt(index)
			} else {
			let	index = alphabet.indexOf(input.charAt(i))
				answer += alphabetString.charAt(index)
			}
		}
		return answer
	}

	return {
		substitution,
	};
})();

module.exports = { substitution: substitutionModule.substitution };
