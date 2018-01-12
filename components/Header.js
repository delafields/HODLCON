import preact from 'preact';

const Header = ({ lastUpdate }) => {
	const styles = {
		subtitle: { opacity: '0.7', margin: '0' }
	};
	return (
		<div id="header">
			<h1>HODLCON</h1>
			<h5 style={styles.subtitle}>
				A running list of noteworthy hacks and scams in the cryptocurrency
				space.
			</h5>
			<h5 style={styles.subtitle}>Last updated {lastUpdate}</h5>
			<h4>
				(H<sub>old</sub> O<sub>n</sub> <sub>for</sub> D<sub>ear</sub> L<sub>
					ife
				</sub>{' '}
				<sub>readiness</sub> CON<sub>dition</sub>)
			</h4>
		</div>
	);
};

export default Header;
