import preact from 'preact';

const Header = () => {
	return (
		<div id="header">
			<h1>HODLCON</h1>
			<h5 style={{ opacity: 0.7 }}>
				A running list of hacks in the cryptocurrency space.
			</h5>
			<h4>
				(H<sub>old</sub> O<sub>n</sub> <sub>for</sub> D<sub>ear</sub> L<sub>ife</sub>{' '}
				<sub>readiness</sub> CON<sub>dition</sub>)
			</h4>
		</div>
	);
};

export default Header;
