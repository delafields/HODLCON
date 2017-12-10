import preact from 'preact';

const LevelBox = () => {
	return (
		<div id="levels">
			<div className="level">&lt;$10k</div>
			<div className="level">&gt;$100k</div>
			<div className="level">&gt;$1m</div>
			<div className="level">&gt;$10m</div>
			<div className="level">&gt;$100m</div>
		</div>
	);
};

export default LevelBox;
