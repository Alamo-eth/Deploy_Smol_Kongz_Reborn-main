/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import head1 from '../images/head.png'
import { Link } from 'react-router-dom'

const Hero = () => {
	return (
		<div className="hero-section">
			<div className="container">
				<ul className="social-btns">
					<li>
						<a target="_blank" href="https://twitter.com/SmolKongzNFT">
							<span className="twitter-icon"></span>
						</a>
					</li>
					<li>
						<a target="_blank" href="https://www.twitch.tv/smolkongz">
							<span className="twitch-icon"></span>
						</a>
					</li>
					<li>
						<a target="_blank" href="https://www.discord.gg/smolkongz">
							<span className="discord-icon"></span>
						</a>
					</li>
					<li>
						<a target="_blank" href="https://tofunft.com/collection/smol-kongz-reborn/items">
							<span className="tofu-icon"></span>
						</a>
					</li>
					<li>
						<a
							target="_blank"
							href="https://www.youtube.com/channel/UCma4GEeKUq5FukZVdSEGDXg"
						>
							<span className="youtube-icon"></span>
						</a>
					</li>
					{/* to add another buttom make sure edit the one below and make sure to edit in join.js too */}
					{/* <li><a target='_blank' href="https://www.discord.gg/smolkongz"><span className="discord-icon"></span></a></li> */}
				</ul>
				{/* <ul className='menu'>
          
        <li class="menu-item current"><a href="/Hero">Home</a></li>

                <li class="menu-item"><a href="#contact">Contact</a></li>
        </ul> */}
				<div className="hero-content">
					<h1>Smol Kongz Reborn</h1>
					<p1>Welcome to Kongonia</p1>
					<div className="mint-box">
						<img src={head1} alt="head" />
						<h3>Genesis Collection</h3>
						<p1>SOLD OUT</p1>

						<button className="mint-btn">
<a href='https://arbiscan.io/address/0x7c4ba0fd433d6cce82f96d671e9ceee2f16d0d5f'> Contract </a>
						</button>
					</div>
					
				</div>
			</div>
		</div>
	)
}

export default Hero
