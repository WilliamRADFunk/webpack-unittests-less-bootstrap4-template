import 'stylesheets/styles.scss';
import 'stylesheets/styles.less';
import cat from 'images/cat.gif';
import cat2 from 'images/cat2.gif';
import cat3 from 'images/cat3.gif';

class testClass {
	testFunc(param) {
		document.getElementById('injected-h3').innerHTML = `here is a tester function to test ES6 to ES5 compilation: ${param}`;
		document.getElementById('demo-image1').src = cat;
		document.getElementById('demo-image2').src = cat2;
		document.getElementById('demo-image3').src = cat3;
	}
}

const tClass = new testClass();

tClass.testFunc('test param');