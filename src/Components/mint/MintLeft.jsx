import React from 'react'
import styles from './../../styles/MintLeft.module.css'
import head from '../../images/head.png'

const MintLeft = () => {
	return (
		<div className={styles.container}>
			<img src={head} alt="img" className={styles.img} />
			<div className={styles.text__container}>
				<div>
					<h6>Price</h6>
					<p>
						FREE! SKR is proud to bring it's genesis collection to Arbitrum for the low low price of $0, All we ask in return is be your awesome self!
					</p>
				</div>
				<div>
					<h6>Genesis Utility</h6>
					<p>Genesis members are the foundation of the world we are birthing together. The world within all things SKR live. Genesis holders will receive a Whitelist spot for Factions as well as some fun surprises in the future!</p>
				</div>
				<div>
					<h6>Supply</h6>
					<p>1111</p>
				</div>
			</div>
		</div>
	)
}

export default MintLeft
