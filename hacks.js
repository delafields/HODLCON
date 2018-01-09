export const lastUpdate = 'December 10th, 2017';

export const hacks = [
	/* TEMPLATE
  {
    name: '', Keep it short
    amount: 0, Integer
		amountAbbreviated: '1.1m', < 4 #s
    date: '', [year, month, day] ints
    description: ''
  }
	.hack-body-link for links
	.hack-body-image for pix
  */
	{
		name: 'Ledger Hardware Wallet MiM Attack',
		date: [2018, 1, 5],
		amount: 34000,
		amountAbbreviated: '34k',
		description: `
			<p>On January 5th, 2018, redditor moodyrocket got rekt,
			<a class="hack-body-link" href="https://np.reddit.com/r/ledgerwallet/comments/7obot7/all_my_cryptocurrency_stolen/">posting:<a/>
			<span class="hack-body-quote">
				I have not used my Ledger in a week, today I decide to check the value of my XRP, Litecoin and Dash only to discover that all of them showed up as zero and had been transferred somewhere else yesterday all around the same time at 7:30pm. I am not sure how this is possible as I have not access my Ledger in a week. I do not know what do to as the total value is over £25000, has by currency been stolen or is it something else? I am at a lost here and right now feel so physical sick. Some please help.
			</span>
			<p>
				<b><u>The setup</u></b>:
			</p>
			<p>
				moodyrocket purchases a second-hand <a class="hack-body-link" href="https://www.ledgerwallet.com/products/ledger-nano">Ledger Nano<a/> hardware wallet off of eBay.
			</p>
			<p>
				Included with the Nano is a seemingly legit (to the uninitiated), recovery word paper.
			</p>
			<p>
				(The initiated know: the wallet generates your seeds. Otherwise, something is up.)
			</p>
			<p>
				moodyrocket comments:
				<span class="hack-body-quote">
					The Ledger came with a recovery sheet which had a 24 word recovery seed, to see the seed I had to scratch off the silver foil/paint that was covering it.
				</span>
			</p>
				<img class="hack-body-image" src="https://i.imgur.com/DsICkge.jpg"></img>
			<p>
				<b><u>The attack</u></b>:
			</p>
			<p>
				Most likely before poor moodyrocket purchases the wallet, the attacker must have initialized the device, copied the seed, and repackaged the device with the "seed card".
			</p>
			<p>
				moodyrocket enters the pre-initialized seeds, giving the attacker access to whatever he/she transfers onto the wallet.
			</p>
			<p>
				moodyrocket adds funds.
			</p>
			<p>
				The attacker, keeping track of the addresses of the compromised Ledger, sees a significant amount added to the wallet, transfers the funds out, moves it around, and game over.
			</p>
			<p>
				<b><i>Note</b></i>:
			</p>
			<p>
				This is not a hack. The device's security was not breached. This was a user error.
			</p>
			<p>
				Ledger CEO, and CTO responded, respectively
				<br/><span class="hack-body-quote">
				Please contact us directly by PM with your email. We'll put you in touch with our General Counsel so we can help you file a formal criminal complaint and bring the eBay seller to justice.
				<br/><br/>
				We'll contact you privately /u/moodyrocket and assist you in filling a police complaint against the seller.
 				</span>
				Although probably fruitless, high-class support usually not found in the space.
			</p>
			<p>
				<i>Don't trust. Verify.</i>
			</p>
		</br>
		`
	},
	{
		name: 'Enigma ICO hacked',
		date: [2017, 8, 20],
		amount: 500000,
		amountAbbreviated: '1m',
		description: ``
	},
	{
		name: 'Veritaserum Wallet Hack',
		date: [2017, 7, 23],
		amount: 8000000,
		amountAbbreviated: '8m',
		description: ``
	},
	{
		name: 'Parity Multisig Wallet Hack',
		date: [2017, 7, 19],
		amount: 32000000,
		amountAbbreviated: '32m',
		description: ``
	},
	{
		name: 'CoinDash ICO Hack',
		date: [2017, 7, 17],
		amount: 7000000,
		amountAbbreviated: '7m',
		description: ``
	},
	{
		name: 'Bitfinex Hack',
		date: [2016, 8, 2],
		amount: 66000000,
		amountAbbreviated: '66m',
		description: ``
	},
	{
		name: 'Steemit Hack',
		date: [2016, 7, 14],
		amount: 85000,
		amountAbbreviated: '85k',
		description: ``
	},
	{
		name: 'DAO Hack',
		date: [2016, 6, 18],
		amount: 50000000,
		amountAbbreviated: '50m',
		description: ``
	},
	{
		name: 'Bitstamp Hacked',
		date: [2015, 1, 5],
		amount: 5000000,
		amountAbbreviated: '5m',
		description: ``
	},
	{
		name: 'Mt. Gox Hack',
		date: [2014, 2, 7],
		amount: 473000000,
		amountAbbreviated: '473m',
		description: ``
	},
	{
		name: 'Bitcoin Protocol Hack',
		date: [2010, 8, 15],
		amount: 184000000000,
		amountAbbreviated: '184b',
		description: ``
	}
];
