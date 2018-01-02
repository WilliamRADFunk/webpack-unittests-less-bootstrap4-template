import 'stylesheets/styles.scss';
import 'stylesheets/styles.less';
import cat from 'images/cat.gif';
console.log(cat);

class testClass {
	testFunc(param) {
		document.write(`here is a tester function to test ES6 to ES5 compilation: ${param}`);
		document.getElementById('demo-image').src = cat;
	}
}

const tClass = new testClass();

tClass.testFunc('test param');