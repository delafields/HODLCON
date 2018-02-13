import preact from 'preact';
import moment from 'moment';
import Collapsible from 'react-collapsible';
import { hacks } from '../hacks';

function setColorLevel(baseClassName, hackAmount) {
	const hundredThousand = 100000;
	const oneMillion = 1000000;
	const tenMillion = 10000000;
	const hundredMillion = 100000000;

	if (hackAmount <= hundredThousand) {
		baseClassName = `${baseClassName} hack-level-1`;
	} else if (hackAmount >= hundredThousand && hackAmount < oneMillion) {
		baseClassName = `${baseClassName} hack-level-2`;
	} else if (hackAmount >= oneMillion && hackAmount < tenMillion) {
		baseClassName = `${baseClassName} hack-level-3`;
	} else if (hackAmount >= tenMillion && hackAmount < hundredMillion) {
		baseClassName = `${baseClassName} hack-level-4`;
	} else if (hackAmount >= hundredMillion) {
		baseClassName = `${baseClassName} hack-level-5`;
	} else {
		baseClassName = ' ';
	}

	return baseClassName;
}

const CollapseHeader = ({
	hackName,
	hackDate,
	hackAmount,
	hackAmountAbbreviated
}) => {
	return (
		<div className={setColorLevel('hack-header-container ', hackAmount)}>
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
	return (
		<div className={setColorLevel('hack-body-container ', hackAmount)}>
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
