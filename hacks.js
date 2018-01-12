export const lastUpdate = 'January 11th, 2018';

export const hacks = [
	/* TEMPLATE
  {
    name: '', Keep it short
    amount: 0, Integer
		amountAbbreviated: '1m', < 4 #s
    date: '[year, month, day]', ints, month is 0 indexed (Jan = 0)
    description: `
			<p>
			</p>
			</br>
		`
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
				<b><u>The Setup</u></b>:
			</p>
			<p>
				moodyrocket purchases a second-hand <a class="hack-body-link" href="https://www.ledgerwallet.com/products/ledger-nano">Ledger Nano<a/> hardware wallet off of eBay.
			</p>
			<p>
				Included with the Nano is a seemingly legit (to the uninitiated), recovery word paper.
			</p>
			<p>
				moodyrocket comments:
				<span class="hack-body-quote">
					The Ledger came with a recovery sheet which had a 24 word recovery seed, to see the seed I had to scratch off the silver foil/paint that was covering it.
				</span>
			</p>
				<img class="hack-body-image" src="https://i.imgur.com/DsICkge.jpg"></img>
			<p>
				<b><u>The Attack</u></b>:
			</p>
			<p>
				Most likely before poor moodyrocket purchased the wallet, the attacker must have initialized the device, copied the seed and repackaged the device with the "seed card".
			</p>
			<p>
				moodyrocket enters the pre-initialized seeds, giving the attacker access is transferred onto the wallet.
			</p>
			<p>
				moodyrocket adds funds.
			</p>
			<p>
				The attacker, keeping track of the addresses of the compromised Ledger, sees a significant amount added to the wallet, transfers the funds out, moves it around, and game over.
			</p>
			<p>
				<b><u>The Resolution</u></b>:
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
				<b><i>Note</b></i>
			</p>
			<p>
				This is not a hack. The device's security was not breached. This was a user error.
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
				The company raised $375,000 through <a class="hack-body-link" href="https://www.tokenlot.com/">TokenLot</a>, seeing it's "contracts for differences" token hit a peak of $1.40 per before dropping out of sight.
			</p>
			<p>
				<b><u>The Vanishing Act</b></u>:
			</p>
			<p>
				Within a month of the ICO, all information regarding Confido and its founders had been deleted, including the firm's website, Twitter account, and Facebook page.
			</p>
			<p>
				When the shit hit the fan, a Medium post from Confido (thought to be authored by Confido CEO, Joost van Doorn) still existed. In it, the author is quoted as saying:
				<span class="hack-body-quote">
					We are in a "tight spot" due to "legal trouble" with a contract.
				</br></br>
					"We signed the contract with assurance from our legal advisor that there was minimal risk and it would not be an issue. I can't and won't go into details, but he was wrong. It is a problem."
				</span>
			</p>
			<p>
				This won't come as a surprise, but post-exit scam there was no trace of Joost van Doorn online. All that exists is <a class="hack-body-link" href="https://web.archive.org/web/20171119114311/http://confido.io/">this bio</a> from a cached copy of Confido's webpage.
			</p>
			<p>
				Later, <a class="hack-body-link" href="https://www.reddit.com/r/CryptoCurrency/comments/7e8p15/official_announcement_from_chrisconfidosupport/?st=ja9g27vp&sh=2db3de1a">a Reddit thread</a> was posted by a "Chris-ConfidoSupport", an anonymous representative of Confido, that stated:
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
				<b><u>The Resolution</u></b>:
			</p>
			<p>
				TokenLot later released a <a class="hack-body-link" href="https://medium.com/@tokenlot/statement-regarding-confido-683c0ec17efe"> statement</a> explicitly calling the move an exit scam.
			</p>
			<p>
				In it they add that some amount of Ether from the ICO was sent to Bittrex to an account where KYC was ensured.
			</p>
			<p>
				Bittrex's privacy policy requires a law enforcement request to release customer information, to which TokenLot said they would reach out to the FBI for.
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
			With a name like Enigma, a cryptocurrency startup that touted <a class="hack-body-link" href="https://www.wired.com/2015/06/mits-Bitcoin-inspired-enigma-lets-computers-mine-encrypted-data/"> "ultra-secure products"</a>, this one must have really been an uh...............................enigma.
		</p>
		<p>
			Before the hack, Enigma was seen as a promising startup out of MIT that had a healthy and engaged community.
		</p>
		<p>
			Its ICO, planned for September 11, 2017, had a good amount of hype going into it, and this was even before the ~Token Mania~ that followed.
		</p>
		<p>
			<b><u>Then Things Got Phishy</b></u>:
		</p>
		<p>
			Some time before the ICO, Enigma CEO Guy Zsking's email credentials had been dumped on the web. Thankfully for some enterprising scammers, the CEO of ~ultra-secure stuff~ hadn't changed his password. And the company didn't require 2FA.
		</p>
		<p>
			With this new found access to the Enigma CEO's credentials, the scammers began a campaign for a Pre(!)-ICO on the company's webpage, Slack channel, and mailing list.
		</p>
		<p>
			<b><u>The Attack</b></u>:
		</p>
		<p>
			1) Deactivated Zyskind's access to Slack, the Enigma website, and the Google presale form.
		</br>
			2) Accessed the website (on Heroku), changed the ETH/BTC addresses to their own.
		</br>
			3) Spammed the email list from a comprised Google account.
		</br>
			4) Kicked admins out of the Slack channel and spammed away.
		</p>
		<p>
			Some of the community saw fraudulence but some were less diligent, leaving the scammer's wallet stuffed with 1,492ETH (~$500,000).
		</p>
		<p>
			<b><u>The Response</b></u>:
		</p>
		<p>
			Enigma and Zyskind initially tried to play down the credential story but <a class="hack-body-link" href="https://www.reddit.com/r/ethtrader/comments/6v0vei/warning_enigma_website_and_slack_probably_hacked/"> a few redditors </a> uncovered the incompetence.
		</p>
		<p>
			Oh and if you're interested in doing more reading, here's Enigma's other cofounder Can Kisagun's (who's last name could not be more of a pun) blog post for <a class="hack-body-link" href="http://www.businessinsider.com/ethereum-price-ico-hack-2017-7">"a simple solution for preventing ICO hacks!"</a>, a month before their own. Irony is dead.
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
				Veritaserum, a company who's functionality was a little murky, agreed to in this <a class="hack-body-link" href="https://news.ycombinator.com/item?id=14845550">Hacker News thread</a>, had $8m siphoned from their ICO.
			</p>
			<p>
				Details of what exactly happened are still suspect, foil-hats would say inside job, but this is what CEO, Reggie Middleton, said post hack:
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
				$8.7m is small  ¯\_(ツ)_/¯
			</p>
			<p>
				The true attack vector was never publicly disclosed.
			</p>
		</br>
		`
	},
	{
		name: 'Tether Hack',
		amount: 31000000,
		amountAbbreviated: '31m',
		date: [2017, 10, 21],
		description: `
			<p>
				Tether is a Santa Monica company that offers a USD-pegged cryptocurrency widely used in the market's exchange rate. On November 21, 2017, they were hacked for $30m USDT (the pegged coin).
			</p>
			<p>
				<b><u>The Attack</b></u>:
			</p>
			<p>
				Details are still scant on what exactly happened, which doesn't help a company that some see as fraudulent (see <a class="hack-body-link" href="https://twitter.com/bitfinexed">@Bitfinexed</a>, <a class="hack-body-link" href="https://medium.com/@bitfinexed/bitfinex-never-repaid-their-tokens-bitfinex-started-a-ponzi-scheme-86a9291add29">this post</a> and <a class="hack-body-link" href="https://medium.com/@bitfinexed/the-bitfinex-dilemma-blow-up-now-or-try-a-hail-mary-to-retain-in-business-10b9d989359f">this post</a>).
			</p>
			<p>
				<b><u>The Response</b></u>:
			</p>
			<p>
				The company released a statement saying:
				<span class="hack-body-quote">
					$30,950,010 USDT was removed from the Tether Treasury wallet on Nov. 19, 2017 and sent to an unauthorized Bitcoin address. As Tether is the issuer of the USDT managed asset, we will not redeem any of the stolen tokens, and we are in the process of attempting token recovery to prevent them from entering the broader ecosystem.
				</span>
			</p>
			<p>
				Tether then said they would release a new version of the Omni Core software client (which Tether runs on top of), essentially a hard fork allowing them to blacklist the stolen address and freeze the stolen funds.
			</p>
			<p>
				<i>This move raises questions</i>:
			</p>
			<p>
				Who actually controls the Omni ledger to be able to perform these forks/freezes?
				</br>
				When will this be used again?
				</br>
				What justifies a blacklist?
				</br>
				Can this be used on any address?
			</p>
			<p>
				<b><i>Note</b></i>
			</p>
			<p>
				This hack was committed <a class="hack-body-link" href="https://www.reddit.com/r/Bitcoin/comments/7ehseb/tether_was_hacked_by_the_same_person_who_hacked/">by the same person who hacked Bitstamp in 2015</a>
			</p>
			<p>
				The following is a visualization of the transactions committed in the attack (<a class="hack-body-link" href="https://elementus.io/blog/tether-hack/"> see link</a>):
			</p>
			<img class="hack-body-image" src="https://s3.us-east-2.amazonaws.com/elementus-assets/tether-all-transactions.png" />
			</br>
		`
	},
	{
		name: 'Parity MultiSig Hack 2',
		date: [2017, 10, 7],
		amount: 150000000,
		amountAbbreviated: '150m',
		description: `
			<p>
				History repeats itself.
			</p>
			<p>
				Very quickly sometimes.
			</p>
			<p>
				Parity provides MultiSig wallets to many people/companies/ICOs in the ETHosphere. On this occasion, someone suicided the core wallet library leading to $150m worth of frozen ETH.
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
				<b><u>What Happened</b></u>:
			</p>
			<p>
				The Parity MultiSig WalletLibrary contract (deployed 1(!) day after the previous hack) contained a bug allowing anyone to execute an initialize call, effectively making them owner of the wallet's core library.
			</p>
			<p>
				And that's exactly what devops199 did. Then (s)he called a kill method on the newly owned WalletLibrary, removing it from the blockchain.
			</p>
			<p>
				Since all Parity MultiSig wallets delegate calls to the WalletLibrary contract, they no longer had the logic to send funds.
			</p>
			<p>
				devops199 knew he made a whoopsie.
				<img class="hack-body-image" src="https://cdn-images-1.medium.com/max/800/1*Bjv0cAbZLmLOg_pXQWZKag.png" />
			</p>
			<p>
				<b><u>The Response</b></u>:
			</p>
			<p>
				@ParityTech tweeted:
				<span class="hack-body-quote">
					UPDATE: A user exploited an issue and thus removed the library code, as it seems unaware of the consequences.
				</span>
				<span class="hack-body-quote">
					This froze funds in all Parity multi-sig wallets deployed after 20 July. We are analysing the situation and release further details shortly.
				</span>
			</p>
			<p>
				Chikun took some jabs:
				<img class="hack-body-image" src="https://steemitimages.com/0x0/https://steemitimages.com/DQmWXPuGKSQJkxD9b2Fw7VZhM6KupqUCNirkXCUYQPqUw2t/image.png" />
			</p>
			<p>
				<a class="hack-body-link" href="https://blog.artoken.io/statement-on-the-parity-multi-sig-wallet-vulnerability-and-the-cappasity-artoken-crowdsale-b3a3fed2d567">Some didn't believe the mistake shtick.</a>
			</p>
			<p>
				Goodbye devops199, it was fun.
				<img class="hack-body-image" src="https://cdn-images-1.medium.com/max/800/1*GwiGl3ksNGFFXJZzZy3NbQ.png"/>
			</p>
		</br>
		`
	},
	{
		name: 'Parity MultiSig Hack 1',
		date: [2017, 6, 19],
		amount: 32000000,
		amountAbbreviated: '32m',
		description: `
			<p>
				Parity provides MultiSig wallets to many people/companies/ICOs in Ethereum. Here, a vulnerability allowed an attacker to drain 153,037ETH ($32m) from three large MultiSig contracts which stored funds from past token sales (Edgeless Casino, Swarm City and æternity blockchain).
			</p>
			<p>
				<b><u>The Attack</b></u>:
			</p>
			<p>
				1) The attacker took control of Parity's WalletLibrary (the core logic of all Parity contracts) with a simple initialization call.
				</br>
				2) They then set the ownership address to their own address.
				</br>
				3) Then they moved the funds from the three ICO wallets to their address.
			</p>
			<p>
				Easy peasy.
			</p>
			<p>
				<b><u>The Response</b></u>:
			</p>
			<p>
				Parity released a statement:
				<span class="hack-body-quote">
					“A vulnerability in Parity Wallet’s variant of the standard multi-sig contract has been found - Immediately move assets contained in the multi-sig wallet to a secure address”
				</span>
			</p>
			<p>
				Because this vulnerability hit Parity's core library, <i>all</i> Parity MultiSig wallets were at risk, not just the three wallets mentioned above.
			</p>
			<p>
				Luckily for the community, a group of white hat hackers came to the rescue, draining the funds of other vulnerable wallets and later refunding them ($180m worth!).
				<img class="hack-body-image" src="https://steemitimages.com/DQmYvBBcra97GGRVYSsXCmCE3Ee1fcpxRV9cqJVaQAPzd8S/image.png"/>
			</p>
		</br>
		`
	},
	{
		name: 'CoinDash ICO Hack',
		date: [2017, 6, 17],
		amount: 7300000,
		amountAbbreviated: '7m',
		description: `
		<p>
			Relatively unknown Isreali trading startup CoinDash has $7.3m siphoned from their ICO.
		</p>
		<p>
			<b><u>The Attack</b></u>:
		</p>
		<p>
			Minutes into CoinDash's ICO, an attacker was able to change the ETH address listed on the ICO's website.
		</p>
		<p>
			<i>But that's too easy, would've gotten noticed right away.</i>
		</p>
		<p>
			Instead of <i>just</i> leaving a static fraudlent address, the attacker had the CoinDash website switch between the correct address and the malicious address.
		</p>
		<p>
			This hide-and-seek method allowed the attacker to delay dectection, resulting in them escaping with the stolen ETH before CoinDash noticed.
		</p>
		<p>
			<b><u>The Response</b></u>:
		</p>
		<p>
			Was concurrent. CoinDash did discover the hack, immediately stopping the ICO (albeit only raising $6.4m themselves).
		</p>
		<p>
			The company vowed to distribute the tokens to those who sent their tokens to the wrong address. Good on them.
		</p>
		</br>
		`
	},
	{
		name: 'Bitfinex Hack',
		date: [2016, 7, 2],
		amount: 66000000,
		amountAbbreviated: '66m',
		description: `
		<p>
			In the second-biggest hack of an exchange at the time, ~120,000BTC were stolen from Bitfinex at a valuation of $72m.
		</p>
		<p>
			<b><u>The Attack</b></u>:
		</p>
		<p>
			Exploited a vulnerability in Bitfinex's MultiSig setup.
		</p>
		<p>
			Bitfinex's MultiSig setup at the time consisted of a 2-of-3 key arrangement, where Bitfinex stored one key online, one key offline, and the company BitGo held the third.
			</br>
			It's assumed that for a large transaction, BitGo would've needed to have signed off on the transaction.
			</br>
			Having BitGo as an additional security layer would have allowed for Bitfinex to reduce the use of cold storage wallets, allowing more customer funds to be stored in hot wallets.
		</p>
		<p>
			But when the Bitfinex servers were hacked, the attackers not only got Bitfinex to sign off on the withdrawls, but BitGo as well.
		</p>
		<p>
			<b><u>The Response</b></u>:
		</p>
		<p>
			BitGo publicly stated <a class="hack-body-link" href="https://twitter.com/BitGo/status/760624908334346240">that their servers were not compromised,</a> meaning they didn't lose a key.
		</p>
		<p>
			This led to speculation that Bitfinex's MultiSig setup was either broken or purposefully setup so that BitGo would auto-approve any Bitfinex requests. If this proved to be true, the SPoF was just getting into Bitfinex's servers, no different than just using a hot wallet.
		</p>
		<p>
			Later, Bitfinex would go on to issue "Recovery Rights Tokens" or "BFX" as an IOU to customers.
		</p>
		<p>
			<b><u>The Aftermath</b></u>:
		</p>
		<p>
			On April 3, 2017, Bitfinex announced it would buy <a class="hack-body-link" href="https://www.bitfinex.com/posts/198"> back all of its BFX "hack" tokens</a> at face value, reimbursing the lost funds.
		</p>
		</br>
		`
	},
	{
		name: 'Steemit Hack',
		date: [2016, 6, 14],
		amount: 85000,
		amountAbbreviated: '85k',
		description: `
		<p>
			Steemit is a social media website where users get paid for noteworthy content. All content hosted on the website is posted on the Steem blockchain, with each account associated with a Steem wallet with which users are able to claim Steem Dollar/Steem rewards.
		</p>
		<p>
			<b><u>The Attack</b></u>:
		</p>
		<p>
			On July 14, 2016, Steemit was subjected to an attack leading to 260 compromised Steem accounts and ~$85k worth of Steem and Steem Dollars being taken by attackers.
		</p>
		<p>
			<b><u>The Resolution</b></u>:
		</p>
		<p>
			CEO Ned Scott <a class="hack-body-link" href="https://steemit.com/steemit/@steemitblog/important-security-announcement-steemit-ceo-ned-scott">released a statement</a> stating that,
			<span class="hack-body-quote">
				The hack has now been contained. User accounts and wallets are not at risk, and we hope to soon reactivate the Steemit website to normal order. Any users whose accounts were compromised will be completely reimbursed.
			</span>
			<span class="hack-body-quote">
				We have reported the hack to police and other cyber crime authorities, including the FBI. A full, internal investigation is currently being conducted and we are working on an immediate solution.
			</span>
			<span class="hack-body-quote">
				Partner exchange Bittrex was informed of the compromise and is actively helping the investigation. As a precaution, they have temporarily suspended the ability to deposit or withdrawal Steem and Steem Dollars from their exchange.
			</span>
		</p>
		<p>
			<b><i>Note</b></i>
		</p>
		<p>
			This highlights the risk of having a centralized database store wallets.
		</p>
		</br>
		`
	},
	{
		name: 'DAO Hack',
		date: [2016, 5, 18],
		amount: 50000000,
		amountAbbreviated: '50m',
		description: `
		<p>
			The Decentralized Autonomous Organization (DAO) was one of Ethereum's early flagship projects. It was likely promoted by the Ethereum Foundation to highlight the network's Turing-completeness smart contracts, a promotion that would turn out to cause confliction.
		</p>
		<p>
			The basic premise of the DAO was to put the decision-making process of an organization into code, creating decentralized governance, void of a hierarchical governance system.
		</p>
		<p>
			The process would go <a class="hack-body-link" href="https://www.coindesk.com/understanding-dao-hack-journalists/">as follows</a>:
			</br>
			1) Smart contracts dictating organizational functionality are made.
			</br>
			2) DAO holds an ICO on April 30th, 2016, with a 28-day funding period. It would go on to become the largest crowdfund in history, raising > $150m from 11,000 contributors.
			</br>
			3) Post-ICO, DAO begins to operate.
			</br>
			4) People make proposals to the DAO on how to spend the money and those with DAO tokens vote to approve proposals.
		</p>
		<p>
			<b><u>What Went Wrong</b></u>:
		</p>
		<p>
			Step 1). The smart contract code had a critical vulnerability which allowed an attacker to create a "child DAO" with the same structure as the DAO.
		</p>
		<p>
			The attacker then drained 3.6m ETH from the real DAO into the child DAO, dropping the price of ETH from $20 to $13:
		</p>
		<img class="hack-body-image" src="https://i.imgur.com/ppWQMoI.jpg" />
		<p>
			Attempts were made to split the DAO to prevent more DAO ETH from being taken but the slow (and virgin) process of decentralized voting couldn't get the votes necessary to complete the action in time.
		</p>
		<p>
			Another reason for the failure: The contract designers didn't prepare for this much money, having all of the funding at <i>one address.</i>
		</p>
		<p>
			Because the child DAO was a product of the DAO's code itself, it was subject to the same 28-day funding period, meaning the attacker had to wait to cash in the money. If the hacker knew this, (s)he could've just blown the project up with the intention of cashing a large short position on ETH in the aftermath.
		</p>
		<p>
			<b><u>The Response</b></u>:
		</p>
		<p>
			ETH co-founder Vitalik Buterin issued <a class="hack-body-link" href="https://blog.ethereum.org/2016/06/17/critical-update-re-dao-vulnerability/"> a statement</a>, saying:
			<span class="hack-body-quote">
				A software fork has been proposed, (with NO ROLLBACK; no transactions or blocks will be “reversed”) which will make any transactions that make any calls/callcodes/delegatecalls that reduce the balance of an account with code hash0x7278d050619a624f84f51987149ddb439cdaadfba5966f7cfaea7ad44340a4ba (ie. the DAO and children) lead to the transaction (not just the call, the transaction) being invalid …
			</span>
			<span class="hack-body-quote">
				Miners and mining pools should resume allowing transactions as normal, wait for the soft fork code and stand ready to download and run it if they agree with this path forward for the Ethereum ecosystem. DAO token holders and ethereum users should sit tight and remain calm. Exchanges should feel safe in resuming trading ETH.
			</span>
		</p>
		<p>
			This essentially meant Ethereum would blacklist the attacker's address and freeze the stolen assets.
		</p>
		<p>
			Then the attacker responds (some have pointed out that the cryptographic signature isn't valid, up for debate) in an open letter, <a class="https://pastebin.com/CcGUBgDG">stating</a>:
			<span class="hack-body-quote">
				I have carefully examined the code of The DAO and decided to participate after finding the feature where splitting is rewarded with additional ether. I have made use of this feature and have rightfully claimed 3,641,694 ether, and would like to thank the DAO for this reward. It is my understanding that the DAO code contains this feature to promote decentralization and encourage the creation of "child DAOs".
			</span>
			<span class="hack-body-quote">
				I am disappointed by those who are characterizing the use of this intentional feature as "theft". I am making use of this explicitly coded feature as per the smart contract terms and my law firm has advised me that my action is fully compliant with United States criminal and tort law. For reference please review the terms of the DAO:
			</span>
			<span class="hack-body-quote">
				A soft or hard fork would amount to seizure of my legitimate and rightful ether, claimed legally through the terms of a smart contract. Such fork would permanently and irrevocably ruin all confidence in not only Ethereum but also the in the field of smart contracts and blockchain technology. Many large Ethereum holders will dump their ether, and developers, researchers, and companies will leave Ethereum. Make no mistake: any fork, soft or hard, will further damage Ethereum and destroy its reputation and appeal.
			</span>
		</p>
		<p>
			The response was well-written and well though out: The premise of smart contracts is that nothing outside of the core code can change the rules of a transaction.
		</p>
		<p>
			Later, through a third-party, the attacker claimed (s)he would put a stop to the "theft" of their property by rewarding miners who didn't go along with the proposed fork.
			<span class="hack-body-quote">
				[S]oon we will have a smart contract to reward miners who oppose the soft fork and mines the transaction. 1m ETH + 100 BTC will be shared with miners.
			</span>
		</p>
		<p>
			Then a more aggressive proposal came forth: a hard fork. DAO lead Stephan Tual on the hard fork:
			<span class="hack-body-quote">
				By 4pm local time, the consensus was that should a soft fork be deployed within 27 days, the attacker would not be able to retrieve the funds he had stashed into a child DAO.
				A subsequent hard fork could even return all ether, including the DAO’s ‘extraBalance’ and the stolen funds, back into a smart contract. That smart contract would contain a single function: withdraw().
				This would make it possible for everyone who participated in the DAO to withdraw their funds: thanks to the support of the miners, and because nothing had been spent so far, nothing would be lost.
			</span>
		</p>
		<p>
			The community responded in a lengthy <a class="hack-body-link" href="https://www.reddit.com/r/ethereum/comments/4oiqj7/critical_update_re_dao_vulnerability" />Reddit thread</a>:
			<span class="hack-body-quote">
				The involvement of the ethereum foundation in the DAO has been and is a mistake. As I see it ethereum is supposed to be the foundational infrastructure upon which a flurry of projects and experiments are supposed to blossom, and in order for them to blossom they need a foundation that is strong, and that has integrity in the face of challenges. The hard fork proposal is a compromise that ruins that integrity and signals that projects like the DAO can influence the underlying foundation to their own advantage. To me that is totally unacceptable and is a departure from the principles that drew me to ethereum.
			</span>
			Basically saying: Hard forks should be used for emergency modifications to the protocol, not for projects that run on Ethereum.
		</p>
		<p>
			The Ethereum Foundation's involvement and promotion of the DAO proved to be conflicting.
			<span class="hack-body-quote">
				I made a bad contract in the first days ETH was online and lost 2K ETH with it, can I also get it back? Thanks!
			</span>
			<span class="hack-body-quote">
				Ethereum worked exactly as intended. I don’t believe software should be updated when it works exactly as intended. You assume the risks of your investment. If you don’t understand your investment, you assume unknown risk. Anything else is a bailout by a central authority, i.e. the antithesis of the crypto world. In a related way, this is why Lehman Brothers was allowed to fail – because the deal is the deal, and if you bend the rules for a particular player, all other players will want special treatment, too.
			</span>
		</p>
		<p>
			<b><u>The Resolution</b></u>:
		</p>
		<p>
			Ethereum hard forked the blockchain, resulting in the crowdsale funds being distributing back to the original investors and an erasure of the DAO on the Ethereum blockchain.
		</p>
		<p>
			This was a very controversial move – as it conceptually destroyed one of the pillars of a decentralized currency and smart contracts: immutability. Bitcoin was created almost as a direct reaction to the financial crisis of 2008 and the US government's infamous bank bailout. This "Too Big To Fail" hard fork went against the moral principles of <i>many</i> believers in the space.
		</p>
		<p>
			The result of this has been continued work on the original Ethereum chain, now known as Ethereum Classic (ETC).
		</p>
		<p>
			Ethereum may never fully regain the 100% community confidence for this action.
		</p>
		</br>
		`
	},
	{
		name: 'Bitstamp Hacked',
		date: [2015, 0, 5],
		amount: 5000000,
		amountAbbreviated: '5m',
		description: `
		<p>
			Luxembourg exchange Bitstamp was hacked for 19,000 BTC which was worth about $5m at the time.
		</p>
		<p>
			<b><u>The Attack</b></u>:
		</p>
		<p>
			A malicious actor did background checks on various Bitstamp employees.
			</br>
			Said actor then initiated a weeks-long phising campaign, soliciting Bitstamp employees over Skype and email.
			</br>
			Eventually, the attacker was able to get a sys-admin, Luka Kodric, to download a document that contained a VB script which pulled malware from the internet.
			</br>
			Then, using Kodric's credentials, the attacker was able to access two servers – both of which were required to access the Bitstamp wallet.dat (hot wallet), emptying it into their account.
		</p>
		<p>
			Luckily, most of Bitstamp's BTC was stored in cold wallets. At the time of the hack, its most recent proof-of-reserve showed that it held ~183k BTC in cold storage - or about $97m at the time.
		</p>
		<p>
			Although a $5m loss was a big hit, it wasn't disastrous for the exchange.
		</p>
		<p>
			<b><u>The Aftermath</b></u>:
		</p>
		<p>
			Bitstamp moved their hot wallets to MultiSig and contracted Xapo to handle cold storage.
		</p>
		<p>
			See the official report here <a class="hack-body-link" href="https://drive.google.com/file/d/0BxfQJKqaECgHQmo3ZWtrMTE1QVE/view">here</a>, which is quoted as saying:
			<span class="hack-body-quote">
				On 4th January, the attacker drained the Bitstamp wallet, as evidenced on the blockchain. Although the maximum content of this wallet was 5,000 Bitcoins at any one time, the attacker was able to steal over 18,000 Bitcoins throughout the day as further deposits were made by customers.
			</span>
			<span class="hack-body-quote">
				“Shortly after discovery of the attack, Bitstamp made an expensive but necessary decision to rebuild our entire trading platform and ancillary systems from the ground up, rather than trying to reboot our old system. We did this from a secure backup that was maintained (according to disaster recovery procedures) in a 'clean room' environment.
			</span>
			<span class="hack-body-quote">
				“Bitstamp has lost customers, including major clients engaged in providing merchant services in Bitcoin, and has suffered significant damage to its reputation, which we are unable to quantify exactly at this point, but which we believe exceeds $2 million.”
			</span>
		</p>
		</br>
		`
	},
	{
		name: 'Mt. Gox Hack',
		date: [2014, 1, 7],
		amount: 473000000,
		amountAbbreviated: '473m',
		description: `
		<p>
			The grand daddy of them all. In the largest disaster to date in the cryptocurrency world, about 630k BTC valued at $473m were hacked from exchange Mt. Gox over a period of several years.
		</p>
		<p>
			Prior to the attack, Mt. Gox was the largest exchange in the world, at one point handling over 70% of Bitcoin transactions.
		</p>
		<p>
			<b><u>How So Much Was Lost</b></u>:
		</p>
		<p>
			Much of the blame for the attack can be placed on Mt. Gox CEO, Mark Karpeles. Rumors of his incompetence as a manager and software engineer are abundant, including nuggets like him having sole authority of code approval and a lack of version control use on Gox software.
		</p>
		<p>
			Bitcoin is spent using digital signatures which are created by private keys. Nowadays, most wallets encrypt private keys to a password or PIN. But before September 2011 and the release of <a class="hack-body-link" href="https://github.com/Bitcoin/Bitcoin/blob/57b34599b2deb179ff1bd97ffeab91ec9f904d85/doc/release-notes/release-notes-0.4.0.md">Bitcoin 0.4.0</a>, the Bitcoin Core Wallet used unencrypted keys. This meant that an attacker didn't need any special password, just access to the wallet.dat file in order to gain access to Mt. Gox's private keys.
		</p>
		<p>
			<b><u>Timeline</b></u>:
		</p>
		<p>
			September 2011 — Mt. Gox’s hot wallet private keys were stolen from a wallet.dat file by either a hacker, rogue employee or a thefted backup.
		</p>
		<p>
			2011 to 2012 — Additional coins were stolen from exchanges Bitcoinica, Bitfloor and others.
		</p>
		<p>
			2012 to 2013 — The hacker(s) continuously siphoned BTC from addresses associated with Mt. Gox’s private keys. In addition, whenever these wallets were emptied, the Mt. Gox systems somehow interpreted the spending as deposits, crediting some users with up to about 40,000 extra BTC.
		</p>
		<p>
			Mid 2013 — Roughly 630,000 BTC total had been stolen from Mt. Gox. About 300,000 BTC of which ended up at BTC-e.
		</p>
		<p>
			Almost unbelievably, up to this point it seemed that Mt. Gox still didn't know its keys were compromised.
		</p>
		<p>
			Things came to a head in 2014, information from <a class="hack-body-link" href="https://en.wikipedia.org/wiki/Mt._Gox">Wikipedia</a>
		</p>
		<p>
			February 7, 2014 – Mt. Gox halted all Bitcoin withdrawals. The company said it was pausing withdrawal requests
			<span class="hack-body-quote">
				“to obtain a clear technical view of the currency processes”
			</span>
		</p>
		<p>
			February 10, 2014 – Mt. Gox issued a press release, stating that the issue was due to transaction malleability:
			<span class="hack-body-quote">
				“A bug in the Bitcoin software makes it possible for someone to use the Bitcoin network to alter transaction details to make it seem like a sending of Bitcoins to a Bitcoin wallet did not occur when in fact it did occur. Since the transaction appears as if it has not proceeded correctly, the Bitcoins may be resent. Mt Gox is working with the Bitcoin core development team and others to mitigate this issue.”
			</span>
		</p>
		<p>
			February 17, 2014 – with all Mt. Gox withdrawals still halted and competing exchanges back in full operation, the company published another press release indicating the steps it claimed it was taking to address security issues. In an email interview with the Wall Street Journal, CEO Mark Karpeles refused to comment on increasing concerns among customers about the financial status of the exchange, did not give a definite date on which withdrawals would be resumed, and wrote that the exchange would impose
			<span class="hack-body-quote">
				 “new daily and monthly limits on withdrawals if and when they were resumed.”
			</span>
			A poll of 3,000 Mt. Gox customers by CoinDesk indicated that 68% of polled customers were still awaiting funds from Mt. Gox. The median waiting time was between one and three months, and 21% of poll respondents had been waiting for three months or more.
		</p>
		<p>
			February 20, 2014 –  withdrawals still halted, Mt. Gox issued yet another statement, not giving any date for the resumption of withdrawals. A protest by two Bitcoin enthusiasts outside the building that houses the Mt. Gox headquarters in Tokyo continued. Citing “security concerns”, Mt. Gox moved its offices to a different location in Shibuya. Bitcoin prices quoted by Mt. Gox dropped to below 20% of the prices on other exchanges, reflecting the market’s estimate of the unlikelihood of Mt. Gox paying its customers.
		</p>
		<p>
			February 23, 2014 – Mt. Gox CEO Mark Karpeles resigned from the board of the Bitcoin Foundation. The same day, all posts on its Twitter account were removed.
		</p>
		<p>
			February 24, 2014 – Mt. Gox suspended all trading, and hours later its website went offline, returning a blank page. A leaked alleged internal crisis management document claimed that the company was insolvent, after having lost 744,408 Bitcoins in a theft which went undetected for years. Six other major Bitcoin exchanges released a joint statement distancing themselves from Mt. Gox, shortly before Mt. Gox’s website went offline.
		</p>
		<p>
			February 25, 2014 – Mt. Gox reported on its website that
			<span class="hack-body-quote">
				“decision was taken to close all transactions for the time being”
			</span>
			citing
			<span class="hack-body-quote">
				“recent news reports and the potential repercussions on Mt Gox’s operations”
			</span>
			Chief executive Mark Karpeles told Reuters that Mt. Gox was
			<span class="hack-body-quote">
				“at a turning point”
			</span>
		</p>
		<p>
			February 28, 2014 – Mt. Gox filed in Tokyo for a form of bankruptcy protection from creditors called minji saisei (or civil rehabilitation) to allow courts to seek a buyer, reporting that it had liabilities of about 6.5 billion yen ($65 million, at the time), and 3.84 billion yen in assets. The company said it had lost almost 750,000 of its customers’ Bitcoins, and around 100,000 of its own Bitcoins, totaling around 7% of all Bitcoins, and worth around $473 million near the time of the filing. Mt. Gox released a statement saying
			<span class="hack-body-quote">
				“The company believes there is a high possibility that the Bitcoins were stolen”
			</span>
			The company blamed hackers, and began a search for the missing Bitcoin. Chief Executive Karpeles said technical issues opened up the way for fraudulent withdrawals.
		</p>
		<p>
			Feb to March, 2014 – during the period of Mt. Gox problems, the value of Bitcoin declined by 36%.
		</p>
		<p>
			<b><u>The Aftermath</b></u>:
		</p>
		<p>
			The investigation is still ongoing (as of 2017) but recent revelations showed that the exchange was likely targeted by Eurasian hackers who subsequently laundered the money through the exchange BTC-e.
		</p>
		<p>
			BTC-e owner and operator Alexander Vinnik was arrested on June 25, 2017, accused of using BTC-e and Tradehill, another U.S.-based exchange he owned, to process funds “obtained” from Mt. Gox between 2011 and 2014.
		</p>
		<p>
			BTC-e is believed to have processed more than 300,000 Bitcoins in transactions that can be traced to the theft.
		</p>
		<p>
			As can be assumed, many, many early adopters were burned in the hack and insolvency of Mt. Gox.
		</p>
		</br>
		`
	},
	{
		name: 'Bitcoin Protocol Incident',
		date: [2010, 7, 15],
		amount: 184000000000,
		amountAbbreviated: '184b',
		description: `
		<p>
			On August 15, 2010, BTC Core developer Jeff Garzik discovered that block #74638 looked <a class="hack-body-link" href="https://Bitcointalk.org/index.php?topic=822.0">"quite strange."</a>
		</p>
		<p>
			Quite strange indeed. Good ole' block #74638 contained a transaction that created ~184 billion BTC for three separate addresses, two of them receiving 92.2b BTC with 0.1 BTC going to the miner.
		</p>
		<p>
			<b><u>The Vuln</b></u>:
		</p>
		<p>
			The code used for checking the transactions before including them in a block didn't account for the case of outputs so large that they overflowed when summed (an integer overflow bug).
		</p>
		<p>
			Instead of catching the bug, the network accepted the transaction. Luckily Garzik found it an hour and a half later.
		</p>
		<p>
			<b><u>The Resolution</b></u>:
		</p>
		<p>
			Two and a half hours after the revelation of the bug, Gavin Andresen made a patch, accepted an hour later by Satoshi.
		</p>
		<p>
			Five hours post incident, the blockchain was <b>hard forked</b>, with the new "good" chain taking over at block #74691
		</p>
		<p>
			<b><i>Note</b></i>
		</p>
		<p>
			The bad transaction & subsequent 184b BTC ceased existance post-fork but the 0.5 BTC consumed by it does. It appears to have come from a faucet and has not been used since.
		</p>
		</br>
		`
	}
];
