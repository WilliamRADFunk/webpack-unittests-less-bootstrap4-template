class testClass {
	testFunc(param) {
		document.write(`here is a test function to test ES6 to ES5 compilation: ${param}`);
	}
}

const tClass = new testClass();

tClass.testFunc('test param');