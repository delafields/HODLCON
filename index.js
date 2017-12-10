import './style';
import { Component } from 'preact';
import moment from 'moment';
import { hacks } from './hacks';

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
			diffInDays: ''
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

	render() {
		return (
			<div id="container">
				<Header />
				<Whiteboard daysSinceLastHack={this.state.diffInDays} />
				<LevelBox />
				<HackList />
			</div>
		);
	}
}
