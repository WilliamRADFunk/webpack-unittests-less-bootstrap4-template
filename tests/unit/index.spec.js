// import './index.js';
describe('Array', () => {
	beforeEach(() => {
		console.log('hello world');
		let e = document.createElement('img');
		e.src = '';
		e.id = 'demo-image1';
		document.body.appendChild(e);
		let f = document.createElement('img');
		f.src = '';
		f.id = 'demo-image2';
		document.body.appendChild(f);
		let g = document.createElement('img');
		g.src = '';
		g.id = 'demo-image3';
		document.body.appendChild(g);
	});
	
	describe('#indexOf()', () => {
		it('should return -1 when the value is not present', () => {
			expect([1,2,3].indexOf(4)).toBe(-1);
		});
	});
});