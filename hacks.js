export const lastUpdate = 'December 10th, 2017';

export const hacks = [
	/* TEMPLATE
  {
    name: '', Keep it short
    amount: 0, Integer
		amountAbbreviated: '1.1m', < 4 #s
    date: '', [year, month, day] ints, month is 0 indexed (Jan = 0)
    description: ''
  },
	.hack-body-link for links
	.hack-body-image for pix
  */
	{
		name: 'Ledger Hardware Wallet MiM Scam',
		date: [2018, 0, 5],
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
		name: 'Confido ICO Exit Scam',
		amount: 375000,
		amountAbbreviated: '375k',
		date: [2017, 11, 17],
		description: `
			<p>
				Confido, an ICO with that billed itself with the buzzword functionality of "smart contracts for escrow", disapppeared post fundraising.
			</p>
			<p>
				The company raised $375,000 through <a class="hack-body-link" href="https://www.tokenlot.com/">TokenLot</a>, seeing it's "contracts for differences" token hit a peak of $1.40 per, before disappearing.
			</p>
			<p>
				<b><u>The Vanishing Act</b></u>:
			</p>
			<p>
				Within a month of the ICO, all information regarding Confido's founders and company had been deleted, including the "firm's" website, Twitter account, and Facebook page.
			</p>
			<p>
				When the shit hit the fan, a Medium post from Confido and thought to be authored by Confido CEO, Joost van Doorn, still existed. In it, the author is quoted as saying:
				<span class="hack-body-quote">
					We are in a "tight spot" due to "legal trouble" with a contract
				</br></br>
					"We signed the contract with assurance from our legal advisor that there was minimal risk and it would not be an issue. I can't and won't go into details, but he was wrong. It is a problem"
				</span>
			</p>
			<p>
				This won't come as a surprise, but post-exit scam there was no trace of Joost van Doorn online. All that exists is <a class="hack-body-link" href="https://web.archive.org/web/20171119114311/http://confido.io/">this bio</a> from a cached copy of Confido's webpage.
			</p>
			<p>
				In early December, <a class="hack-body-link" href="https://www.reddit.com/r/CryptoCurrency/comments/7e8p15/official_announcement_from_chrisconfidosupport/?st=ja9g27vp&sh=2db3de1a">a Reddit thread</a> was posted by a "Chris-ConfidoSupport", an anonymous representative of Confido, that stated:
				<span class="hack-body-quote">
					"Look I have absolutely no idea what happened here. The removal of all of our social media platforms and website has come as a complete surprise to me."
				</br></br>
					"I have been in contact with Joost for a number of weeks and this is completely out of character for him. Last I spoke to him he was extremely distressed...There is potential that the removal of everything was due to the legal situation that they are facing, which is possible as I got the feeling that the situation was dire."
				</span>
			</p>
			<p>
				It was met with skepticism and no rectification.
			</p>
			<p>
				TokenLot later released a <a class="hack-body-link" href="https://medium.com/@tokenlot/statement-regarding-confido-683c0ec17efe"> statement</a> calling the move an exit scam.
			</p>
			<p>
				In it they add that some amount of Ether from the ICO was sent to Bittrex to an account where KYC was ensured.
				</br>
				Bittrex's privacy policy requires a law enforcement request to release customer information, to which TokenLot says they are reaching out to the FBI for.
			</p>
		</br>
		`
	},
	{
		name: 'Enigma ICO hacked',
		date: [2017, 7, 20],
		amount: 500000,
		amountAbbreviated: '500k',
		description: `
		<p>
			With a name like Enigma, a cryptocurrency startup that touted <a class="hack-body-link" href="https://www.wired.com/2015/06/mits-bitcoin-inspired-enigma-lets-computers-mine-encrypted-data/"> "ultra-secure products"</a>, this one must have really been an uh...............................enimga.
		</p>
		<p>
			Before the hack, Enigma was seen as a promising company out of MIT that had a healthy and engaged community.
		</p>
		<p>
			Its ICO, planned for September 11, 2016, had a good amount of hype going into it, and this was before the ~Token Mania~ that followed.
		</p>
		<p>
			<b><u>Then things got phishy</b></u>:
		</p>
		<p>
			Some time before the ICO, Enigma CEO, Guy Zsking's email credentials had been dumped on the web. Thankfully for some enterprising scammers, the CEO of ~ultra-secure stuff~ hadn't changed his password. Oh, and his company didn't use 2FA.
		</p>
		<p>
			With this new found access to the Enigma CEO's credentials, the scammers began a campaign for a Pre(!)-ICO on the company's webpage, Slack channel, and mailing list.
		</p>
		<p>
			<b><u>The attack</b></u>:
		</p>
		<p>
			Deactivated Zyskind's access to Slack, the website, and the Google presale form
		</br>
			Accessed the website (on Heroku), changed the ETH/BTC addresses to their own
		</br>
			Spammed the email list from a comprised Google account
		</br>
			Kicked admins out of the Slack channel and spammed away
		</p>
		<p>
			Some of the community saw fraudulence, some guppies were DOWN FOR THE CAUSE, leaving the scammer's wallet stuffed with 1,492eth (~$500k).
		</p>
		<p>
			Enigma and Zyskind initially denied the credential story but <a class="hack-body-link" href="https://www.reddit.com/r/ethtrader/comments/6v0vei/warning_enigma_website_and_slack_probably_hacked/"> a few redditors </a> uncovered the incompetence.
		</p>
		<p>
			Oh and if you're interested in doing more reading, here's Enigma's other cofounder, Can Kisagun's (who's last name could not be more of a pun) blog post for <a class="hack-body-link" href="http://www.businessinsider.com/ethereum-price-ico-hack-2017-7">"a simple solution for preventing ICO hacks!"</a>, a month before their own.
		</p>
	</br>
		`
	},
	{
		name: 'Veritaserum Wallet Hack',
		date: [2017, 6, 23],
		amount: 8000000,
		amountAbbreviated: '8m',
		description: `
			<p>
				Veritaserum, a company who's functionality was murky, agreed to in this <a class="hack-body-link" href="https://news.ycombinator.com/item?id=14845550">Hacker News thread</a>, had $8m siphoned from their ICO.
			</p>
			<p>
				Details are still murky, foil-hats would say inside job, but this is what CEO, Reggie Middleton, said post hack:
				<span class="hack-body-quote">
					“The hackers thwarted 2FA, on two different accounts, and finaggeled 3rd parties security among several other things. They went through quite a bit of effort, alas going through that much effort caused them to leave a bread crumb trail as well. I hate thieves”
				</span>
				and
				<span class="hack-body-quote">
				"We were hacked, possibly by a group. The hack seemed to be very sophisticated, but there's at least one corporate partner that may have dropped the ball and be liable. We will let the lawyers sort that out if it goes that far"
				</span>
				and
				<span class="hack-body-quote">
				"There are 100M tokens issued; the hackers stole about 37k. As I said, it is quite disconcerting, but it is not the end [of] the world. In the scheme of things, this is small," Middleton says.
				</br>
				"The tokens were stolen from me, not the token buyers. I am not downplaying the seriousness of the heist either, but I am looking at the heist for what it is. A company that we use was compromised, the vulnerability was closed, and we are investigating whether we should move against that company or not."
				</span>
			</p>
			<p>
				Thank goodness $8.7m is small.
			</p>
			<p>
				And even better, the attack vector wasn't disclosed.
			</p>
		</br>
		`
	},
	{
		name: 'Parity MultiSig Hack 2',
		date: [2017, 10, 7],
		amount: 15000000,
		amountAbbreviated: '150m',
		description: `
			<p>
				Ahh, Parity. This is a good one.
			</p>
			<p>
				(At the time), Parity provided MultiSig wallets to many people/companies/ICOs in the ETHosphere.
			</p>
			<p>
				<b><u>Attack Via Water Pistol</b></u>:
			</p>
			<p>
				Someone named @devops199 with a pictureless, empty github account, who's sole contribution is "Joined Github", posts this:
			</p>
			<img class="hack-body-image" src="https://cdn-images-1.medium.com/max/800/1*4Ywx3BotQjsZ8yrvEl-5jA.png" />
			<p>
				Now, devops199 comes across as innocent and curious, after revealing the kill, he posts:
			</p>
			<img class="hack-body-image" src="https://cdn-images-1.medium.com/max/800/1*oYpTJt7El9zCqXwWAX8GXg.png" />
			<p>
				<a class="hack-body-link" href="https://blog.artoken.io/statement-on-the-parity-multi-sig-wallet-vulnerability-and-the-cappasity-artoken-crowdsale-b3a3fed2d567">Some don't believe the mistake shtick</a> as devops199 would've had to have called a method to initialize the Parity base library (where the vulnerability was) and called a "kill" method on the library to self destruct it.
			</p>
			<p>
				Either way, $150m worth of ETH got frozen. Not good.
			</p>
		</br>
		`
	},
	{
		name: 'CoinDash ICO Hack',
		date: [2017, 6, 17],
		amount: 7000000,
		amountAbbreviated: '7m',
		description: ``
	},
	{
		name: 'Bitfinex Hack',
		date: [2016, 7, 2],
		amount: 66000000,
		amountAbbreviated: '66m',
		description: ``
	},
	{
		name: 'Steemit Hack',
		date: [2016, 6, 14],
		amount: 85000,
		amountAbbreviated: '85k',
		description: ``
	},
	{
		name: 'DAO Hack',
		date: [2016, 5, 18],
		amount: 50000000,
		amountAbbreviated: '50m',
		description: ``
	},
	{
		name: 'Bitstamp Hacked',
		date: [2015, 0, 5],
		amount: 5000000,
		amountAbbreviated: '5m',
		description: ``
	},
	{
		name: 'Mt. Gox Hack',
		date: [2014, 1, 7],
		amount: 473000000,
		amountAbbreviated: '473m',
		description: ``
	},
	{
		name: 'Bitcoin Protocol Hack',
		date: [2010, 7, 15],
		amount: 184000000000,
		amountAbbreviated: '184b',
		description: ``
	}
];
