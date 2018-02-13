import { h, Component } from 'preact';
import HackList from '../components/HackList';
import { shallow, deep } from 'preact-render-spy';

describe('HackList', () => {
	let context;
	beforeEach(() => {
		context = shallow(<HackList />);
	});

	test('renders wrapper', () => {
		expect(context.find('.hacklist-container').length).toBe(1);
	});
});
