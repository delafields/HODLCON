import { h, Component } from 'preact';
import LevelBox from '../components/LevelBox';
import { shallow, deep } from 'preact-render-spy';

describe('LevelBox', () => {
	let context;
	beforeEach(() => {
		context = shallow(<LevelBox />);
	});

	test('renders wrapper', () => {
		expect(context.find('#levels').length).toBe(1);
	});

	test('renders levels', () => {
		const getLevel = depth => context.find('.level').at(depth);

		expect(context.find('.level').length).toBe(5);
		expect(getLevel(0).text()).toBe('<$100k');
		expect(getLevel(1).text()).toBe('>$100k');
		expect(getLevel(2).text()).toBe('>$1m');
		expect(getLevel(3).text()).toBe('>$10m');
		expect(getLevel(4).text()).toBe('>$100m');
	});
});
