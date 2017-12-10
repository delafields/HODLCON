import preact from 'preact';
import moment from 'moment';
import Collapsible from 'react-collapsible';
import { hacks } from '../hacks';

const CollapseHeader = ({
	hackName,
	hackDate,
	hackAmount,
	hackAmountAbbreviated
}) => {
	let levelColorHeader = 'hack-header-container ';
	if (hackAmount === 1) {
		levelColorHeader += 'hack-level-1';
	} else if (hackAmount == 2) {
		levelColorHeader += 'hack-level-2';
	} else if (hackAmount == 3) {
		levelColorHeader += 'hack-level-3';
	} else if (hackAmount == 4) {
		levelColorHeader += 'hack-level-4';
	} else if (hackAmount == 5) {
		levelColorHeader += 'hack-level-5';
	} else {
		levelColorHeader = ' ';
	}

	return (
		<div className={levelColorHeader}>
			<div className="hack-header-name">
				<h2>{hackName}</h2>
			</div>
			<div className="hack-header-date">
				<h3>{moment(hackDate).format('MMMM DD, YYYY')}</h3>
			</div>
			<div className="hack-header-amount">
				<h3>$ {hackAmountAbbreviated}</h3>
			</div>
		</div>
	);
};

const CollapseBody = ({ content, hackAmount }) => {
	let levelColorBody = 'hack-body-container ';
	if (hackAmount === 1) {
		levelColorBody += 'hack-level-1';
	} else if (hackAmount == 2) {
		levelColorBody += 'hack-level-2';
	} else if (hackAmount == 3) {
		levelColorBody += 'hack-level-3';
	} else if (hackAmount == 4) {
		levelColorBody += 'hack-level-4';
	} else if (hackAmount == 5) {
		levelColorBody += 'hack-level-5';
	} else {
		levelColorBody = ' ';
	}

	return (
		<div className={levelColorBody}>
			<div dangerouslySetInnerHTML={{ __html: content }} />
		</div>
	);
};

const HackList = () => {
	return (
		<div className="hacklist-container">
			{hacks.map((hack, idx) => (
				<Collapsible
					trigger={
						<CollapseHeader
							hackName={hack.name}
							hackAmount={hack.amount}
							hackAmountAbbreviated={hack.amountAbbreviated}
						/>
					}
					transitionTime={200}
					easing="ease-out"
					key={idx}
				>
					<CollapseBody content={hack.description} hackAmount={hack.amount} />
				</Collapsible>
			))}
		</div>
	);
};

export default HackList;
