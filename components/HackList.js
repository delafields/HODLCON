import preact from 'preact';
import moment from 'moment';
import Collapsible from 'react-collapsible';
import { hacks } from '../hacks';

const amount = {
	hundredThousand: 100000,
	oneMillion: 1000000,
	tenMillion: 10000000,
	hundredMillion: 100000000
};

const CollapseHeader = ({
	hackName,
	hackDate,
	hackAmount,
	hackAmountAbbreviated
}) => {
	let levelColorHeader = 'hack-header-container ';
	let { hundredThousand, oneMillion, tenMillion, hundredMillion } = amount;
	/* Compare amount, get 'level' for coloring */
	if (hackAmount <= hundredThousand) {
		levelColorHeader += 'hack-level-1';
	} else if (hackAmount >= hundredThousand && hackAmount < oneMillion) {
		levelColorHeader += 'hack-level-2';
	} else if (hackAmount >= oneMillion && hackAmount < tenMillion) {
		levelColorHeader += 'hack-level-3';
	} else if (hackAmount >= tenMillion && hackAmount < hundredMillion) {
		levelColorHeader += 'hack-level-4';
	} else if (hackAmount >= hundredMillion) {
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
	let { hundredThousand, oneMillion, tenMillion, hundredMillion } = amount;

	/* Compare amount, get 'level' for coloring */
	if (hackAmount <= hundredThousand) {
		levelColorBody += 'hack-level-1';
	} else if (hackAmount >= hundredThousand && hackAmount < oneMillion) {
		levelColorBody += 'hack-level-2';
	} else if (hackAmount >= oneMillion && hackAmount < tenMillion) {
		levelColorBody += 'hack-level-3';
	} else if (hackAmount >= tenMillion && hackAmount < hundredMillion) {
		levelColorBody += 'hack-level-4';
	} else if (hackAmount >= hundredMillion) {
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
							hackDate={hack.date}
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
