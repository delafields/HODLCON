import './styles/style';
import './styles/normalize';
import { Component } from 'preact';
import moment from 'moment';
import { hacks, lastUpdate } from './hacks';

import Header from './components/Header';
import Whiteboard from './components/Whiteboard';
import LevelBox from './components/LevelBox';
import HackList from './components/HackList';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			today: '',
			lastHack: '',
			diffInDays: '',
			lastUpdate
		};
	}

	componentDidMount() {
		const today = moment([moment().year(), moment().month(), moment().date()]);
		const lastHack = moment(hacks[0].date);
		const diffInDays = today.diff(lastHack, 'days');
		this.setState({
			today,
			lastHack,
			diffInDays
		});
	}

	getHacks() {}

	render() {
		return (
			<div id="container">
				<Header lastUpdate={this.state.lastUpdate} />
				<Whiteboard daysSinceLastHack={this.state.diffInDays} />
				<LevelBox />
				<HackList />
			</div>
		);
	}
}
