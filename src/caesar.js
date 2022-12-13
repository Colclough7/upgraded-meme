// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
const alphabet =
		"abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz"
  function caesar(input, shift, encode = true) {
    // your solution code here
    input = input.toLowerCase()
		const encodedArr = []
		if (shift === 0 || shift < -25 || shift > 25) return false
		if (encode == false) {
			shift = -shift
		}
		for (let i = 0; i < input.length; i++) {
			let inputC = input.charAt(i)
			if (!alphabet.includes(inputC)) {
				encodedArr.push(inputC)
			} else {
				for (let j = 0; j < alphabet.length; j++) {
					let jShift = j + 26 + shift
					if (alphabet.charAt(j) === inputC) {
						encodedArr.push(alphabet.charAt(jShift))
						break;
					}
				}
			}
		}
		return encodedArr.join("")
  }

  return {
    caesar,
  };
})()

module.exports = {caesar: caesarModule.caesar}
