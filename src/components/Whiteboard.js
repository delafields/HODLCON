import preact from 'preact';
import RawWhiteboardSVG from './RawWhiteboardSVG';

const Whiteboard = props => {
	return (
		<div id="whiteboard-container">
			<RawWhiteboardSVG daysSinceLastHack={props.daysSinceLastHack} />
		</div>
	);
};

export default Whiteboard;
