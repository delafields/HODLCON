import { h, Component } from 'preact';
import Header from '../components/Header';
import { shallow, deep } from 'preact-render-spy';

describe('Header', () => {
	let context;
	beforeEach(() => {
		context = shallow(<Header />);
	});

	test('renders wrapper', () => {
		expect(context.find('#header').length).toBe(1);
	});

	test('renders title', () => {
		expect(context.find('h1').text()).toBe('HODLCON');
	});

	test('renders subtitles', () => {
		const getChild = depth => context.find('h5').at(depth);

		expect(context.find('h5').length).toBe(2);
		expect(getChild(0).text()).toBe(
			'A running list of noteworthy hacks and scams in the cryptocurrency space.'
		);
		expect(getChild(1).text()).toBe('Last updated ');
	});

	test("renders hodlcon 'description'", () => {
		expect(context.find('h4').text()).toBe(
			'(Hold On for Dear Life readiness CONdition)'
		);
	});
});
