import { h, Component } from 'preact';
import RawWhiteboardSVG from '../components/RawWhiteboardSVG';
import { shallow, deep } from 'preact-render-spy';

describe('RawWhiteboardSVG', () => {
	test('renders the svg', () => {
		const context = shallow(<RawWhiteboardSVG />);
		expect(context.find('#whiteboard').length).toBe(1);
	});
});
