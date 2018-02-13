import { h, Component } from 'preact';
import Whiteboard from '../components/Whiteboard';
import { shallow, deep } from 'preact-render-spy';

describe('Whiteboard', () => {
	test('renders the svg', () => {
		const context = shallow(<Whiteboard />);
		expect(context.find('#whiteboard-container').length).toBe(1);
	});
});
