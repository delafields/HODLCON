import preact from 'preact';
import WhiteboardSvg from '../assets/Whiteboard.svg';
import BrokenSVG from './BrokenSVG';

const Whiteboard = props => {
	return (
		<div id="whiteboard-container">
			<BrokenSVG daysSinceLastHack={props.daysSinceLastHack} />
		</div>
	);
};

export default Whiteboard;
