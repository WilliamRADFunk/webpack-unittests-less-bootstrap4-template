import './styles.scss';
import './styles.less';

class testClass {
	testFunc(param) {
		document.write(`here is a tester function to test ES6 to ES5 compilation: ${param}`);
	}
}

const tClass = new testClass();

tClass.testFunc('test param');